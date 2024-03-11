export type TClient = {
  id: string
  nome: string
  email: string
  telefone: string
  coordinate_x: number
  coordinate_y: number
}

export type TClientCreate = Omit<TClient, 'id'>

export type TGetClientParams = {
  name?: string
  email?: string
  telefone?: string
}