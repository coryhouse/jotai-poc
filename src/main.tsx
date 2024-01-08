import React from "react";
import ReactDOM from "react-dom/client";
import JotaiApp from "./JotaiApp.tsx";
import "./index.css";
import { DevTools } from "jotai-devtools";
import ContextGlobalApp from "./ContextGlobalApp.tsx";
import ContextSubtreeApp from "./ContextSubtreeApp.tsx";
import ContextOptimizedSubtreeApp from "./ContextOptimizedSubtreeApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextGlobalApp />
    <hr />
    <ContextSubtreeApp />
    <hr />
    <ContextOptimizedSubtreeApp />
    <hr />
    <JotaiApp />
    <DevTools />
  </React.StrictMode>
);
