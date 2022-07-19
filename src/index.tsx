import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { store } from './services/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

/*
node -v
npm -v
npx create-react-app --template typescript .
npm i @reduxjs/toolkit
npm i react-redux
npm i axios
npm i react-router-dom

______
не устанавливала:
redux-saga
redux-thunk - уже встроен в @reduxjs/toolkit
redux 
react-dnd 
react-dnd-html5-backend 
*/



