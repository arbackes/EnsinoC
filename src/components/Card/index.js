import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = ({ icon, title, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper} >
    <Image source={icon} style={styles.icon} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default Card;
