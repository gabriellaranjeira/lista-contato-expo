export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';
export const SET_CONTATO = 'SET_CONTATO';
import * as FileSystem from 'expo-file-system';
import {inserirContato, buscarContatos, editaContato} from '../helpers/db';

export const listarContatos = () =>{
    return async dispatch =>{
        try{
            const resultadoBD = await buscarContatos();
            dispatch({type: LISTA_CONTATOS, contatos: resultadoBD.rows.array})
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
};

export const addContato = (nomeContato, numeroContato, imagem) =>{
    return async dispatch=>{
        console.log(imagem);
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try{
            const tmp_fl = await FileSystem.getInfoAsync(novoPath);
            console.log("exists", tmp_fl.exists);
            if(!tmp_fl.exists){
                await FileSystem.moveAsync({
                    from: imagem,
                    to:novoPath
                })
            }
            const resultadoBD = await inserirContato(
                nomeContato,
                numeroContato,
                novoPath
            );
            console.log(JSON.stringify(resultadoBD));
            dispatch({type:ADD_CONTATO, dadosContato: {id: resultadoBD.insertId, nomeContato: nomeContato
            ,numeroContato: numeroContato, imagem:novoPath}})
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

export const edtContato = (id, nomeContato, numeroContato, imagem) =>{
    return async dispatch=>{
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try{
            const tmp_fl = await FileSystem.getInfoAsync(imagem);
            console.log("exists", tmp_fl.exists);
            if(!tmp_fl.exists && tmp_fl.exists !== undefined){
                await FileSystem.moveAsync({
                    from: imagem,
                    to:novoPath
                })
            }
            const resultadoBD = await editaContato(
                id,
                nomeContato,
                numeroContato,
                novoPath
            );
            console.log("edtUsuário", resultadoBD);
            listarContatos();
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

export const setContato = (indexContato) =>{
    return{
        type:SET_CONTATO, indexContato: indexContato
    }
}