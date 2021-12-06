import styles from "../styles/enunciado.module.css"

interface EnunciadoProps{
    texto : string
}
function Enunciado(props : EnunciadoProps) {

    return (
        <div className={styles.enunciado}>
            <div className={styles.text}>
                {props.texto}
            </div>
        </div>
      );
}

export default Enunciado;