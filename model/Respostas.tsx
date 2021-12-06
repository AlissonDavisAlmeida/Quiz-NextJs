export default class RespostaModel {
    #valor : string
    #certa : boolean
    #revelada : boolean

    constructor(valor : string, acerta : boolean, revelada =false) {
        this.#valor = valor;
        this.#certa = acerta;
        this.#revelada = revelada;
    }

    static certa(valor: string){
        return new RespostaModel(valor, true);
    }
    
    static errada(valor : string){
        return new RespostaModel(valor, false);

    }

    get valor(){
        return this.#valor;
    }

    get certa(){
        return this.#certa;
    }
    get revelada(){
        return this.#revelada;
    }

    revelar(){
        return new RespostaModel(this.#valor, this.#certa, true);
    }

    static criarUsandoObjeto(objRecebidoApi : RespostaModel): RespostaModel{
        return new RespostaModel(objRecebidoApi.valor, objRecebidoApi.certa, objRecebidoApi.revelada);
    }

    toObject(){
        return {
            valor : this.#valor,
            certa : this.#certa,
            revelada : this.#revelada
        };
    }

}