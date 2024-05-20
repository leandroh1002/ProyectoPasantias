import React from "react"; 
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; 
import { Provider } from 'react-redux';
import App from './App'; 
import store from './redux/store/index';
import axios from "axios";
import './index.css'

axios.defaults.baseURL = 'http://localhost:3031'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);