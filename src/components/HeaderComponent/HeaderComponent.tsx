import styles from './HeaderComponent.scoped.scss';
import logo from '../../assets/images/Logo.svg';
import { FC } from 'react';

const HeaderComponent: FC = () => {
    return (
        <header className={styles.headerComponentContainer}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Not found" />
            </div>
        </header>
    )
}

export default HeaderComponent