import "./styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { authStore } from "./stores";
import App from "./App.tsx";

const stores = {
  authStore: authStore,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
