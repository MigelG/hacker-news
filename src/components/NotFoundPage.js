import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className='news'>
            <button className='news__button' onClick={() => navigate('/news')} >Назад</button>
            <h1>Страница не найдена</h1>
        </div>
    )
}
