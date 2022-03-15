import NewsPreview from './NewsPreview';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import Preloader from './Preloader';

function Main({ newsList, setNewsList }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!newsList.length) {
            // Получаю с сервера массив из 500 id последних новостей
            api.getNews()
                .then(data => {
                    return data.slice(0, 100);
                })
                .then((data) => {

                    // На каждый id запрашиваю новость
                    const promises = data.map((id) => {
                        return api.getItemById(id)
                            .catch(err => console.log(err));
                    });

                    // Когда все новости будут получены, показываю их пользователю
                    Promise.all(promises)
                        .then((results) => {
                            setNewsList(results);
                            setLoading(false);
                        })
                        .catch(err => console.log(err));

                })
                .catch(err => console.log(err));
        } else {
            setLoading(false);
        }

    }, []);

    return (
        loading ?
            <Preloader /> :
            <main className="main">
                {
                    newsList.map((item) => <NewsPreview
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.by}
                        time={item.time}
                        score={item.score}
                    />)
                }
            </main>
    );
}

export default Main;