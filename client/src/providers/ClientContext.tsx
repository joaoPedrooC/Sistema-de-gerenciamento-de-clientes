import { ReactNode, createContext, useEffect, useState } from "react";
import { TClient, TClientArray, TClientCreate } from "../interfaces/clients";
import { api } from "../services/axios";

interface IClientProviderProps {
  children: ReactNode
}

interface IClientContext {
  clients: TClientArray
  setClients: React.Dispatch<React.SetStateAction<TClientArray>>
  createClient: (clientInfo: TClientCreate) => Promise<void>
}

export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [clients, setClients] = useState<TClientArray>([])

  const getClients = async () => {
    try {
      const { data } = await api.get<TClientArray>('/clients')
      setClients(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClients()
  }, [])

  const createClient = async (clientInfo: TClientCreate) => {
    try {
      const { data } = await api.post<TClient>('/clients', clientInfo)
      setClients([...clients, data])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ClientContext.Provider value={{ clients, setClients, createClient }}>
      { children }
    </ClientContext.Provider>
  )
}