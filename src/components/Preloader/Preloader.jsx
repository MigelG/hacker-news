import styles from './Preloader.module.scss';

function Preloader() {
    return (
        <div className={styles.preloader}>
            <div className={styles.loader} />
        </div>
    )
}

export default Preloader;