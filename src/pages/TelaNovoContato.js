import React,{useState} from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import Cores from '../assets/Cores/Cores';


const TelaNovoContato = (props) => {
    const[nomeContato, setNovoNome] = useState('');
    const[numeroContato, setNovoNumero] = useState('');

    const novoNomeAlterado = (texto) =>{
        setNovoNome(texto);
    }

    const novoNumeroAlterado = (texto) =>{
        setNovoNumero(texto);
    }
    const dispatch = useDispatch();

    const adicionarContato=()=>{
        dispatch(contatosActions.addContato(nomeContato, numeroContato));
        props.navigation.goBack();
    }

    return(
        <View>
            <ScrollView>
                <View style={estilos.form}>
                    <Text style={estilos.titulo}>Novo Contato</Text>
                    <TextInput
                        placeholder="Nome"
                        style={estilos.textInput}
                        onChangeText={novoNomeAlterado}
                        value={nomeContato}
                    />
                    <TextInput
                        placeholder="Numero"
                        keyboardType="number-pad" 
                        maxLength={11}
                        style={estilos.textInput}
                        onChangeText={novoNumeroAlterado}
                        value={numeroContato}
                    />
                    
                    <Button 
                        title="Salvar Contato"
                        color={Cores.botaoCor}
                        onPress={adicionarContato}
                    />
                </View>
            </ScrollView> 
        </View>
    );
}

TelaNovoContato.navigationOptions = dadosNav =>{
    return{
      headerTitle:'Adicionar Contato',
      headerTitleStyle: {
        color:"#fff"
      },
      headerStyle: {
          backgroundColor:"#000"
      }
    }
  }
const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    },
    botaoFoto: {
        color: 'black'
    }

    
});
export default TelaNovoContato;