import Image from "next/image";
import estilos from "./Sabores.module.css"

import Oreo from "../../../public/sabor-oreo.png";
import Pistache from "../../../public/sabor-pistache.png";
import Cookies from "../../../public/sabor-cookies-avela.png";
import Kiwi from "../../../public/sabor-kiwi.png";
import Morango from "../../../public/sabor-morango.png";
import Limao from "../../../public/sabor-limao.png";

export default function Sabores(){
    return(
        <div>
            <section className={estilos.sectionBanner}>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className={estilos.sectionCards}>
                <h2>SABORES DE SORVETE</h2>
                <div className={estilos.containerCards}>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Oreo} alt="Imagem de uma bola de sorvete sabor Oreo com um biscoito" />
                        <h3>Soverte de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Pistache} alt="Imagem de uma bola de sorvete sabor Pistache" />
                        <h3>Soverte de Pistache</h3>
                        <p>Delicioso sorvete Pistache com pedacinhos de semente.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Cookies} alt="Imagem de uma bola de sorvete sabor Cookies e Avalã" />
                        <h3>Soverte de Cookies e Avelã</h3>
                        <p>Nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Kiwi} alt="Imagem de uma bola de sorvete sabor Kiwi" />
                        <h3>Soverte de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em Vitamina C.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Morango} alt="Imagem de uma bola de sorvete sabor Morango" />
                        <h3>Soverte de Morango</h3>
                        <p>Sorvete de Morango gourmet tradicional e saboroso.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.imgCard} src={Limao} alt="Imagem de uma bola de sorvete sabor Limão" />
                        <h3>Soverte de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encontrar</p>
                    </div>
                </div>
            </section>
        </div>
    );
};