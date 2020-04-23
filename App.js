import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
export default function App() {
	const[id, setId] = useState (0);
	const[contatos, setContatos] = useState([]);
	const[contadorContatos, setContadorContatos] = useState(0);

	
  const adicionarContato =  (nomeContato, numeroContato) => {
    contato = (id, nomeContato, numeroContato);
	console.log("AddContato", nomeContato, numeroContato);
    setContatos((contatos)=>{
      console.log(contatos);
      setId(parseInt(id)+2);
      setContadorContatos(contadorContatos+1);
      return [...contatos, {key:contadorContatos.toString(), id:contato=(id) , nome:contato = (nomeContato), numero:contato = (numeroContato)}];
    });
  };
	
	
	const removerContato = (id) => {
		console.log("Remove contato", id, contatos);
		setContatos(contatos => {
			return contatos.filter((contato)=>{
				if(contato.id !== id){ return contato; }
			})
		});
	};
	
	return(
	<View style={styles.telaPrincipalView}>
      <View style={{padding:12,backgroundColor:'#000',borderColor:'#CCC',borderRadius:6}}><Text style={{color:"#FFF",textAlign:'center'}}>Contatos</Text></View>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
      data={contatos}
      renderItem={
      contato => (
        <ContatoItem id={contato.item.id} nome={contato.item.nome} numero={contato.item.numero} 
        onDelete={removerContato}/>
      )}/>
    </View>
  );
}

  
  
const styles = StyleSheet.create(
	{
		telaPrincipalView: {
			padding: 50
		},
		contatosView: {
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: 8
		},
		contatosInputText: {
			width: '80%',
			borderBottomColor: 'black',
			borderBottomColor: 1,
			padding: 2
		},
		itemNaLista: {
			padding: 12,
			backgroundColor: '#000',
			borderBottomColor: '#FFF',
			color:"#FFF",
			borderWidth: 1,
			marginBottom: 8,
			borderRadius: 8
		},
		
	}
);