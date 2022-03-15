import CommentsList from './CommentsList';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Redirect } from 'react-router-dom';

function News() {
    const { id } = useParams();
    const [news, setNews] = useState({});
    const router = useHistory();

    const regex = /^[0-9]+$/;
    if (!regex.test(id)) {
        router.push('/error');
    }

    // Получаю новость с сервера по id, а не из уже готового списка
    // на случай, если пользователь сам укажет id в адресной строке
    useEffect(() => {
        api.getItemById(id)
            .then((i) => {
                if (i && i.type === 'story') {
                    setNews(getComments(i));
                } else {

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

    function getComments(object) {
        if (!object.kids) {
            return object;
        }
        let arr = [];
        changeAllKids(object.kids.length);
        object.kids.forEach(async (id) => {
            await api.getItemById(id)
                .then((c) => {
                    if (!c.dead && !c.deleted) {
                        if (c.kids) {
                            getComments(c);
                        }
                        arr.push(c);
                    }
                })
        });
        object.kids = arr;
        return object;
    }

    return (
        <article className="news">
            <button className='news__button' onClick={() => router.push('/news')} >Назад</button>
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
                            commentsList={news.kids} />
                    </> :
                    'Комментариев пока нет :('}
            </div>
        </article>
    );
}

export default News;