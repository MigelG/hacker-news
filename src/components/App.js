import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from './News';
import NotFoundPage from './NotFoundPage';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  return (
    <div className='page'>
      <Header />

      <Switch>
        <Redirect exact from='/hacker-news' to='/news' />

        <Route exact path='/news'>
          <Main
            newsList={newsList}
            setNewsList={setNewsList} />
        </Route>

        <Route path='/news/:id'>
          <News />
        </Route>

        <Route path='/error'>
          <NotFoundPage />
        </Route>

        <Route path='*'>
          <Redirect to='/error' />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
