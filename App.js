import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/components/screens/Home';
import SubPage from './src/components/screens/SubPage';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Home /> */}
      <SubPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
