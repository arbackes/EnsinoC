import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'

const BackAndNextButtons = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View><IconButton icon='chevron-left' size={30} color='#ff9a00' onPress={props.goBack}/></View>
      <View><IconButton icon='chevron-right' size={30}  color='#ff9a00' onPress={props.goNext}/></View>
    </View>
  );
}

export default BackAndNextButtons;