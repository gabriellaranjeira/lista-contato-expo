import { ADD_CONTATO, SET_CONTATO, LISTA_CONTATOS } from "./contatos-actions";
import Contato from "../models/Contato";

const estadoInicial={
    contatos:[],
    contato:null
};

export default(estado = estadoInicial, action)=>{
    switch (action.type) {
        case LISTA_CONTATOS:
            return{
                contatos: action.contatos.map(c=> new Contato(c.id.toString(), c.nomeContato, c.numeroContato, c.imagem)),
                contato: estado.contato
            }
        case ADD_CONTATO:
            const c = new Contato(action.dadosContato.id.toString(), action.dadosContato.nomeContato, 
            action.dadosContato.numeroContato, action.dadosContato.imagem);
            console.log(JSON.stringify(c))
            return{
                contatos: estado.contatos.concat(c),
                contato: estado.contato
            };
        case SET_CONTATO:
            return {
                contatos: estado.contatos,
                contato: action.indexContato
            }
        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}