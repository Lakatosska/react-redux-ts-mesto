import React from 'react';
import { Header } from './Header';
import { Profile } from './Profile';
import { Footer } from './Footer';
import { Cards } from './Cards';
import '../index.css';


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
