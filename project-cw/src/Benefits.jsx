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
                    <img src='./public/relogio.png'></img>
                    <h3>Análise de crédito em tempo real</h3>
                    <p>Ao fornecer resultados rápidos e confiáveis, os clientes têm a vantagem de tomar decisões financeiras mais rápidas.</p>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
                <div className='card'>
                    <img src='./public/nano-tecnologia.png'></img>
                    <h3>Tecnologia de inteligência</h3>
                    <p>Utilizamos tecnologia de ponta baseada em inteligência artificial e aprendizado de máquina.</p>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
            </div>
            <div className='content-benefits-card-two'>
                <div className='card'>
                    <img src='./public/transparencia.png'></img>
                    <h3>Personalizada e flexível</h3>
                    <p>Adaptamos nossos serviços às necessidades específicas de cada cliente, garantindo soluções sob medida.</p>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
                <div className='card'>
                    <img src='./public/editar.png'></img>
                    <h3>Transparência e assessoria especializada</h3>
                    <p>Compromisso com a transparência e pela oferta de assessoria especializada.</p>
                    <div className='to-know'>
                        <a href='/'>CONHECER</a><img src='./public/jogar.png'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits