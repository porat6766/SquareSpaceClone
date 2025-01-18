import { StrictMode } from "react";
// import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { store } from "./store/index.js";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </QueryClientProvider>
  </StrictMode>
);
