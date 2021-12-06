import banco from './bancoQuestoes';
export default function handler(req, res) {

    const id = +req.query.id

    res.status(200).json(banco.filter(questao => questao.id === id).map(questao => questao.embaralharRespostas()
    .toObject()))
    
  }
  