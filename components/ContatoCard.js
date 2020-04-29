import React from 'react';
import{Text, StyleSheet, View} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const ContatoCard = (props) =>{

    return(
        <View style={estilos.touchableStyle}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.textStyle}>Id: {props.id}</Text>
                <Text style={estilos.textStyle}>Nome: {props.nome}</Text>
                <Text style={estilos.textStyle}>Telefone: {props.numero}</Text>
            </Cartao>
        </View> 
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


export default ContatoCard;