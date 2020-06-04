import React,{useState, useEffect} from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, Button} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import Cores from '../assets/Cores/Cores';
import TirarFoto from '../components/TiraFoto';


const TelaEditaContato = (props) => {
    const[nomeContato, setNovoNome] = useState('');
    const[numeroContato, setNovoNumero] = useState('');
    const[imagemURI, setImagemURI] = useState('');
    const[idContato, setIdConato] = useState('');
    const contatos = useSelector(estado=>estado.contatos.contatos);
    const indexContato = useSelector(estado=>estado.contatos.contato);

    useEffect(() => {
        console.log(indexContato);
        setNovoNome(contatos[indexContato].nome);
        setNovoNumero(contatos[indexContato].numero);
        setImagemURI(contatos[indexContato].imagemURI);
        setIdConato(contatos[indexContato].id);
    },[]);

    const novoNomeAlterado = (texto) =>{
        setNovoNome(texto);
    }

    const novoNumeroAlterado = (texto) =>{
        setNovoNumero(texto);
    }
    
    const dispatch = useDispatch();

    const editarContato=()=>{
        dispatch(contatosActions.edtContato(idContato, nomeContato, numeroContato, imagemURI));
        props.navigation.goBack();
    }

    const fotoTirada = imagemURI=>{
        setImagemURI(imagemURI);
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
                    {
                    imagemURI != '' ? (
                        <TirarFoto imagem={imagemURI} onFotoTirada={fotoTirada}/>
                        ) : (<Text></Text>)
                    }
                    <Button 
                        title="Editar Contato"
                        color={Cores.botaoCor}
                        onPress={editarContato}
                    />
                </View>
            </ScrollView> 
        </View>
    );
}

TelaEditaContato.navigationOptions = dadosNav =>{
    return{
      headerTitle:'Editar Contato',
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
export default TelaEditaContato;