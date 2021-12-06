import styles from "../styles/questao.module.css";
import QuestaoModel from "../model/Questao";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import React from "react";
import Temporizador from "./Temporizador";


const letras = [
    {valor : "A", cor:"#F2C866"},
    {valor:"B", cor:"#A26ABA"},
    {valor:"C", cor:"#85D5F2"},
    {valor:"D", cor:"#BCE596"}
];

interface QuestaoProps{
    valor : QuestaoModel
    onResponse : (index : number) => void
    tempoEsgotado : ()=> void
    tempoParaResposta? : number
}

function Questao(props : QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas(){
        return questao.respostas.map((resposta, index)=>{
            return <Resposta valor={resposta} 
                    indice={index} 
                    letra={letras[index].valor} 
                    corLetra={letras[index].cor} 
                    key={index}
                    onResponse={props.onResponse}/>;
        });
    }

    
    return (  
        <div className={styles.questao}>
            <Enunciado texto= {questao.enunciado}/>
            <Temporizador duracao={props.tempoParaResposta ?? 10} isTempoEsgotado={props.tempoEsgotado} key={questao.id}></Temporizador>
            {renderizarRespostas()}
        
            </div>
    );
}

export default Questao;