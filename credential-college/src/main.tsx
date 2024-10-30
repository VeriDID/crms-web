import "@/styles/global.scss";
import "@/locales/i18n";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import useAgentStore from "./stores/useAgent.store";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const API_URL = import.meta.env.VITE_API_URL;
const AGENT_API = import.meta.env.VITE_AGENT_API;

const fetchInitialData = async () => {
  const setAgentInfo = useAgentStore.getState().setAgentInfo; // Get the setAgentInfo function from the store
  try {
    const response = await fetch(`${API_URL}/v1.0/credo/${AGENT_API}`);
    const result = await response.text();
    setAgentInfo(result); // Update the agent info in the Zustand store
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
};

// Fetch initial data before rendering - create agent
await fetchInitialData();

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
