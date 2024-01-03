import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewsApiDemo from './src/NewsApiDemo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NewsApiDemo"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="NewsApiDemo" component={NewsApiDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
