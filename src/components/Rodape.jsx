import React from 'react';
import '../styles/rodape.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Rodape() {
  return (
    <div className="mainrodape">
      <div className="rodape">
        <div className="rodape-content">
          <div className="rodape-links">
          <a href="/">Início</a>
            <a href="/sobre-nos">Sobre</a>
            <a href="/contato">Contato</a>

          </div>
          <div className="rodape-social">
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://youtube.com"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rodape;