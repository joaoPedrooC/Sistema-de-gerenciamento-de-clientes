import { useEffect, useRef, useState } from "react"
import { TClient } from "../../../interfaces/clients"

import styles from './syle.module.css'

interface IClientCardProps {
  client: TClient
}

export const ClientCard = ({ client }: IClientCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLLIElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }))

  useEffect(() => {
    observer.observe(ref.current!)
  }, [])

  return (
    <li className={`${styles.client__card} ${isVisible ? 'animate__animated animate__fadeIn' : ''}`} id={client.id} ref={ref}>
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