import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar';
import SectionSlogan from './SectionSlogan';
import './styleGlobal.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <SectionSlogan />
  </React.StrictMode>,
)
