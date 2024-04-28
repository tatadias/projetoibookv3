import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/contato.css';
import Rodape from '../components/Rodape';

function Contato() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="contact-container">
                <h1>Contato</h1>
                <p>Tem alguma pergunta ou precisa de ajuda? Entre em contato conosco!</p>
                <div className="contact-info">
                    <h2>Entre em contato direto:</h2>
                    <p><strong>Email:</strong> gustavodias3011@gmail.com</p>
                    <p><strong>Email:</strong> arthurguicampos@gmail.com</p>
                    <p><strong>Telefone:</strong> (11) 97617-6877</p>
                    <p><strong>Telefone:</strong> (98) 93545-6578</p>
                </div>
                <div className="contact-form">
                    <h2>Envie uma mensagem:</h2>
                    <form>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                
    
    
              </div>
              <Rodape/>
        </>
    );
}

export default Contato;

