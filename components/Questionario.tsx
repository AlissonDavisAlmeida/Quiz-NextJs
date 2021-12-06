import QuestaoModel from "../model/Questao";
import styles from "../styles/questionario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";

interface QuestionarioProps{
    questao : QuestaoModel
    ultima : boolean
    questaoRespondida : (questao : QuestaoModel) => void
    nextStep: () => void
}


function Questionario(props : QuestionarioProps) {

    function respostaFornecida(indice : number) {
        if(!props.questao.respondida){
            props.questaoRespondida(props.questao.responderCom(indice));
        }
    }

    return ( 
        <div className={styles.questionario}>
            {props.questao? 
            
            <Questao  
                valor={props.questao}
                tempoParaResposta={15}
                onResponse = {respostaFornecida}
                tempoEsgotado = {props.nextStep}
            />
        : false
        }

            <Botao onClick={props.nextStep} texto={props.ultima ? "Finalizar"  : "Próxima"}/>
        </div>
     );
}

export default Questionario;