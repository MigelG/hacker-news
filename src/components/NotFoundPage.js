import { useHistory } from 'react-router-dom';

export default function NotFoundPage() {

    const router = useHistory();

    return (
        <div className='news'>
            <button className='news__button' onClick={() => router.push('/news')} >Назад</button>
            <h1>Страница не найдена</h1>
        </div>
    )
}
