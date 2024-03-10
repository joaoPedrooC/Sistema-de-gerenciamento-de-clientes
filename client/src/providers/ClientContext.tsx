import { ReactNode, createContext } from "react";

interface IClientProviderProps {
  children: ReactNode
}

export const ClientContext = createContext({})

export const ClientProvider = ({ children }: IClientProviderProps) => {
  return (
    <ClientContext.Provider value={{}}>
      { children }
    </ClientContext.Provider>
  )
}