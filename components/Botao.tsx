import React from "react";
import stlyes from "../styles/botao.module.css";
import Link from "next/link";
interface BotaoProps{
    href?: string
    texto: string
    onClick?:(e:any) => void
}

function Botao(props: BotaoProps) {

    function isHref() {
        return(

        <div>
            <button className={stlyes.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        </div>
        );

    }

    return props.href? (
        <Link href={props.href}>
        {isHref()}
        </Link>  
    ): isHref();
}

export default Botao;