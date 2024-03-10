import { ReactNode, createContext, useEffect, useState } from "react";
import { TClientArray } from "../interfaces/clients";
import { api } from "../services/axios";

interface IClientProviderProps {
  children: ReactNode
}

interface IClientContext {
  clients: TClientArray | null
  setClients: React.Dispatch<React.SetStateAction<TClientArray | null>>
}

export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [clients, setClients] = useState<TClientArray | null>(null)

  const getClients = async () => {
    try {
      const { data } = await api.get<TClientArray>('/clients/')
      setClients(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClients()
  }, [])

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      { children }
    </ClientContext.Provider>
  )
}