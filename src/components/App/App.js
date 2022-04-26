import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewsPage from '../NewsPage/NewsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NewsList from '../NewsList/NewsList';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {

  const [newsList, setNewsList] = useState([]);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route
            path='/'
            element={
              <NewsList
                newsList={newsList}
                setNewsList={setNewsList} />
            } />

          <Route
            path='/:id'
            element={
              <NewsPage />
            } />

          <Route path='/error' element={
            <NotFoundPage />
          } />

          <Route path='*' element={
            <Navigate to='/error' />
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
