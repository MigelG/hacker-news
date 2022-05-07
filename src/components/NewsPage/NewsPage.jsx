import CommentsList from '../CommentList/CommentsList';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import api from '../../utils/api';
import styles from './NewsPage.module.scss';
import MyButton from '../ui/MyButton/MyButton';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState({});
    const navigate = useNavigate();
    const count = useRef(0);
    const ref = useRef();
    const [notFoundError, setNotFoundError] = useState(false);

    // Получаю новость с сервера по id
    useEffect(() => {
        api.getItemById(id)
            .then((i) => {
                if (i && i.type === 'story') {
                    setNews(i);
                } else {
                    setNotFoundError(true);
                }
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (news.text) {
            ref.current.insertAdjacentHTML("afterbegin", news.text);
        } else {
            ref.current.insertAdjacentHTML("afterbegin", '');
        }
    }, [news]);

    // Стейт для подсчета количества комментариев
    const [allKids, setAllKids] = useState(0);
    function changeAllKids(kids) {
        setAllKids(allKids + kids);
    }

    const date = new Date(news.time * 1000);

    return (
        notFoundError ?
            <NotFoundPage /> :
            <article className={styles.news}>
                <MyButton onClick={() => navigate('/')}>Назад</MyButton>
                <div className={styles.info}>
                    <p className={styles.author}>Автор: {news.by}</p>
                    <p className={styles.date}>
                        Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(-1. - 3)}.
                    </p>
                </div>
                <h1 className={styles.title}>{news.title}</h1>
                <p ref={ref}></p>
                {news.url ?
                    <a className={styles.link} href={news.url} target='_blank' rel="noreferrer">Ссылка на новость</a> :
                    <span className={styles.link}>Ссылка на новость отсутствует</span>}
                {news.kids ?
                    <>
                        <h2 className={styles.comments}>Комментарии ({count.current}):</h2>
                        <CommentsList
                            commentsList={news.kids}
                            changeAllKids={changeAllKids}
                            count={count} />
                    </> :
                    <h2 className={styles.comments}>Комментариев пока нет :(</h2>}
            </article>
    );
}

export default NewsPage;