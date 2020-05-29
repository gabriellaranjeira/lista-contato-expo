import React from 'react';
import ContatosNavigator from './src/navigation/ContatosNavigator';
import { createStore,  combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './src/store/contatos-reducer';

const rootReducer = combineReducers({
  contatos:contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {  
   
  return(
    <Provider store={store}>
      <ContatosNavigator/>
    </Provider>
  );
}