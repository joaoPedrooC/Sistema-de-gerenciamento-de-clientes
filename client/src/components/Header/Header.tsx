import { IoAddCircleOutline } from 'react-icons/io5'
import styles from './style.module.css'
import { useState } from 'react';
import { CreateClientModal } from '../Modals/CreateClientModal/CreateClientModal';

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<header className={styles.header__container}>
			<div className='container'>
				<h3 className='fonts font__medium--bold'>System</h3>
				<nav>
					<button className={`fonts font__medium ${styles.register__button}`} onClick={() => setIsOpen(true)}>
						<IoAddCircleOutline /> Cadastrar
					</button>
				</nav>
				{isOpen ? <CreateClientModal setIsOpen={setIsOpen} /> : null}
			</div>
		</header>
	);
};
