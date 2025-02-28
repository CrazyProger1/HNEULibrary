import "./styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import App from "./App.tsx";

const stores = {};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
