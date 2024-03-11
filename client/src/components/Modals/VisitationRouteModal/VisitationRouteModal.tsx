import { MdClose } from 'react-icons/md'
import styles from './style.module.css'
import { useContext, useEffect } from 'react'
import { ClientContext } from '../../../providers/ClientContext'
import { RouteCard } from './RouteCard/RouteCard'

interface IVisitationRouteModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const VisitationRouteModal = ({ setIsOpen }: IVisitationRouteModalProps) => {
  const { getVisitationRoute, visitationRoute } = useContext(ClientContext)

  useEffect(() => {
    getVisitationRoute()
  }, [])

  return (
    <div className={styles.dialog__background} role="dialog">
      <div>
        <div className={styles.dialog__header}>
          <h3 className='fonts font__medium--bold'>Rota de visitação</h3>
          <button onClick={() => setIsOpen(false)}>
            <MdClose />
          </button>
        </div>
        <ol className={styles.dialog__clientList}>
          {visitationRoute?.map(clientRoute => (
            <RouteCard key={clientRoute.id} clientInfo={clientRoute}/>
          ))}
          {visitationRoute && visitationRoute.length > 0 ? (
            <li>
              <h3 className='fonts font__medium--bold'>De volta à empresa!</h3>
            </li>
          ) : null}
        </ol>
      </div>
    </div>
  )
}