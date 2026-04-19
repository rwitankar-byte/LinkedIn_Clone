// UserContext.jsx
// 👤 Member 3 — build this context
// This is a placeholder so the app doesn't crash

import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}