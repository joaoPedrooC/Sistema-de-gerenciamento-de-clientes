import { ReactNode, createContext, useEffect, useState } from "react";
import { TClientArray } from "../interfaces/clients";
import { api } from "../services/axios";

interface IClientProviderProps {
  children: ReactNode
}

export const ClientContext = createContext({})

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [clients, setClients] = useState<TClientArray>([])

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