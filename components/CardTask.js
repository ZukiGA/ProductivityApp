import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import styles from '../styles/cardTaskStyle'

const CardTask = props => {
  return(
  <TouchableOpacity>
    <View style= {[styles.card, {backgroundColor: props.item.color}]}
      >
      <Text style={styles.text}>{props.item.title}</Text>
      <Text>{props.item.text}</Text>
    </View>
  </TouchableOpacity>
)}

export default CardTask
