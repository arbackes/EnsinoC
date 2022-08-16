import React from 'react'
import { IconButton } from 'react-native-paper'

const BackButton = (props) => {
  return (
      <IconButton icon='chevron-left' size={30} color='#ff9a00' onPress={props.goBack}/>
  );
}

export default BackButton;