import { createContext } from "react";

import useClients from "../hooks/useClients";

const Context = createContext();

function ClientProvider({ children }) {
  const { register, deleteAllClients } = useClients();

  return <Context.Provider value={{ register, deleteAllClients }}>{children}</Context.Provider>;
}

export { Context, ClientProvider };
