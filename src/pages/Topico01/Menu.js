import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import TopicCard from '../../components/TopicCard'
import BackButton from '../../components/BackButton'
import classes from './classes'

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  divider: { marginTop: 10, height: 1 },
  description: { fontSize: 14, color: '#333', marginLeft: 10, marginTop: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginLeft: 10 },
  footer: { flexDirection: 'row', justifyContent: 'space-between' }
});

const Menu = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.description}>Selecione a aula desejada</Text>
      <Divider style={styles.divider} />

      <FlatList
        data={classes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TopicCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.push(item.route)}
          />
        )}
      />

      <View style={styles.footer}>
        <BackButton goBack={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

export default Menu;
