import React,{ useEffect } from 'react';
import { Header } from './Header';
import { Profile } from './Profile';
import { Footer } from './Footer';
import { Cards } from './Cards';
import '../index.css';
import { useAppDispatch, useAppSelector } from '../services/store';
import { fetchCards } from '../services/ActionCreators';


function App() {

  const {cards, loading, error} = useAppSelector(state => state.cardsReducer)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  return (
    <div className='root page'>
      <Header />
      <Profile />
      <Cards cards={cards}/>
      <Footer />
    </div>
  );
};

export default App;