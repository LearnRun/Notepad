// App.js
import 'react-native-gesture-handler';
import React from 'react'
import {
  Button,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen'
import WriteScreen from './src/screen/WriteScreen'
import { DefaultTheme, Provider } from 'react-native-paper';
import SaveButton from './src/component/SaveButton'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    placeholder: 'gray',
    primary: 'cornflowerblue',
    disabled: 'lavender',
  },
};

const App = () => {
  return (
    <Provider theme={theme}>
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
              headerRight: () => (
                <SaveButton />
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App