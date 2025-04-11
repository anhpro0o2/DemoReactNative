import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Cafe from './components/Cat';
import LoginScreen from './components/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;
