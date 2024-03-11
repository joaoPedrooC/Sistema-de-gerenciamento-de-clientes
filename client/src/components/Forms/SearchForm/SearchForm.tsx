import { MdSearch } from "react-icons/md"
import { Input } from "../../Input/Input"
import { Select } from "../../Select/Select"

import styles from './style.module.css'
import { useForm } from "react-hook-form"
import { TReadClientFilter } from "../../../interfaces/clients"
import { useContext } from "react"
import { ClientContext } from "../../../providers/ClientContext"

export const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm<TReadClientFilter>()

  const { filterClients, setFilteredClients } = useContext(ClientContext)

  const submit = (filterData: TReadClientFilter) => {
    filterClients(filterData)
    reset()
  }

  return (
    <form className={styles.searchForm__container} onSubmit={handleSubmit(submit)}>
      <div className={styles.searchForm__inputContainer}>
        <Input placeholder="Digite o nome, e-mail ou telefone que deseja buscar" type="text" {...register('value')} />
        <button type="submit" className={styles.submit__button}>
          <MdSearch />
        </button>
      </div>
      <Select {...register('type')}>
        <option value="nome">Buscar por nome</option>
        <option value="email">Buscar por e-mail</option>
        <option value="telefone">Buscar por telefone</option>
      </Select>
      <button type="button" className={`fonts font__small ${styles.clear__filters}`} onClick={() => setFilteredClients(null)}>Limpar</button>
    </form>
  )
}