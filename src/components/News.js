import CommentsList from './CommentsList';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../utils/api';

function News() {
    const { id } = useParams();
    const [news, setNews] = useState({});
    // Получаю новость с сервера по id, а не из уже готового списка
    // на случай, если пользователь сам укажет id в адресной строке
    useEffect(() => {
        api.getItemById(id)
            .then((i) => {
                if (i && i.type === 'story') {
                    setNews(i);
                } else {
                    setNews({
                        "by": "Администратор",
                        "time": 0,
                        "title": "Запрашиваемый ресурс отсутствует"
                    });
                }
            })
            .catch(err => console.log(err));
    }, []);

    // Стейт для подсчета количества комментариев
    const [allKids, setAllKids] = useState(0);
    function changeAllKids(kids) {
        setAllKids(allKids + kids);
    }

    const history = useHistory();
    const date = new Date(news.time * 1000);

    return (
        <article className="news">
            <button className='news__button' onClick={() => history.goBack()}>Назад</button>
            <div className='news__info'>
                <p className='news__author'>Автор: {news.by}</p>
                <p className='news__date'>
                    Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(-1. - 3)}.
                </p>
            </div>
            <h1 className='news__title'>{news.title}</h1>
            <p>{news.text}</p>
            {news.url ?
                <a className='news__link' href={news.url} target='_blank' rel="noreferrer">Ссылка на новость</a> :
                <span className='news__link'>Ссылка на новость отсутствует</span>}
            <div className='comments'>
                {news.kids ?
                    <>
                        <h2 className='comments__title'>Комментарии ({allKids}):</h2>
                        <CommentsList
                            commentsList={news.kids}
                            changeAllKids={changeAllKids} />
                    </> :
                    'Комментариев пока нет :('}
            </div>
        </article>
    );
}

export default News;