import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import BotaoCabecalho from '../components/BotaoCabecalho';
import {useSelector} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const TelaContato = (props) => {

  const [contato, setContato] = useState({id:"",nome:"",numero:""});
  const contatos = useSelector(estado=>estado.contatos.contatos);
  const indexContato = useSelector(estado=>estado.contatos.contato);

  useEffect(() => {
    console.log("oi");
    console.log(indexContato);
    setContato(contatos[indexContato]);
  },[]);

  return(
  <View>
    {/* {TelaContato} */}
    <ContatoItem
          idContato={contato.id}
          nomeContato={contato.nome}
          imagem={contato.imagemURI}
          numeroContato={contato.numero}
        />
    
    </View>
  );
}
TelaContato.navigationOptions = (dadosNav) => {

  return {
      headerTitle: dadosNav.navigation.getParam("nomeDoContato"),
      headerTitleStyle: {
        color:"#fff"
      },
      headerStyle: {
          backgroundColor:"#000"
      },
      headerRight:(
        <HeaderButtons
          HeaderButtonComponent={BotaoCabecalho}>
          <Ionicons
            color="#FFF"
            name="md-paper" size={35}
            onPress={()=>{dadosNav.navigation.navigate("EditaContato")}}
          /> 
        </HeaderButtons>)
  }
}
const estilos = StyleSheet.create({});

export default TelaContato;