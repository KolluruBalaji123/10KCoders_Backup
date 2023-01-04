import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './Store/Mainstore';

const root = ReactDOM.createRoot(document.getElementById('root'));

 //How to create a store 
 //it is like super market
 //we are taking store putting into project
 //to create a store ... business logic has been created ... this business logic function is called reducer

 //Actions
 //Each action should return a object
 


//  store.dispatch(deleteUser())
// store.dispatch(addUserAction());


root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
