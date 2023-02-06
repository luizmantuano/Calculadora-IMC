import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontLoaded] = useFonts({
    'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
