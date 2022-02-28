import api from '../utils/api';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import News from './News';
import Preloader from './Preloader';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div className='page'>
      <Header />

      <Switch>
        <Route exact path='/'>
          {loading ?
            <Preloader /> :
            <Main
              newsList={newsList}
            />}
        </Route>

        <Route path='/:id'>
          <News />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
