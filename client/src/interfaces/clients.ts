export type TClient = {
  id: string
  nome: string
  email: string
  telefone: string
  coordinate_x: number
  coordinate_y: number
}

export type TClientCreate = Omit<TClient, 'id'>
export type TClientArray = Array<TClient>
export type TReadClientFilter = {
  type: 'nome' | 'email' | 'telefone'
  value: string
}