import React from 'react'
import { Text } from 'react-native'

const Subtitle = (props) => {
  return (
    <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 15 }}>
      {props.text}
    </Text>
  );
}

export default Subtitle;