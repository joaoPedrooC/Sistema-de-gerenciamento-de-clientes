import { useContext } from 'react';
import { ClientContext } from '../../providers/ClientContext';
import { ClientCard } from './ClientCard/ClientCard';

import styles from './style.module.css';

export const ClientsList = () => {
	const { clients, filteredClients } = useContext(ClientContext);

	return (
		<ul className={styles.clients__list}>
			{filteredClients
				? filteredClients.map(client => (
						<ClientCard client={client} key={client.id} />
				  ))
				: null}
			{clients && !filteredClients
				? clients.map(client => <ClientCard client={client} key={client.id} />)
				: null}
			{clients.length === 0 ? (
				<h1 className='fonts font__medium'>
					Nenhum cliente cadastrado até o momento...
				</h1>
			) : null}
		</ul>
	);
};
