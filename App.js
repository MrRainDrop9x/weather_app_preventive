/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Find from './src/screens/Find';
import Info from './src/screens/Info';
import {AppProvider} from './globalContext';
import React from 'react';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            initialRouteName="Home"
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Find"
            component={Find}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
