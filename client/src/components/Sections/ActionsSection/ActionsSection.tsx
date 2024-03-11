import { useState } from "react"
import { SearchForm } from "../../Forms/SearchForm/SearchForm"

import styles from './style.module.css'
import { VisitationRouteModal } from "../../Modals/VisitationRouteModal/VisitationRouteModal"

export const ActionsSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section className={styles.actions__section}>
      <SearchForm />
      <button className="fonts font__small" onClick={() => setIsOpen(true)}>Visualizar rotas de visitação</button>
      { isOpen ? <VisitationRouteModal setIsOpen={setIsOpen} /> : null }
    </section>
  )
}