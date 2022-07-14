import React,{ useEffect } from 'react';
import { Header } from './Header';
import { Profile } from './Profile';
import { Footer } from './Footer';
import { Cards } from './Cards';
import '../index.css';
import { useAppDispatch, useAppSelector } from '../services/store';
import { fetchCards, fetchProfile } from '../services/ActionCreators';


function App() {

  const { cards } = useAppSelector(state => state.cardsReducer);
  const { profile } = useAppSelector(state => state.profileReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards())
    dispatch(fetchProfile())
  }, [])

  return (
    <div className='root page'>
      <Header />
      <Profile profile={profile}/>
      <Cards cards={cards}/>
      <Footer />
    </div>
  );
};

export default App;