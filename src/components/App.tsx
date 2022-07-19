import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import '../index.css';
import { HomePage, AboutPage, PlacesPage } from '../pages';
import { useAppDispatch } from '../services/store';
import { fetchCards, fetchProfile } from '../services/ActionCreators';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  useEffect(()=>{
    dispatch(fetchProfile())
  },[])

  return (
    <div className='root page'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/places' element={<PlacesPage /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;