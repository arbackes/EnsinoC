import React from 'react'
import { Text } from 'react-native'

const Title = (props) => {
  return (
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', alignSelf: 'center', marginTop: 15, marginBottom: 30 }}>
      {props.text}
    </Text>
  );
}

export default Title;