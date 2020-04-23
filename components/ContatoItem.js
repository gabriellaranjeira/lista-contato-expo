import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContatoItem = (props) => {
	return(
	<TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}> 
        <View style={styles.itemNaLista}>
			<Text style={{color:"#FFF",textAlign:'center'}} >ID: {props.id}</Text>
            <Text style={{color:"#FFF",textAlign:'center'}} >Nome: {props.nome}</Text>
            <Text style={{color:"#FFF",textAlign:'center'}}> Telefone: {props.numero}</Text>
        </View>
    </TouchableOpacity> 
	);
}
const styles = StyleSheet.create({
		itemNaLista: {
			padding: 12,
			backgroundColor: '#000',
			borderBottomColor: '#FFF',
			borderWidth: 1,
			marginBottom: 8,
			borderRadius: 8,
		},
});

export default ContatoItem;