import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TopicCard = ({ title, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper} >
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default TopicCard;
