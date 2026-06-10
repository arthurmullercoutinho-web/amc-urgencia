import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SchemaMarkup from "./components/SchemaMarkup";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BuscaApreensao from "./pages/BuscaApreensao";
import BloqueioJudicial from "./pages/BloqueioJudicial";
import RevisaoFinanciamento from "./pages/RevisaoFinanciamento";
import CobancasAbusivas from "./pages/CobancasAbusivas";
import ProblemasImobiliarios from "./pages/ProblemasImobiliarios";
import ConflitosContratuais from "./pages/ConflitosContratuais";
import NotificacaoExtrajudicial from "./pages/NotificacaoExtrajudicial";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/busca-apreensao"} component={BuscaApreensao} />
      <Route path={"/bloqueio-judicial"} component={BloqueioJudicial} />
      <Route path={"/revisao-financiamento"} component={RevisaoFinanciamento} />
      <Route path={"/cobranças-abusivas"} component={CobancasAbusivas} />
      <Route path={"/problemas-imobiliarios"} component={ProblemasImobiliarios} />
      <Route path={"/conflitos-contratuais"} component={ConflitosContratuais} />
      <Route path={"/notificacao-extrajudicial"} component={NotificacaoExtrajudicial} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <SchemaMarkup />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
