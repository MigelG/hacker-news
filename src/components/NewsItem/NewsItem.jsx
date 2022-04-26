import { Link } from 'react-router-dom';
import styles from './NewsItem.module.scss';

function NewsItem({ id, title, author, time, score }) {
    const date = new Date(time * 1000);

    return (
        <Link to={`/${id}`} className={styles.card}>
            <li className={styles.body}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.info}>
                    <p className={styles.author}>Автор: {author}</p>
                    <p className={styles.date}>
                        Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(0, -3)}
                    </p>
                    <p className={styles.score}>Рейтинг: {score}</p>
                </div>
            </li>
        </Link>
    );
}

export default NewsItem;