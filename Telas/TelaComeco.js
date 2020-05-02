import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, Alert} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';
import TelaContato from './TelaContato';
import Medidas from '../Medidas/Medidas';

const TelaComeco = (props)=>{
  const [id, setId] = useState(10);
  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState(0);
  const [vizualizandoContatos, setVizualizandoContatos] = useState(false);
  const [editando, setEditando] = useState(false);
  const [contatoSelecionado, setContatoSelecionado] = useState({id:0, nome:"", numero:0, index:0});
 
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
    Keyboard.dismiss();
  };
  
  const editarContato = (index, nome, numero) => {
	  const _contatos = contatos;
	  console.log("editarContato", index, nome, numero);
	  _contatos[index].numero = numero;
	  _contatos[index].nome = nome;
    setContatos(_contatos);
    const _contato = {nome:contatos[index].nome, numero:contatos[index].numero, index:index};
    setContatoSelecionado(_contato);
    setEditando(false);
	  
  }
  
  const removerContato = (id)=>{
	  console.log("Remove contato", id, contatos);
	  
	  Alert.alert(
      'Deseja remover o contato id: ' + id + '?',
      '',
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: () => {
            setContatos(contatos => {
				return contatos.filter((contato)=>{
				if(contato.id !== id){ return contato; }
			  })
			});
          }
        }
      ]
    )
    
  };
  
  const voltar = () => {
	  setVizualizandoContatos(false);
  }
  
  const verContato = async (index) => {
	  
	  const _contato = {id:contatos[index].id, nome:contatos[index].nome, numero:contatos[index].numero, index:index};
	  console.log("verContato", index, _contato);
	  await setContatoSelecionado(_contato);
	  console.log("Setando status");
	  console.log("ContatoSelecionado", contatoSelecionado);
	  setVizualizandoContatos(true);
  }
  
  return (
   <View style={estilos.tela}>
   
   { vizualizandoContatos ? 
   (<TelaContato editando={editando} setEditando={setEditando} id={contatoSelecionado.id} nome={contatoSelecionado.nome} index={contatoSelecionado.index} numero={contatoSelecionado.numero} editarContato={editarContato} voltar={voltar}  />)
   :
      (
	  <>
		<ContatoInput onAdicionarContato={adicionarContato} />
		<FlatList
			data={contatos}
			renderItem = { contato => ( <ContatoItem index={contato.index} onSeleciona={verContato} id={contato.item.id} nome={contato.item.nome} numero={contato.item.numero} onDelete={removerContato}/>)} />
	  </>)}
  
   
		
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