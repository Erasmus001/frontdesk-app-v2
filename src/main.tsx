import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <Toaster />
    </AuthContextProvider>
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
