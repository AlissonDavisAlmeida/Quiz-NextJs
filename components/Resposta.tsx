import RespostaModel from "../model/Respostas";
import styles from "../styles/respostas.module.css";


interface RespotasProps {
    valor: RespostaModel
    indice: number
    letra: string
    corLetra: string
    onResponse: (index: number) => void
}

function Resposta(props: RespotasProps) {
    const respostaRevelada = props.valor.revelada ? styles.respostaRevelada : "";
    return (
        <div className={styles.resposta} onClick={() => props.onResponse(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>


                <div className={styles.frente}>
                    <div className={styles.letra} style={{ backgroundColor: props.corLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {props.valor.valor}
                    </div>
                </div>


                <div className={styles.verso}>
                    {props.valor.certa ? (

                        <div className={styles.certa}>
                            <div>A resposta certa é ...</div>
                            <div className={styles.texto}>{props.valor.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.texto}>{props.valor.valor}</div>
                        </div>
                    )}
                </div>


            </div>

        </div>
    );
}

export default Resposta;