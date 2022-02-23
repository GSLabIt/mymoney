import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationConst from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationConst/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
