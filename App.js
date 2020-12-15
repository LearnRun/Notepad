// App.js
import 'react-native-gesture-handler';
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen'
import WriteScreen from './src/screen/WriteScreen'
import SaveButton from './src/component/SaveButton'
import BackButton from './src/component/BackButton'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
const { store, persistor } = configureStore();

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
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
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
                options={({ navigation }) => ({
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
                  headerLeft: () => (
                    <BackButton navigation={navigation} />
                  ),
                  headerRight: () => (
                    <SaveButton navigation={navigation} />
                  )
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App