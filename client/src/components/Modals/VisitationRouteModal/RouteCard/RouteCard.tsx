import { TClient } from "../../../../interfaces/clients"

import styles from './style.module.css'

interface IRouteCardProps {
  clientInfo: TClient
}

export const RouteCard = ({ clientInfo }: IRouteCardProps) => {
  return (
    <li className={styles.route__card}>
      <p className="fonts font__small">{clientInfo.nome}</p>
      <span className="fonts font__small">{clientInfo.email}</span>
      <div className={styles.card__coordinates}>
        <span className="fonts font__small">X: {clientInfo.coordinate_x}</span>
        <span className="fonts font__small">Y: {clientInfo.coordinate_y}</span>
      </div>
      <div className={styles.route__line}></div>
    </li>
  )
}