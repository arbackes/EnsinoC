import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01'
import Aula01_02 from './Aula01_02'
import Aula02_01 from './Aula02_01'
import Aula02_02 from './Aula02_02'

const headerOptions = {
  headerStyle: {
    backgroundColor: '#ff9a00',
  },
  headerTintColor: '#fff',
}

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Introdução',
            ...headerOptions,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Aula01_01" component={Aula01_01} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_02" component={Aula01_02} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula02_01" component={Aula02_01} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula02_02" component={Aula02_02} options={{ title: 'Aula 2', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;