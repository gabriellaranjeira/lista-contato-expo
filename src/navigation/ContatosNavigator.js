import React from 'react';
import TelaComeco from '../pages/TelaComeco';
import TelaNovoContato from '../pages/TelaNovoContato'
import TelaContato from '../pages/TelaContato';
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Cores from '../assets/Cores/Cores';
import TelaEditaContato from '../pages/TelaEditaContato';

const ContatosNavigator = createStackNavigator({
    Comeco: TelaComeco,
    Contato: TelaContato,
    NovoContato: TelaNovoContato,
    EditaContato: TelaEditaContato
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS ==='android'?Cores.primary:''
        },
        headerTintColor: Platform.OS ==='android'?'white':Cores.primary
    }
});

export default createAppContainer(ContatosNavigator);