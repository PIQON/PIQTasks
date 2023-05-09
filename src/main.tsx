import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { AuthContextProvider } from "./store/auth/auth-context.tsx";
import { ThemeContextProvider } from "./store/theme/theme-context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

import "./scss/style.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </QueryClientProvider>
);
