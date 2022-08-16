import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Card from '../../components/Card'
import topics from './topics'

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#3498db' },
  divider: { marginTop: 10, height: 1 },
  description: { fontSize: 14, color: 'white', marginLeft: 10, marginVertical: 15 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginLeft: 10 },
});

const Home = ({ navigation }) => {

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={topics}
        ListHeaderComponent={() => <Text style={styles.description}>Selecione o tópico de estudo</Text>}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card
            icon={item.icon}
            title={item.title}
            description={item.description}
            onPress={() => navigation.push(item.route)}
          />
        )}
      />
    </View>
  );
};

export default Home;