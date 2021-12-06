import { shuffle } from '../../../functions/array';
import bancoQuestoes from '../questoes/bancoQuestoes';

export default (req, res)=>{
     const ids = bancoQuestoes.map(questao => questao.id );
    res.status(200).json(shuffle(ids));
};