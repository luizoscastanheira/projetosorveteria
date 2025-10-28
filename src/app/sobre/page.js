import Image from "next/image";
import estilos from "./Sobre.module.css"

import Sorveteria from "../../../public/sorveteria.jpg";
import SobreImage from "../../../public/sobre-image.jpg";

export default function Sobre(){
    return(
        <div>
            <section className={estilos.sectionBanner}>
                <h1>A GELATERIA</h1>
            </section>

            <section className={estilos.sectionTexto}>

                <div className={estilos.containerTexto}>
                <h2>Sobre Nós</h2>
                <span>Nós simplesmente amamos sorvete!</span>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para o varejo quanto para o atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festas de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
                </div>
            </section>

            <section className={estilos.sectionImages}>
                <Image className={estilos.img} src={SobreImage} alt="Imagem de amigos tomando sorvete." />
                <Image className={estilos.img} src={Sorveteria} alt="Imagem do interior da sorveteria." />
            </section>
        </div>
    );
};