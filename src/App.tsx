import { Box } from "@chakra-ui/react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { DownloadsPage } from "@/pages/DownloadsPage";
import { InventoryPage } from "@/pages/InventoryPage";
import { useHashRoute } from "@/hooks/use-hash-route";

function App() {
  const route = useHashRoute();

  return (
    <Box minH="100dvh" bg="bg.subtle" color="fg">
      <SiteNav route={route} />
      {route === "descargas" ? <DownloadsPage /> : <InventoryPage />}
      <SiteFooter />
    </Box>
  );
}

export default App;
