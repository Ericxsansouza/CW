import React from 'react';
import './Navbar.css';
import './styleGlobal.css';

function Navbar() {
    return (
        <header className='container'>
            <div className='content'>
                <div className='content-logo'>
                    <img src='./public/007-Reversed-Square.svg' />
                </div>
                <div className='content-button'>
                    <button>ABRIR MINHA CONTA</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar