import { SearchForm } from "../../Forms/SearchForm/SearchForm"

import styles from './style.module.css'

export const ActionsSection = () => {
  return (
    <section className={styles.actions__section}>
      <SearchForm />
    </section>
  )
}