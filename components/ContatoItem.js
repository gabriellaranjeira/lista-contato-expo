import React from 'react';
import{Text, StyleSheet, TouchableOpacity} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const ContatoItem =(props) =>{
    return(
        <TouchableOpacity style={estilos.touchableStyle} onLongPress={props.onDelete.bind(this,props.id)}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.textStyle}>Nome: {props.nome}</Text>
                <Text style={estilos.textStyle}>Telefone: {props.numero}</Text>
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    itemNaLista:{
        width:Medidas.itemWidth,
        maxWidth:Medidas.itemMaxW,
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backItemNa,
		marginBottom:Medidas.margemDebaixo
      },
	textStyle:{
		color:Cores.FontColorCard
	},
	touchableStyle:{
		marginBottom:Medidas.margemDebaixo
	}
});
export default ContatoItem;