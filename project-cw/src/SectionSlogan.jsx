import React from 'react';
import './SectionSlogan.css';
import './styleGlobal.css';

function SectionSlogan(){
    return (
        <div className='container'>
            <div className='section-slogan'>
                <h1>Tudo que você precisa saber para simplificar<br></br> seu <span>Análise de Crédito.</span></h1>
                <div className='section-button-access'>
                    <a href='#' className='first-button'>ABRIR MINHA CONTA</a>
                    <a href='/' className='two-button'>EXPLORAR</a>
                </div>
            </div>
        </div>
    )
}

export default SectionSlogan