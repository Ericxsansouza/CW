import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar';
import SectionSlogan from './SectionSlogan';
import About from './About';
import Benefits from './Benefits';
import './styleGlobal.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <SectionSlogan />
    <About />
    <Benefits />
  </React.StrictMode>,
)
