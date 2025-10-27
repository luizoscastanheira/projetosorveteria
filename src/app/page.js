import Image from "next/image";
import estilos from "./page.module.css";

import Sabores from "../../public/banner-sabores.jpg";
import Eventos from "../../public/eventos-image.jpg";
import Sobre from "../../public/sobre-image.jpg";

export default function Home() {
  return (
    <main>
      <section className={estilos.sectionBanner}>
        <h1>SORVETE ARTESANAL</h1>
      </section>

      <section className={estilos.bannerImagemTexto}>
        <Image className={estilos.imgBanners} src={Sabores} alt="Imagem de várias bolas e sabores de sorvete." />
        <div className={estilos.boxTextoBanners}>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos</span>
          <p>
            Sorvete é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como sorvete ser delicioso e saudável ao mesmo tempo! 
          </p>
        </div>
      </section>

      <section className={estilos.bannerImagemTexto}>
        <div className={estilos.boxTextoBanners}>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delícias de Sorvete</span>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente
          </p>
        </div>
        <Image className={estilos.imgBanners} src={Eventos} alt="Imagem de vários potes de sorvete sobre uma mesa de festa." />
      </section>

      <section className={estilos.bannerImagemTexto}>
        <Image className={estilos.imgBanners} src={Sobre} alt="Imagem de um griupo de amigos com casquinhas de vários sabores de sorvete." />
        <div className={estilos.boxTextoBanners}>
          <h2>SOBRE NÓS</h2>
          <span>Alegria em cada Casquinha</span>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há vários anos no mercado produzindo o quem tem de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nosfazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>
      </section>
    </main>
  );
}
