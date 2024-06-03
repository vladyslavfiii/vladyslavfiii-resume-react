import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Portfolio />
    {/* <Footer /> */}
  </React.StrictMode>
);