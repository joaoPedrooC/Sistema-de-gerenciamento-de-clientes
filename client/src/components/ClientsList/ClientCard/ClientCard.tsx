import { TClient } from "../../../interfaces/clients"

import styles from './syle.module.css'

interface IClientCardProps {
  client: TClient
}

export const ClientCard = ({ client }: IClientCardProps) => {
  return (
    <li className={styles.client__card}>
      <p className="fonts font__small">Nome: {client.nome}</p>
      <span className="fonts font__small">Email: {client.email}</span>
      <span className="fonts font__small">Telefone: ({client.telefone.slice(0,2)}) {client.telefone.slice(2,7)}-{client.telefone.slice(7)}</span>
      <div>
        <span className="fonts font__small">X: {client.coordinate_x}</span>
        <span className="fonts font__small">Y: {client.coordinate_y}</span>
      </div>
    </li>
  )
}