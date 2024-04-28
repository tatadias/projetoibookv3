import React from 'react';
import '../styles/sobrenos.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';


function SobreNos() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="content">
        <h2>  Sobre Nós</h2>
        <p>
            Bem-vindo ao iBook, a sua nova plataforma de entrega de livros. Com o iBook, 
          conectar-se aos seus livros favoritos nunca foi tão fácil! Inspirados pela 
          conveniência e simplicidade dos serviços de entrega de alimentos, 
          criamos uma maneira igualmente simples para você receber seus livros preferidos 
          diretamente na porta de sua casa.
        </p>
        <p>
            Nossa missão é tornar a leitura mais acessível e prazerosa para todos, 
          facilitando o acesso a uma ampla variedade de livros. Nosso aplicativo 
          conecta leitores com livrarias locais, oferecendo um serviço rápido e 
          eficiente. Ao escolher o iBook, você não só encontra seu próximo livro favorito 
          com facilidade, mas também apoia as livrarias da sua comunidade.
        </p>
        <h3>  Por que escolher o iBook?</h3>
        <ul>
          <li>Conveniência máxima na compra de livros.</li>
          <li>Ampla variedade de títulos para todos os tipos de leitores.</li>
          <li>Suporte a livrarias locais, fortalecendo a economia da sua região.</li>
          <li>Recomendações personalizadas que atendem ao seu gosto literário.</li>
        </ul>
        <p>
          Venha explorar novos mundos e embarcar em aventuras literárias sem precedentes. 
            Baixe o iBook hoje mesmo e transforme a sua experiência de leitura!
        </p>
      </div>
      <Rodape/>
    </>
    
  );
}

export default SobreNos;
