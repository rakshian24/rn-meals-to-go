import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppWrapper from './src/components/AppWrapper';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#86e7d6" barStyle="dark-content" />
      <LinearGradient colors={['#538ad6', '#86e7d6']}>
        <AppWrapper />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default App;
