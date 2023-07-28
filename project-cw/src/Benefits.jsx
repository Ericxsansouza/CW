import React from 'react';
import './styleGlobal.css';
import './Benefits.css';

function Benefits() {
    return (
        <section className='container'>
            <div className='content-benefits'>
                <h6>#INOVAÇÃO</h6>
                <p className='text-benefits'>Quais as vantagens<br></br>
                    de usar <span>CreditAnalisys</span>?
                </p>
            </div>
            <div className='content-benefits-card-one'>
                <div className='card'>
                    <div className='content-card'>
                        <div className='iconBox'>
                            <img src='./public/relogio.png'></img>
                        </div>
                        <h3>Análise de crédito em tempo real</h3>
                        <div className='MuiTypography'>
                            <p>Ao fornecer resultados rápidos e confiáveis, os clientes têm a vantagem de tomar decisões financeiras mais rápidas.</p>
                        </div>
                    </div>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
                <div className='card'>
                    <div className='content-card'>
                        <div className='iconBox'>
                            <img src='./public/nano-tecnologia.png'></img>
                        </div>
                        <h3>Tecnologia de inteligência</h3>
                        <div className='MuiTypography'>
                            <p>Utilizamos tecnologia de ponta baseada em inteligência artificial e aprendizado de máquina.</p>
                        </div>
                    </div>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
            </div>
            <div className='content-benefits-card-two'>
            <div className='card'>
                    <div className='content-card'>
                        <div className='iconBox'>
                            <img src='./public/transparencia.png'></img>
                        </div>
                        <h3>Personalizada e flexível</h3>
                        <div className='MuiTypography'>
                            <p>Adaptamos nossos serviços às necessidades específicas de cada cliente, garantindo soluções sob medida.</p>
                        </div>
                    </div>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
                <div className='card'>
                    <div className='content-card'>
                        <div className='iconBox'>
                            <img src='./public/editar.png'></img>
                        </div>
                        <h3>Transparência e assessoria especializada</h3>
                        <div className='MuiTypography'>
                            <p>Compromisso com a transparência e pela oferta de assessoria especializada.</p>
                        </div>
                    </div>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits