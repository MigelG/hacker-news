import styles from './MyButton.module.scss';

function MyButton({ children, ...props }) {
    return (
        <button
            className={styles.button}
            type='button'
            {...props} >
            {children}
        </button>
    )
}

export default MyButton;