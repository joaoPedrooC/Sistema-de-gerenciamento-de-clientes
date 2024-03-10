export type TClient = {
  id: string
  nome: string
  email: string
  telefone: string
}

export type TClientCreate = Omit<TClient, 'id'>

export type TGetClientParams = {
  name?: string
  email?: string
  telefone?: string
}