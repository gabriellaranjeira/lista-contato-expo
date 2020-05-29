import React from 'react';
import{View,StyleSheet} from 'react-native';
import Cores from '../assets/Cores/Cores';
import Medidas from '../assets/Medidas/Medidas'

const Cartao= (props)=>{
    return(
        <View style={{...estilos.cartao,...props.estilos}}>
            {props.children}
        </View>
    );
};

const estilos =StyleSheet.create({
    cartao:{
        shadowColor:Cores.shadowCartao,
        alignItems: 'flex-start'
,            shadowOffset:{
                width:0,
                height:2
            },
        shadowRadius:Medidas.cartaoShadowR,
        shadowOpacity:Medidas.cartaoShadowO,
        backgroundColor:Cores.backCartao,
        elevation:Medidas.cartaoElevation,
        padding:Medidas.cartaoPadding,
        borderRadius:Medidas.cartaoBorder
    }
});
export default Cartao;