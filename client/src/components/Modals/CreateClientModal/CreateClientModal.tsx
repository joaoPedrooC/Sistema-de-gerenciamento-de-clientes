import { MdClose } from "react-icons/md"

import styles from './style.module.css'
import { CreateClientForm } from "../../Forms/CreateClientForm/CreateClientForm"

interface ICreateClientModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateClientModal = ({ setIsOpen }: ICreateClientModalProps) => {
  return (
    <div role="dialog" className={`${styles.dialog__background} animate__animated animate__fadeIn`}>
      <div className="animate__animated animate__fadeInDown">
        <div className={styles.dialog__header}>
          <h3 className="fonts font__medium--bold">Cadastrar cliente</h3>
          <button onClick={() => setIsOpen(false)}>
            <MdClose />
          </button>
        </div>
        <div>
          <CreateClientForm setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  )
}