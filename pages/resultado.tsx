import router, {useRouter} from "next/router";
import Estatistica from "../components/Estatistica";
import styles from "../styles/resultado.module.css";
import Botao from "../components/Botao";
function resultado() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const total = +router.query.total;
    const certas = +router.query.certas;
    const percentual = Math.round((certas/total)*100);
    return (  
        <div className={styles.resultado}>
            <h1 className={styles.titulo}>Resultado</h1>
            <div style={{display:"flex"}}>

           <Estatistica valor={total} texto="Perguntas"/>
           <Estatistica valor={certas} texto="Certas" corFundo="green" corFonte="white"/>
           <Estatistica valor={`${percentual}%`} texto="Percentual" corFundo="blue" corFonte="white"/>
            </div>
            <Botao texto="Iniciar" href="/"/>
        </div>
    );
}

export default resultado;