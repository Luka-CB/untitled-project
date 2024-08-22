import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import "./i18n.ts";
import ContextProvider from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </StrictMode>
);
