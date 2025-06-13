// Import core libraries
//import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, Pressable } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable style={styles.button}>
            <Text style={styles.btntext}> All items</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.btntext}> All items</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.btntext}> All items</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
    width:"100%",
    height:"100%",
    padding:"4%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
   btnContainer:{
    flexDirection:"row",
    gap:10,
    marginVertical:10
  },
  
  button:{
    borderWidth:0.8,
    borderColor:"green",
    borderRadius:50,
    paddingHorizental:50,
    paddingVertical:5
  },
 
  btntext:{
    color:"green",
    fontsize:12

  }
});

export default App;
