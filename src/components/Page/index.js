import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView, StyleSheet} from 'react-native';
import BackAndNextButtons from '../BackAndNextButtons';

const styles = StyleSheet.create({
  wrapper: { flex: 1, marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff' },
});

const Page = ({children, nextRoute = ''}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <ScrollView>{children}</ScrollView>

      <BackAndNextButtons
        goBack={() => navigation.goBack()}
        goNext={() => navigation.navigate(nextRoute)}
      />
    </View>
  );
};

export default Page;
