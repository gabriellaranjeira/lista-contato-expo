import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';
import Medidas from '../Medidas/Medidas';

const TelaComeco =(props)=>{
  const [id, setId] = useState(10);
  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState(0);

 
  //para add oque foi digitado
  const adicionarContato =  (nomeContato, numeroContato) => {
    contato = (id, nomeContato, numeroContato);
	console.log("AddContato", nomeContato, numeroContato);
    setContatos((contatos)=>{
      console.log(contatos);
      setId(id+2);
      setContadorContatos(contadorContatos+1);
      return [...contatos, {key:contadorContatos.toString(), id:contato=(id) , nome:contato = (nomeContato), numero:contato = (numeroContato)}];
    });
  };
  
  
  const removerContato = (id)=>{
	  console.log("Remove contato", id, contatos);
    setContatos(contatos => {
        return contatos.filter((contato)=>{
        if(contato.id !== id){ return contato; }
      })
    });
  };
  
  
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Contatos</Text>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
        data={contatos}
        renderItem = { contato => ( <ContatoItem id={contato.item.id} nome={contato.item.nome} numero={contato.item.numero} onDelete={removerContato}/>)}
	  />
    </View>
  );
}
const estilos = StyleSheet.create({
    tela:{
        flex:Medidas.flexGeral,
        padding:Medidas.telaPadding,
        alignItems:Medidas.alignGeral
    },
    titulo:{
        fontSize:Medidas.tituloFont,
        marginVertical:Medidas.tituloMargin
    }
});

export default TelaComeco;