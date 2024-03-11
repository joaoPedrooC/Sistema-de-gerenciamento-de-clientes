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
    </li>
  )
}