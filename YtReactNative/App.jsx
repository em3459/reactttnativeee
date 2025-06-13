// Import core libraries
//import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
//only import homescreen here
//copying path not work
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
      {/* <StatusBar barStyle="dark-content" />
      <HomeScreen/>
      <Text style={styles.title}>Welcomeuu to Sunny leone!</Text> */}
    </SafeAreaView>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
