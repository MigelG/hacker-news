import Header from '../components/Header';
import Footer from '../components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import News from './News';
import NotFoundPage from './NotFoundPage';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  return (
    <div className='page'>
      <Header />

      <Routes>
        <Route
          path='/news'
          element={
            <Main
              newsList={newsList}
              setNewsList={setNewsList} />
          } />

        <Route
          path='/news/:id'
          element={
            <News />
          } />

        <Route path='/error' element={
          <NotFoundPage />
        } />

        <Route path='*' element={
          <Navigate to='/error' />
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
