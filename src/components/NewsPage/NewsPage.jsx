import CommentsList from '../CommentList/CommentsList';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import api from '../../utils/api';
import styles from './NewsPage.module.scss';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState({});
    const navigate = useNavigate();
    const count = useRef(0);

    const regex = /^[0-9]+$/;
    if (!regex.test(id)) {
        navigate('/error');
    }

    // Получаю новость с сервера по id
    useEffect(() => {
        api.getItemById(id)
            .then((i) => {
                if (i && i.type === 'story') {
                    setNews(i);
                } else {
                    navigate('/error');
                }
            })
            .catch(err => console.log(err));
    }, []);

    // Стейт для подсчета количества комментариев
    const [allKids, setAllKids] = useState(0);
    function changeAllKids(kids) {
        setAllKids(allKids + kids);
    }

    const date = new Date(news.time * 1000);

    return (
        <article className={styles.news}>
            <button className={styles.button} onClick={() => navigate('/')} >Назад</button>
            <div className={styles.info}>
                <p className={styles.author}>Автор: {news.by}</p>
                <p className={styles.date}>
                    Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(-1. - 3)}.
                </p>
            </div>
            <h1 className={styles.title}>{news.title}</h1>
            <p>{news.text}</p>
            {news.url ?
                <a className={styles.link} href={news.url} target='_blank' rel="noreferrer">Ссылка на новость</a> :
                <span className={styles.link}>Ссылка на новость отсутствует</span>}
            {news.kids ?
                <CommentsList
                    commentsList={news.kids}
                    changeAllKids={changeAllKids}
                    count={count} /> :
                'Комментариев пока нет :('}
        </article>
    );
}

export default NewsPage;