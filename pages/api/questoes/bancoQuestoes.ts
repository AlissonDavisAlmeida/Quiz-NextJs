import QuestaoModel from "../../../model/Questao";
import RespostaModel from "../../../model/Respostas";

const questoes : QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a doença de Chagas?", [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro")
        

    ]),
    new QuestaoModel(202, "Qual fruto é conhecido no Norte e Nordeste como Jerimun?", [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Coco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora")
        

    ]),
    new QuestaoModel(203, "Qual é o coletivo de cães?", [
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha")
        

    ]),
    new QuestaoModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
        RespostaModel.errada("Equilatero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Retângulo"),
        RespostaModel.certa("Escaleno")
        

    ]),
];

export default questoes;