import logo from '../../images/logo.svg';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Логотип' className={styles.logo} />
            <p className={styles.title}>Hacker News!</p>
        </header>
    );
}

export default Header;