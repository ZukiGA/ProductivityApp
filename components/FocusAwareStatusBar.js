import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ?         <StatusBar 
    barStyle= {props.barStyle}
    backgroundColor={props.backgroundColor} 
    translucent={true}
  /> : null;
  }