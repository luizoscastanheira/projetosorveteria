import Image from "next/image";
import Link from "next/link";

import estilos from "./Topo.module.css";
import Logo from "../../../public/logo.png";


export default function Topo(){
    return(
        <header className={estilos.headerContainer}>
            <div className={estilos.boxContainerTopo}>
                <Image className={estilos.imgLogo} src={Logo} alt="Logotipo da Sorveteria"/>
                <nav className={estilos.navContainer}>
                    <Link className={estilos.linkTopo} href="/">Home</Link>
                    <Link className={estilos.linkTopo} href="/sabores">Sabores</Link>
                    <Link className={estilos.linkTopo} href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
};