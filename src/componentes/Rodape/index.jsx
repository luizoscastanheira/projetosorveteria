import Image from "next/image";
import Link from "next/link";

import estilos from "./Rodape.module.css";
import Logo from "../../../public/logo.png";

export default function Rodape(){
    return(
        <header className={estilos.headerContainer}>
            <div className={estilos.containerRodape}>

                    <Image className={estilos.imgLogo} src={Logo} alt="Imagem do Logotipo"/>
                
                    <div className={estilos.boxTexto}>
                        <h3>ENDEREÇO</h3>
                        <p>Ave. Bernardino de Campos, 98, São Paulo - SP, 12345-678</p>
                    </div>
                    <div className={estilos.boxTexto}>
                        <h3>CONTATO</h3>
                        <p>infor@meusite.com Tel.: (11)3456-7890</p>
                    </div>
                    <div className={estilos.boxTexto}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
                    </div>
                
            </div>

            <div className={estilos.boxDireitos}>
                <p>Gelateria. Orgulhosamente desenvolvido por <Link className={estilos.linkRodape} href="https://luizotavioads.vercel.app/" target="_blank">Luiz Otávio</Link></p>
            </div>
        </header>
    );
};