import { useContext } from 'react';
import { ClientContext } from '../../providers/ClientContext';
import { ClientCard } from './ClientCard/ClientCard';

import styles from './style.module.css'

export const ClientsList = () => {
	const { clients } = useContext(ClientContext);

	return (
		<ul className={styles.clients__list}>
			{clients ? (
				clients.map(client => <ClientCard client={client} key={client.id} />)
			) : (
				<h1 className='fonts font__primary'>
					Nenhum cliente cadastrado até o momento...
				</h1>
			)}
		</ul>
	);
};
