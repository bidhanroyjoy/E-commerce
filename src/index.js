import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ProductsProvider} from './context/ProductsContext'
import {FilterProvider} from './context/FilterContext'
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <ProductsProvider>
  <FilterProvider>
    <App />
  </FilterProvider>
  </ProductsProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

