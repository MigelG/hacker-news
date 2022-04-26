import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.date}>&copy; 2022</p>
            <p className={styles.author}>Михаил Горбунов</p>
        </footer>
    );
}

export default Footer;