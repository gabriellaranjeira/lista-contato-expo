import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { Dimensions } from "react-native";
var Props = {};
export default class App extends Component<Props> {
	
	constructor(props){
		super(props);
		this.state = {
			nome:"",
			numero:"",
			contatos: [],
		};
	}
	
	getId(){
		let minId = 10;
		if(this.state.contatos.length > 0){
			return this.state.contatos[this.state.contatos.length - 1].id + 2;
		}else{
			return minId;
		}
	}
	
	renderContato(obj){
		console.log(obj);
		return(
			<View style={styles.tabela}>
                <View style={styles.itemTabela} >
					<Text style={styles.textoTabela}>{obj.item.id}</Text>
				</View>
                <View style={styles.itemTabela} >
					<Text style={styles.textoTabela}>{obj.item.nome}</Text>
				</View>
                <View style={styles.itemTabela} >
					<Text style={styles.textoTabela}>{obj.item.numero}</Text>
				</View>
           </View>
		);
	}
	
	addContato(){
		let contato = {id:this.getId(), nome: this.state.nome, numero:this.state.numero};
		let contatos = this.state.contatos;
		contatos.push(contato);
		this.setState({contatos:contatos, numero:"", nome:""});
		console.log(this.state.contatos);
		
	}
	
	render(){
	  return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Lista de contatos</Text>
		  <TextInput onChange={evt => { this.setState({nome:evt.nativeEvent.text}); }} style={styles.campoText} placeholder="Digite o nome do contato"/>
		  <TextInput onChange={evt => { this.setState({numero:evt.nativeEvent.text}); }} value={this.state.numero} style={styles.campoText} placeholder="Digite o numero do contato"/>
		  <Button style={styles.botaoAdd} onPress={() => {this.addContato()}} title="Adicionar contato"/>
		  
		  <View style={styles.tabela}>
                <View style={styles.itemTabelaHeader} >
					<Text style={styles.textoTabelaHeader}>Id</Text>
				</View>
                <View style={styles.itemTabelaHeader} >
					<Text style={styles.textoTabelaHeader}>Nome</Text>
				</View>
                <View style={styles.itemTabelaHeader} >
					<Text style={styles.textoTabelaHeader}>Numero</Text>
				</View>
           </View>
		   <FlatList style={{width:getPercentWidth(100)}} data={this.state.contatos} renderItem={(obj) => { return this.renderContato(obj)}} />
		   
		</View>
		);
	}
}

function getPercentWidth(percent){
	return (Dimensions.get('window').width * percent) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
	paddingTop: 30,
  },
  botaoAdd:{
	  width: getPercentWidth(100)
  },
  tabela: {alignSelf: 'stretch', flexDirection: 'row', marginTop: 10 },
  campoText: {
	  borderStyle: "solid",
	  borderWidth: 1,
	  borderColor: "#000",
	  width: getPercentWidth(90),
	  height: 30,
	  marginBottom: 5,
	  paddingLeft: 5,
  },
  titulo: {
	  fontSize: 30,
	  marginBottom: 20,
  },
  itemTabela:{ flex: 1, alignSelf: 'stretch'},
  textoTabela:{ textAlign:'center' },
  itemTabelaHeader:{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor: "#000", backgroundColor: "#000"},
  textoTabelaHeader:{ textAlign:'center', color:"#FFF" }
});
