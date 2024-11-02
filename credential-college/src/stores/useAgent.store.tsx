import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AgentState {
  agentInfo: any; // Replace 'any' with a specific type if possible
  setAgentInfo: (data: any) => void; // Function to update agentInfo
}

const useAgentStore = create<AgentState>()(
  devtools(
    (set) => ({
      agentInfo: null, // Initial state
      setAgentInfo: (data) => set({ agentInfo: data }), // Update function
    }),
    {
      enabled: true, // enabled in dev-tool
      name: "student store", // dev-tool
    }
  )
);

export default useAgentStore;
