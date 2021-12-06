import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/temporizador.module.css";

interface TemporizadorProps{
    duracao : number
   isTempoEsgotado: () => void

}

function Temporizador(props : TemporizadorProps) {
    return (  
        <div className={styles.temporizador}>
            <CountdownCircleTimer size={120} isPlaying={true} colors={[
                ["#BCE596",0.22],
                ["#F7B801",0.38],
                ["#ED827A",0.40],
            ]} duration={props.duracao}
            onComplete={props.isTempoEsgotado}
            >
                {({remainingTime})=>remainingTime}
            </CountdownCircleTimer>
        </div>
    );
}

export default Temporizador;