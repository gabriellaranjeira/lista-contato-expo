import React from 'react';
import ContatosNavigator from './src/navigation/ContatosNavigator';
import { createStore,  combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './src/store/contatos-reducer';
import { init } from './src/helpers/db';


const rootReducer = combineReducers({
  contatos:contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {  
  init().then(() => {
    console.log("Criação da base ocorreu com sucesso.");
  }).catch((err) => {
    console.log('Criação da base falhou.');
    console.log(err);
  });
   
  return(
    <Provider store={store}>
      <ContatosNavigator/>
    </Provider>
  );
}