import { Link } from 'react-router-dom';

function NewsPreview({ id, title, author, time, score }) {
    const date = new Date(time * 1000);

    return (
        <Link to={`/news/${id}`} className='card'>
            <article className='card__body'>
                <h2 className='card__title'>{title}</h2>
                <div className='card__info'>
                    <p className='card__author'>Автор: {author}</p>
                    <p className='card__date'>
                        Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(0, -3)}
                    </p>
                    <p className='card__score'>Рейтинг: {score}</p>
                </div>
            </article>
        </Link>
    );
}

export default NewsPreview;