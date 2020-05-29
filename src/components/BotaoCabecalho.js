import React from 'react';
import{HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform, Button} from 'react-native';
import Cores from '../assets/Cores/Cores';


const BotaoCabecalho = (props) =>{
    return(
        <Button
            {...props}
            IconComponent = {Ionicons}
            iconSize={25}
            color={'#FFF'}
            
        />
    );
};
export default BotaoCabecalho;