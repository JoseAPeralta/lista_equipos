# AGENTS.md

Static web app (Vite + React 19 + TypeScript + Chakra UI v3) that displays an electronics-component inventory for students. All UI text is Spanish.

## Commands
- `pnpm dev` — dev server
- `pnpm build` — `tsc -b && vite build` (typecheck happens here; no separate typecheck script)
- `pnpm test` — Vitest (jsdom) for `*.test.{ts,tsx}` unit/component tests; config lives in `vite.config.ts`
- `pnpm lint` — ESLint (flat config, react-hooks + react-refresh rules)
- `pnpm preview` — serve production build

## Architecture
- Single source of truth: `inventario_componentes.json` at repo root. It holds 8 `products` (kits + individual items); each product has a `content` array of components.
- Data flow: `src/data/inventory.ts` imports the JSON, flattens `products[].content` into normalized components, **dedupes by Spanish name and sums `amount`** (207 content lines → 165 unique; 38 names repeat across kits). Do not display raw content lines without dedup.
- Items have no `type`/`category` field; category is derived by keyword rules + manual overrides, not read from JSON.
- Component fields: `name` (`spanish`/`english`), `amount`, `description`, `compatibility` (array of `{platform, compatible, considerations}` for 3 platforms: Arduino Nano V3.0, ESP32-DevKitC-32, Raspberry Pi Zero 2 W).
- No backend, no router; state is held in `App.tsx`/hooks with `useMemo`.

## Toolchain quirks
- React Compiler is enabled via a Babel plugin (`@rolldown/plugin-babel` + `reactCompilerPreset` in `vite.config.ts`); do not hand-optimize with `useMemo`/`useCallback` as a workaround for render cost.
- `tsconfig.app.json` sets `verbatimModuleSyntax` (use `import type` for type-only imports), `noUnusedLocals`/`noUnusedParameters`, `erasableSyntaxOnly`. Path alias `@/*` → `./src/*`.
- `tsconfig.app.json` does **not** set `resolveJsonModule`; add it before importing the inventory JSON, otherwise `pnpm build` fails.
- Color mode (light/dark) uses `next-themes` via `src/components/ui/color-mode.tsx` (`useColorMode`/`useColorModeValue`); wrap new UI in Chakra components from `@chakra-ui/react` v3.
- Style with Chakra UI v3 props only — do not add CSS files; the Vite template CSS was removed.