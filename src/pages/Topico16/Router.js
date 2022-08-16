import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01';
import Aula01_02 from './Aula01_02';
import Aula01_03 from './Aula01_03';
import Aula01_04 from './Aula01_04';
import Aula02_01 from './Aula02_01';
import Aula02_02 from './Aula02_02';
import Aula03_01 from './Aula03_01';
import Aula03_02 from './Aula03_02';
import Aula03_03 from './Aula03_03';
import Aula04_01 from './Aula04_01';
import Aula04_02 from './Aula04_02'
import Aula05_01 from './Aula05_01';
import Aula06_01 from './Aula06_01';
import Aula06_02 from './Aula06_02';
import Aula07_01 from './Aula07_01';
import Aula07_02 from './Aula07_02';
import Aula08_01 from './Aula08_01';
import Aula08_02 from './Aula08_02';
import Aula09_01 from './Aula09_01';
import Aula09_02 from './Aula09_02';
import Aula10_01 from './Aula10_01';
import Aula10_02 from './Aula10_02';
import Aula11_01 from './Aula11_01';
import Aula11_02 from './Aula11_02';
import Aula12_01 from './Aula12_01';
import Aula12_02 from './Aula12_02';
import Aula13_01 from './Aula13_01';
import Aula14_01 from './Aula14_01';
import Aula15_01 from './Aula15_01';
import Aula15_02 from './Aula15_02';
import Aula15_03 from './Aula15_03';
import Aula16_01 from './Aula16_01';

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
            title: 'Arquivos',
            ...headerOptions,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Aula01_01" component={Aula01_01} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_02" component={Aula01_02} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_03" component={Aula01_03} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_04" component={Aula01_04} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula02_01" component={Aula02_01} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula02_02" component={Aula02_02} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula03_01" component={Aula03_01} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_02" component={Aula03_02} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_03" component={Aula03_03} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula04_01" component={Aula04_01} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula04_02" component={Aula04_02} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula05_01" component={Aula05_01} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula06_01" component={Aula06_01} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula06_02" component={Aula06_02} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula07_01" component={Aula07_01} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_02" component={Aula07_02} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula08_01" component={Aula08_01} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula08_02" component={Aula08_02} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula09_01" component={Aula09_01} options={{ title: 'Aula 9', ...headerOptions }} />
        <Stack.Screen name="Aula09_02" component={Aula09_02} options={{ title: 'Aula 9', ...headerOptions }} />
        <Stack.Screen name="Aula10_01" component={Aula10_01} options={{ title: 'Aula 10', ...headerOptions }} />
        <Stack.Screen name="Aula10_02" component={Aula10_02} options={{ title: 'Aula 10', ...headerOptions }} />
        <Stack.Screen name="Aula11_01" component={Aula11_01} options={{ title: 'Aula 11', ...headerOptions }} />
        <Stack.Screen name="Aula11_02" component={Aula11_02} options={{ title: 'Aula 11', ...headerOptions }} />
        <Stack.Screen name="Aula12_01" component={Aula12_01} options={{ title: 'Aula 12', ...headerOptions }} />
        <Stack.Screen name="Aula12_02" component={Aula12_02} options={{ title: 'Aula 12', ...headerOptions }} />
        <Stack.Screen name="Aula13_01" component={Aula13_01} options={{ title: 'Aula 13', ...headerOptions }} />
        <Stack.Screen name="Aula14_01" component={Aula14_01} options={{ title: 'Aula 14', ...headerOptions }} />
        <Stack.Screen name="Aula15_01" component={Aula15_01} options={{ title: 'Aula 15', ...headerOptions }} />
        <Stack.Screen name="Aula15_02" component={Aula15_02} options={{ title: 'Aula 15', ...headerOptions }} />
        <Stack.Screen name="Aula15_03" component={Aula15_03} options={{ title: 'Aula 15', ...headerOptions }} />
        <Stack.Screen name="Aula16_01" component={Aula16_01} options={{ title: 'Aula 16', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;