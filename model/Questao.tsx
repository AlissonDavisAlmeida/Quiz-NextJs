import { shuffle } from "../functions/array";
import RespostaModel from "./Respostas";

export default class QuestaoModel{
    #id : number
    #enunciado : string
    #respostas: RespostaModel[]
    #acertou : boolean
    // #respondida : boolean

    constructor(id: number, enunciado: string, respostas:RespostaModel[], acertou? : boolean) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;    
    }

    get id(){
        return this.#id;
    }
    get enunciado(){
        return this.#enunciado;
    }
    get respostas(){
        return this.#respostas;
    }
    get acertou(){
        return this.#acertou;
    }

    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada){
                return true;
            }else{
                 return false;   
            }
        }
    }

    responderCom(indice : number): QuestaoModel{
        const acertou = this.#respostas[indice]?.certa;
        const resposta = this.#respostas.map((resposta, index)=>{
            const respostaSelecionada = indice === index;
            const deveRevelar = respostaSelecionada || resposta.certa;
            return deveRevelar ? resposta.revelar() : resposta;
        });

        return new QuestaoModel(this.id, this.enunciado,resposta, acertou);
    }

    embaralharRespostas():QuestaoModel{
        let respostasEmbaralhadas = shuffle(this.#respostas);
        return new QuestaoModel(this.#id,this.#enunciado, respostasEmbaralhadas, this.#acertou);
    }

    static criarUsandoObjeto(objFromApi : QuestaoModel) : QuestaoModel{
        const respostas = objFromApi.respostas.map(resposta => RespostaModel.criarUsandoObjeto(resposta));
        return new QuestaoModel(objFromApi.id,objFromApi.enunciado, respostas, objFromApi.acertou);
    }

    toObject(){
        return {
            id : this.#id,
            enunciado : this.#enunciado,
            respostas : this.#respostas.map(resposta => resposta.toObject()),
            respondida : this.respondida,
            acertou : this.#acertou
        };
    } 
}  