import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01';
import Aula01_02 from './Aula01_02';
import Aula01_03 from './Aula01_03';
import Aula02_01 from './Aula02_01';
import Aula03_01 from './Aula03_01';
import Aula04_01 from './Aula04_01';
import Aula05_01 from './Aula05_01';
import Aula06_01 from './Aula06_01';
import Aula06_02 from './Aula06_02';
import Aula06_03 from './Aula06_03';
import Aula07_01 from './Aula07_01';
import Aula07_02 from './Aula07_02';

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
            title: 'Funções',
            ...headerOptions,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Aula01_01" component={Aula01_01} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_02" component={Aula01_02} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_03" component={Aula01_03} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula02_01" component={Aula02_01} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula03_01" component={Aula03_01} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula04_01" component={Aula04_01} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula05_01" component={Aula05_01} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula06_01" component={Aula06_01} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula06_02" component={Aula06_02} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula06_03" component={Aula06_03} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula07_01" component={Aula07_01} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_02" component={Aula07_02} options={{ title: 'Aula 7', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;