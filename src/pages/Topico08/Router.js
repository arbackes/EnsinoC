import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01';
import Aula01_02 from './Aula01_02';
import Aula02_01 from './Aula02_01';
import Aula02_02 from './Aula02_02';
import Aula03_01 from './Aula03_01';
import Aula03_02 from './Aula03_02';
import Aula04_01 from './Aula04_01';
import Aula04_02 from './Aula04_02';
import Aula04_03 from './Aula04_03';
import Aula05_01 from './Aula05_01';
import Aula06_01 from './Aula06_01';
import Aula06_02 from './Aula06_02';
import Aula07_01 from './Aula07_01';
import Aula08_01 from './Aula08_01';
import Aula09_01 from './Aula09_01';

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
            title: 'Comandos de Repetição',
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
        <Stack.Screen name="Aula03_01" component={Aula03_01} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_02" component={Aula03_02} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula04_01" component={Aula04_01} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula04_02" component={Aula04_02} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula04_03" component={Aula04_03} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula05_01" component={Aula05_01} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula06_01" component={Aula06_01} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula06_02" component={Aula06_02} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula07_01" component={Aula07_01} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula08_01" component={Aula08_01} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula09_01" component={Aula09_01} options={{ title: 'Aula 9', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;