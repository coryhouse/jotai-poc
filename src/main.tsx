import React from "react";
import ReactDOM from "react-dom/client";
import JotaiApp from "./JotaiApp.tsx";
import "./index.css";
import { DevTools } from "jotai-devtools";
import ContextApp from "./ContextApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextApp />
    <hr />
    <JotaiApp />
    <DevTools />
  </React.StrictMode>
);
