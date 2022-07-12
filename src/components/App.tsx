import React from 'react';
import { Header } from './Header';
import '../index.css';
import { Profile } from './Profile';
import { Footer } from './Footer';
import { Cards } from './Cards';


function App() {
  return (
    <div className='root page'>
      <Header />
      <Profile />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
