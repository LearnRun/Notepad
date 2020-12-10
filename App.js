// App.js
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen'
import WriteScreen from './src/screen/WriteScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Notepad',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'deepskyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="WriteScreen"
          component={WriteScreen}
          options={{
            headerTitle: 'Notepad',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'deepskyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App