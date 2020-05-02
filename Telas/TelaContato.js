import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import ContatoCard from '../components/ContatoCard';
import Medidas from '../Medidas/Medidas';
import Cores from '../Cores/Cores';

 const TelaContato = (props)=>{
//   const [id, setId] = useState(10);
//   const [contatos, setContatos] = useState ([]);
//   const [contadorContatos, setContadorContatos] = useState(0);
  
  const[nome, setNome]=useState(props.nome);
  const[numero, setNumero]=useState(props.numero);
  //captura o texto digitado


  const capturaNome=(nome)=>{
    setNome(nome)
  };

  const capturaNumero=(numero)=>{
    setNumero(numero)
  };

  return (
    
  <View style={estilos.tela}>
  {	!props.editando ? (
  <>
	  <Text style={estilos.titulo}>Editar contato</Text>

    <ContatoCard nome={props.nome} numero={props.numero} id={props.id} />
	  

      <View style={estilos.grupoBotao}>
        <TouchableOpacity onPress={props.setEditando.bind(this, true)}>
          <View style={estilos.botao}>
            <Text style={estilos.botaoTexto}>Editar</Text>
          </View>
        </TouchableOpacity>
	  
        <TouchableOpacity onPress={props.voltar.bind(this)}>
          <View style={estilos.botao}>
            <Text style={estilos.botaoTexto}>Voltar</Text>
          </View>
        </TouchableOpacity>
    </View>
    </>
	) : ( 
	<>
	  <Text style={estilos.titulo}>Editar contato</Text>
	  
	  <View style={estilos.contatosView}>
          <TextInput placeholder="Nome" style={estilos.contatosInputText} onChangeText={capturaNome} value={nome}/>
          <TextInput placeholder="Número" style={estilos.contatosInputText} keyboardType="number-pad" maxLength={10} onChangeText={capturaNumero} value={numero}/>
	  </View> 

    <View style={estilos.grupoBotao}>
	  <TouchableOpacity onPress={props.editarContato.bind(props.editarContato, props.index, nome, numero)}>
        <View style={estilos.botao}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </View>
      </TouchableOpacity>
	  
	  <TouchableOpacity onPress={props.setEditando.bind(this, false)}>
        <View style={estilos.botao}>
          <Text style={estilos.botaoTexto}>Cancelar</Text>
        </View>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={props.voltar.bind(this)}>
    <View style={estilos.botaoVoltar}>
      <Text style={estilos.botaoTexto}>Voltar</Text>
    </View>
  </TouchableOpacity>
	</>
	)
  }
  
	
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
  },
	contatosView:{
    flexDirection:Medidas.viewFlex,
    justifyContent:Medidas.viewJustify,
    alignItems:Medidas.alignGeral,
    height:Medidas.viewHeight, 
    marginVertical:Medidas.viewMargin,
		padding: 2
  },
  contatosInputText:{
    width:Medidas.inputWidth,
    borderBottomColor:Cores.borderInputT,
    borderBottomWidth:Medidas.inputBorder,
    padding:Medidas.inputPadding,
    borderRadius:Medidas.inputBorderR,
    padding: 2,
    textAlign:'center',
  },
  botao:{
    backgroundColor:"#000",
    width:"100%",
    borderColor:"#CCC",
    borderStyle:'dashed',
    padding:10,
    borderWidth:3
  },
  botaoTexto:{
    color:"#FFF",
    textAlign:'center',
    
  },
  grupoBotao:{
    flexDirection:Medidas.viewFlex,
    justifyContent:Medidas.viewJustify,
    alignItems:Medidas.alignGeral,
  },
  botaoVoltar:{
    backgroundColor:"#000",
    width:"100%",
    textAlign:'center',
    marginTop:"5%",
    padding: "5%",
    borderColor:"#CCC",
    borderStyle:'dashed',
    borderWidth:3
  },
});

export default TelaContato;