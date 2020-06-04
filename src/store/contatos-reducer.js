import { ADD_CONTATO, SET_CONTATO, EDT_CONTATO } from "./contatos-actions";
import Contato from "../models/Contato";

const estadoInicial={
    contatos:[],
    contato:null
};

export default(estado = estadoInicial, action)=>{
    switch (action.type) {
        case ADD_CONTATO:
            const c = new Contato(new Date().toString(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagem);
            console.log(JSON.stringify(c))
            return{
                contatos: estado.contatos.concat(c),
                contato: estado.contato
            };
        case SET_CONTATO:
            console.log('aqui'+JSON.stringify(action))
            return{
                contatos:estado.contatos,
                contato: action.indexContato
            }
        case EDT_CONTATO:
            let _contatos = estado.contatos;
            const _id = _contatos[estado.contato].id;
            _contatos[estado.contato] = new Contato(_id, action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagem);
            return {
                contatos: _contatos,
                contato: action.indexContato
            }
        default:
            
            return estado;
    }
}