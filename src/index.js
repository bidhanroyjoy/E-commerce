import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ProductsProvider} from './context/ProductsContext'
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

