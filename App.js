import React from 'react';
import {StyleSheet, View} from 'react-native';
import TelaComeco from './Telas/TelaComeco';
import Cabecalho from './components/Cabecalho';
import Medidas from './Medidas/Medidas'

export default function App() {
  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"Lista De Contatos"}/>
      <TelaComeco/>
    </View>
  );
}

const estilos = StyleSheet.create({
    tela:{
      flex:Medidas.flexGeral
    }
});