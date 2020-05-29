export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nomeContato, numeroContato) =>{
    return{
        type:ADD_CONTATO, dadosContato: {nomeContato: nomeContato, numeroContato: numeroContato}
    }
}

export const SET_CONTATO = 'SET_CONTATO';

export const setContato = (indexContato) =>{
    return{
        type:SET_CONTATO, indexContato: indexContato
    }
}

export const EDT_CONTATO = 'EDT_CONTATO';

export const editaContato = (indexContato, nomeContato, numeroContato) =>{
    return{
        type:EDT_CONTATO, dadosContato: {indexContato:indexContato, nomeContato: nomeContato, numeroContato: numeroContato}
    }
}