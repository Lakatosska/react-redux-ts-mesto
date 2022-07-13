import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { store } from './services/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
node -v
npm -v
npx create-react-app --template typescript .
npm i @reduxjs/toolkit
npm i react-redux
npm i axios

______
не устанавливала:
redux-saga
npm i react-router-dom
redux-thunk - уже встроен в @reduxjs/toolkit
redux 
react-dnd 
react-dnd-html5-backend 
*/



