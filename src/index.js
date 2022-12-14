import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; // Importo el BrowserRouter para poder aplicar rutas en la app;
import {Provider} from "react-redux";
import store from "./redux/store/index.js";
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = `https://sotarkgamesbackend-production.up.railway.app/`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>        
        <App />      
      </Provider>    
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);//Enciero mi app en BrowserRouter para poder darle rutas;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
