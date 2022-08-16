import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import T1Router from './pages/Topico01/Router'
import T2Router from './pages/Topico02/Router'
import T3Router from './pages/Topico03/Router'
import T4Router from './pages/Topico04/Router'
import T5Router from './pages/Topico05/Router'
import T6Router from './pages/Topico06/Router'
import T7Router from './pages/Topico07/Router'
import T8Router from './pages/Topico08/Router'
import T9Router from './pages/Topico09/Router'
import T10Router from './pages/Topico10/Router'
import T11Router from './pages/Topico11/Router'
import T12Router from './pages/Topico12/Router'
import T13Router from './pages/Topico13/Router'
import T14Router from './pages/Topico14/Router'
import T15Router from './pages/Topico15/Router'
import T16Router from './pages/Topico16/Router'

const headerOptions = {
  headerStyle: {
    backgroundColor: '#ff9a00',
  },
  headerTintColor: '#fff',
}

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                header: null,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Programação Descomplicada',
                ...headerOptions,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="T1Router" component={T1Router} options={{ headerShown: false }} />
            <Stack.Screen name="T2Router" component={T2Router} options={{ headerShown: false }} />
            <Stack.Screen name="T3Router" component={T3Router} options={{ headerShown: false }} />
            <Stack.Screen name="T4Router" component={T4Router} options={{ headerShown: false }} />
            <Stack.Screen name="T5Router" component={T5Router} options={{ headerShown: false }} />
            <Stack.Screen name="T6Router" component={T6Router} options={{ headerShown: false }} />
            <Stack.Screen name="T7Router" component={T7Router} options={{ headerShown: false }} />
            <Stack.Screen name="T8Router" component={T8Router} options={{ headerShown: false }} />
            <Stack.Screen name="T9Router" component={T9Router} options={{ headerShown: false }} />
            <Stack.Screen name="T10Router" component={T10Router} options={{ headerShown: false }} />
            <Stack.Screen name="T11Router" component={T11Router} options={{ headerShown: false }} />
            <Stack.Screen name="T12Router" component={T12Router} options={{ headerShown: false }} />
            <Stack.Screen name="T13Router" component={T13Router} options={{ headerShown: false }} />
            <Stack.Screen name="T14Router" component={T14Router} options={{ headerShown: false }} />
            <Stack.Screen name="T15Router" component={T15Router} options={{ headerShown: false }} />
            <Stack.Screen name="T16Router" component={T16Router} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;