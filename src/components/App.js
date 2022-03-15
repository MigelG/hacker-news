import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Switch } from 'react-router-dom';
import News from './News';
import Error from './Error';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  return (
    <div className='page'>
      <Header />

      <Switch>
        <Route exact path='/news'>
          <Main
            newsList={newsList}
            setNewsList={setNewsList} />
        </Route>

        <Route path='/news/:id'>
          <News />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
