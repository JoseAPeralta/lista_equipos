import { useReducer } from "react";
import type {
  CompatibilityPlatform,
  ComponentCategory,
  InventoryComponent,
} from "@/types/inventory";

export const inventoryPageSizes = [12, 24, 48] as const;

export type InventoryPageSize = (typeof inventoryPageSizes)[number];

export interface InventoryFilters {
  search: string;
  category: ComponentCategory | null;
  platform: CompatibilityPlatform | null;
  includeAdapted: boolean;
}

export interface InventoryQueryState extends InventoryFilters {
  page: number;
  pageSize: InventoryPageSize;
}

export type InventoryQueryAction =
  | { type: "search-changed"; value: string }
  | { type: "category-changed"; value: ComponentCategory | null }
  | { type: "platform-changed"; value: CompatibilityPlatform | null }
  | { type: "include-adapted-changed"; value: boolean }
  | { type: "page-changed"; value: number }
  | { type: "page-size-changed"; value: InventoryPageSize }
  | { type: "filters-reset" };

export interface UseInventoryResult {
  filters: InventoryFilters;
  visibleComponents: InventoryComponent[];
  totalComponents: number;
  totalResults: number;
  page: number;
  pageSize: InventoryPageSize;
  totalPages: number;
  rangeStart: number;
  rangeEnd: number;
  hasActiveFilters: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
  setSearch: (value: string) => void;
  setCategory: (value: ComponentCategory | null) => void;
  setPlatform: (value: CompatibilityPlatform | null) => void;
  setIncludeAdapted: (value: boolean) => void;
  setPage: (value: number) => void;
  setPageSize: (value: InventoryPageSize) => void;
  resetFilters: () => void;
}

export function createInitialInventoryQueryState(
  pageSize: InventoryPageSize = 12,
): InventoryQueryState {
  return {
    search: "",
    category: null,
    platform: null,
    includeAdapted: false,
    page: 1,
    pageSize,
  };
}

function normalizePositiveInteger(value: number): number {
  return Number.isFinite(value) ? Math.max(1, Math.trunc(value)) : 1;
}

export function inventoryQueryReducer(
  state: InventoryQueryState,
  action: InventoryQueryAction,
): InventoryQueryState {
  switch (action.type) {
    case "search-changed":
      return { ...state, search: action.value, page: 1 };
    case "category-changed":
      return { ...state, category: action.value, page: 1 };
    case "platform-changed":
      return {
        ...state,
        platform: action.value,
        includeAdapted: action.value ? state.includeAdapted : false,
        page: 1,
      };
    case "include-adapted-changed":
      return {
        ...state,
        includeAdapted: state.platform ? action.value : false,
        page: 1,
      };
    case "page-changed":
      return { ...state, page: normalizePositiveInteger(action.value) };
    case "page-size-changed":
      return { ...state, pageSize: action.value, page: 1 };
    case "filters-reset":
      return createInitialInventoryQueryState(state.pageSize);
  }
}

export function normalizeSearchText(value: string): string {
  return value
    .trim()
    .normalize("NFKD")
    .replace(/\p{Mark}/gu, "")
    .toLocaleLowerCase("es")
    .replace(/\s+/gu, " ");
}

export function compareInventoryComponents(
  left: InventoryComponent,
  right: InventoryComponent,
): number {
  return left.name.spanish.localeCompare(right.name.spanish, "es", {
    numeric: true,
    sensitivity: "base",
  });
}

export function filterInventoryComponents(
  components: readonly InventoryComponent[],
  filters: InventoryFilters,
): InventoryComponent[] {
  const searchTerms = normalizeSearchText(filters.search)
    .split(" ")
    .filter(Boolean);

  return components
    .filter((component) => {
      if (filters.category && component.category !== filters.category) {
        return false;
      }

      if (filters.platform) {
        const compatibility = component.compatibility.find(
          ({ platform }) => platform === filters.platform,
        );
        const isCompatible = compatibility?.compatible === "sí";
        const isAdapted =
          filters.includeAdapted &&
          compatibility?.compatible === "sí, con adaptación";

        if (!isCompatible && !isAdapted) {
          return false;
        }
      }

      if (searchTerms.length === 0) {
        return true;
      }

      const searchableText = normalizeSearchText(
        [
          component.name.spanish,
          component.name.english,
          ...component.name.englishAliases,
          component.description,
        ].join(" "),
      );

      return searchTerms.every((term) => searchableText.includes(term));
    })
    .sort(compareInventoryComponents);
}

export function getTotalPages(
  totalResults: number,
  pageSize: InventoryPageSize,
): number {
  return Math.max(1, Math.ceil(totalResults / pageSize));
}

export function clampPage(page: number, totalPages: number): number {
  return Math.min(
    normalizePositiveInteger(page),
    normalizePositiveInteger(totalPages),
  );
}

export function paginateInventoryComponents(
  components: readonly InventoryComponent[],
  page: number,
  pageSize: InventoryPageSize,
): InventoryComponent[] {
  const safePage = clampPage(page, getTotalPages(components.length, pageSize));
  const start = (safePage - 1) * pageSize;

  return components.slice(start, start + pageSize);
}

export function useInventory(
  components: readonly InventoryComponent[],
  initialPageSize: InventoryPageSize = 12,
): UseInventoryResult {
  const [state, dispatch] = useReducer(
    inventoryQueryReducer,
    createInitialInventoryQueryState(initialPageSize),
  );
  const filters: InventoryFilters = {
    search: state.search,
    category: state.category,
    platform: state.platform,
    includeAdapted: state.includeAdapted,
  };
  const filteredComponents = filterInventoryComponents(components, filters);
  const totalResults = filteredComponents.length;
  const totalPages = getTotalPages(totalResults, state.pageSize);
  const page = clampPage(state.page, totalPages);
  const visibleComponents = paginateInventoryComponents(
    filteredComponents,
    page,
    state.pageSize,
  );
  const rangeStart = totalResults === 0 ? 0 : (page - 1) * state.pageSize + 1;
  const rangeEnd = Math.min(page * state.pageSize, totalResults);
  const hasActiveFilters = Boolean(
    state.search || state.category || state.platform,
  );

  return {
    filters,
    visibleComponents,
    totalComponents: components.length,
    totalResults,
    page,
    pageSize: state.pageSize,
    totalPages,
    rangeStart,
    rangeEnd,
    hasActiveFilters,
    canGoPrevious: page > 1,
    canGoNext: page < totalPages,
    setSearch: (value) => dispatch({ type: "search-changed", value }),
    setCategory: (value) => dispatch({ type: "category-changed", value }),
    setPlatform: (value) => dispatch({ type: "platform-changed", value }),
    setIncludeAdapted: (value) =>
      dispatch({ type: "include-adapted-changed", value }),
    setPage: (value) =>
      dispatch({
        type: "page-changed",
        value: clampPage(value, totalPages),
      }),
    setPageSize: (value) => dispatch({ type: "page-size-changed", value }),
    resetFilters: () => dispatch({ type: "filters-reset" }),
  };
}
