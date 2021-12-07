
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Questionario from '../components/Questionario';

import QuestaoModel from '../model/Questao';
import RespostaModel from '../model/Respostas';

const questaoMock = new QuestaoModel(4, "Essa é uma questão", [
  RespostaModel.errada("Abelha"),
  RespostaModel.errada("Barata"),
  RespostaModel.errada("Pulga"),
  RespostaModel.certa("Barbeiro")
], false);

const BASE_URL = "https://quiz-next-js-cuqoinel6-alissondavisalmeida.vercel.app/api";

export default function Home() {

  const router = useRouter();

  const [idDasQuestoes, setidDasQuestoes] = useState<number[]>([]);
  const [questao, setquestao] = useState<QuestaoModel>(questaoMock);
  const [respostascertas, setrespostascertas] = useState<number>(0);

  async function carregarQuestoesId() {
    const resposta = await fetch(`${BASE_URL}/questionario`);
    const ids = await resposta.json();
    setidDasQuestoes(ids);
  }


  async function carregarQuestao(id: number) {
    const resposta = await fetch(`${BASE_URL}/questoes/${id}`);
    const jsonObject = await resposta.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(jsonObject[0]);
    setquestao(novaQuestao);
  }


  useEffect(() => {
    carregarQuestoesId();
  }, []);

  useEffect(() => {
    idDasQuestoes.length > 0 && carregarQuestao(idDasQuestoes[0]);
  }, [idDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setquestao(questaoRespondida);
    const certa = questaoRespondida.acertou;
    setrespostascertas(respostascertas + (certa? 1 : 0));
  }

  function nextId() {
    const proximoIndice = idDasQuestoes.indexOf(questao.id) +1;
    return idDasQuestoes[proximoIndice];
  }

  function nextStep() {
    const proximoId = nextId();
    proximoId ?  nextQuestion(proximoId) : finalizar();
  }

  function nextQuestion(proximoId : number) {
    console.log(proximoId);
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query:{
        total : idDasQuestoes.length,
        certas : respostascertas
      },
    });
  }


  return (

    <Questionario
      questao={questao}
      ultima={nextId() === undefined}
      questaoRespondida={questaoRespondida}
      nextStep={nextStep}
    />


  );





}
