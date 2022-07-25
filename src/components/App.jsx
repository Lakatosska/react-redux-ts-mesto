import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import '../index.css';
import { HomePage, AboutPage, PlacesPage } from '../pages';
import { useAppDispatch } from '../services/store';
import { fetchCards, fetchProfile } from '../services/ActionCreators';
import { PopupImage } from './PopupImage';
import { TCard } from '../utils/types';
import card from '../services/slices/card';


function App() {

  const [selectedCard, setSelectedCard] = useState(null);

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
      <PopupImage /> 
    </div>
  );
};

export default App;