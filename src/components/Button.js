import React from 'react';
import { Button } from 'react-native-paper';

const TopicButton = (props) => {
  return (
    <Button mode='contained' onPress={props.onPress} style={{ marginBottom: 10 }}>
      {props.text}
    </Button>
  );
}

export default TopicButton;