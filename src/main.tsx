import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactQueryProviders from "./providers/ReactQueryProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <ReactQueryProviders>
    <App />
  </ReactQueryProviders>
);
