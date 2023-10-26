import { StatusBar } from 'expo-status-bar';

import HomePage from './src/pages/HomePage';
import SettingsPage from './src/pages/SettingsPage';
import LoginPage from './src/pages/LoginPage';
import RecordEntry from './src/pages/RecordEntry';
import Logs from './src/pages/Logs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

const NavStack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    // we want to check whether the user is authenticated here. 
    // for now we can just direct to the login page
  }, [])

  return (
    <NavigationContainer>
      <StatusBar style='auto' backgroundColor='#B4C5E4' />
      <NavStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <NavStack.Screen
          name="Login"
          component={LoginPage}
        ></NavStack.Screen>

        <NavStack.Screen
          name="Home"
          component={HomePage}
        ></NavStack.Screen>

        <NavStack.Screen
          name="Logs"
          component={Logs}
        ></NavStack.Screen>

        <NavStack.Screen
          name="Settings"
          component={SettingsPage}
        ></NavStack.Screen>

        <NavStack.Screen
          name="RecordEntry"
          component={RecordEntry}
        ></NavStack.Screen>

      </NavStack.Navigator>
    </NavigationContainer>
  );
}


export default App