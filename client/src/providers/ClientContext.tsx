import { ReactNode, createContext, useEffect, useState } from "react";
import { TClient, TClientArray, TClientCreate, TReadClientFilter } from "../interfaces/clients";
import { api } from "../services/axios";

interface IClientProviderProps {
  children: ReactNode
}

interface IClientContext {
  clients: TClientArray
  setClients: React.Dispatch<React.SetStateAction<TClientArray>>
  createClient: (clientInfo: TClientCreate) => Promise<void>
  filteredClients: TClientArray | null
  setFilteredClients: React.Dispatch<React.SetStateAction<TClientArray | null>>
  filterClients: (filterInfo: TReadClientFilter) => Promise<void>
  getVisitationRoute: () => Promise<void>
  visitationRoute: TClientArray | undefined
}

export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [clients, setClients] = useState<TClientArray>([])
  const [filteredClients, setFilteredClients] = useState<TClientArray | null>(null)
  const [visitationRoute, setVisitationRoute] = useState<TClientArray | undefined>(undefined)

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
      setFilteredClients(null)
    } catch (error) {
      console.log(error);
    }
  }

  const filterClients = async (filterInfo: TReadClientFilter) => {
    try {
      const { data } = await api.get<TClientArray>(`/clients?${filterInfo.type}=${filterInfo.value}`)
      setFilteredClients(data)
    } catch (error) {
      console.log(error);
    }
  }

  const getVisitationRoute = async () => {
    try {
      const { data } = await api.get<TClientArray>('/clients/route')
      setVisitationRoute(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ClientContext.Provider value={{ clients, setClients, createClient, filteredClients, filterClients, setFilteredClients, getVisitationRoute, visitationRoute }}>
      { children }
    </ClientContext.Provider>
  )
}