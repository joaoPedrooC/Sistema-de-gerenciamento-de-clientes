import { useForm } from "react-hook-form"
import { Input } from "../../Input/Input"

import styles from './style.module.css'
import { TClientCreate } from "../../../interfaces/clients"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateClientSchema } from "./createClientSchema"
import { useContext } from "react"
import { ClientContext } from "../../../providers/ClientContext"

interface ICreateClientFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateClientForm = ({ setIsOpen }: ICreateClientFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TClientCreate>({
    resolver: zodResolver(CreateClientSchema)
  })

  const { createClient } = useContext(ClientContext)

  const submit = async (formData: TClientCreate) => {
    await createClient(formData)
    setIsOpen(false)
  }

  return (
    <form className={styles.createClient__form} onSubmit={handleSubmit(submit)}>
        <Input placeholder="Digite o nome do cliente" type="text" error={errors.nome} {...register('nome')} />
        <Input placeholder="Digite o e-mail do cliente" type="email" error={errors.email} {...register('email')} />
        <Input placeholder="Digite o telefone do cliente (com DDD)" type="number" error={errors.telefone} {...register('telefone')} />
        <button type="submit" className="fonts font__small">Cadastrar</button>
    </form>
  )
}