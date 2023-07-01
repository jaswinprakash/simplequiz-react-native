import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/components/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
});
