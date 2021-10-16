import { FC } from 'react';

import styles from './HeaderComponent.scoped.scss';
import logo from '../../assets/images/Logo_shadow.svg';

const HeaderComponent: FC = () => {
    return (
        <header className={styles.headerComponentContainer}>
            <a href="/" className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Not found" />
            </a>
        </header>
    )
}

export default HeaderComponent