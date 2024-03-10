import { IoAddCircleOutline } from 'react-icons/io5'
import styles from './style.module.css'

export const Header = () => {
	return (
		<header className={styles.header__container}>
			<div className='container'>
				<h3 className='fonts font__medium--bold'>System</h3>
				<nav>
					<button className={`fonts font__medium ${styles.register__button}`}>
						<IoAddCircleOutline /> Cadastrar
					</button>
				</nav>
			</div>
		</header>
	);
};
