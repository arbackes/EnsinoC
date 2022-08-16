import React from 'react';
import { Text } from 'react-native';

const Paragraph = (props) => {
  return (
    <Text style={{ fontSize: 20, textAlign: 'auto', ...props.style }}>{props.text}</Text>
  );
}

export default Paragraph;