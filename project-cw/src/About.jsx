import React from 'react';
import './styleGlobal.css';
import './About.css';

function About() {
    return (
        <section className='container'>
            <div className='content-info'>
                <div className='about-image'>
                    <img src='./public/image.svg' className='image'></img>
                </div>
                <div className='about-info'>
                    <div className='scrollReveal50'>
                        <h2>Abra sua conta gratuita.</h2>
                        <p>Libere seu potencial financeiro e descubra um mundo de oportunidades com a nossa
                            análise de crédito especializada.</p>
                    </div>
                    <div className='scrollReveal100'>
                        <div className='container-image'>
                            <img src='./public/avanco-rapido2 (2).png'></img>
                        </div>
                        <span>
                            <h4>Avaliação rápida e confiável</h4>
                            <p className='text'>Resultados rápidos, precisos, em tempo hábil.</p>
                        </span>
                    </div>
                    <div className='scrollReveal200'>
                        <div className='container-image'>
                            <img src='./public/subir.png'></img>
                        </div>
                        <span>
                            <h4>Aumento do score de crédito</h4>
                            <p className='text'>Orientações e dicas para melhorar seu score.</p>
                        </span>
                    </div>
                    <div className='scrollReveal300'>
                        <div className='container-image'>
                            <img src='./public/escudo.png'></img>
                        </div>
                        <span>
                            <h4>Confidencialidade e segurança</h4>
                            <p className='text'>Proteção dos seus dados pessoais.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About