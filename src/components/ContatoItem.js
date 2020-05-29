import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, Image, Alert} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../assets/Cores/Cores';
import Medidas from '../assets/Medidas/Medidas';

const ContatoItem =(props) =>{
    const[usuarioConfirmou, setUsuarioConfirmou] = useState(false);

    const confirmarEscolha=()=>{
        setUsuarioConfirmou(true);
    }
    const cancelarEscolha=()=>{
        setUsuarioConfirmou(false)
    }

    let confirmacaoText;

    const excluirContato = () =>{

        if(props.onDelete != undefined){
            Alert.alert(
                'Excluir Contato',
                'Deseja excluir esse Contato?',
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { 
                        text: "OK", 
                        onPress: () => props.onDelete.bind(contato)
                    }
                ],

                { cancelable: false }
            )
        }
    } 
    return(
        <TouchableOpacity onPress={props.onSelect} onLongPress={excluirContato} style={estilos.contatoItem}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.nome}>Nome: {props.nomeContato}</Text>
                <Text style={estilos.numero}>Telefone: {props.numeroContato}</Text>
                
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    contatoItem: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemNaLista:{
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backItemNa,
        flex:Medidas.itemflex,
        margin:Medidas.itemMargin,
        padding:Medidas.itemPadding,
        borderWidth:1,
        marginBottom:8,
        borderRadius:5,
      },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    nome: {
        color: Cores.backItemNaColor,
        fontSize: 18,
        marginBottom: 5
    },
    numero: {
        color: Cores.backItemNaColor,
        fontSize: 16
    }
});
export default ContatoItem;