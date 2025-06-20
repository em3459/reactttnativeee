// Import core libraries
import React, { useState } from 'react';  // Add React and useState import
import { SafeAreaView, Text, StyleSheet, View, Pressable } from 'react-native';
import LowStock from './LowStock';
import CreateScreen from './CreateScreen';
import AllItems from './AllItems';

const data = [
  {
    id: 1,
    name: "Item 1",
    stock: 50,
    unit: "pcs",
  },
  {
    id: 2,
    name: "Item 2",
    stock: 20,
    unit: "pcs",
  },
  {
    id: 3,
    name: "Item 3",
    stock: 30,
    unit: "kg",
  },
  {
    id: 4,
    name: "Item 4",
    stock: 40,
    unit: "liters",
  },
  {
    id: 5,
    name: "Item 5",
    stock: 43,
    unit: "pcs",  // Low stock item
  },
  {
    id: 6,
    name: "Item 6",
    stock: 50,
    unit: "kg",
  },
  {
    id: 7,
    name: "Item 7",
    stock: 75,
    unit: "liters",
  },
  {
    id: 8,
    name: "Item 8",
    stock: 55,
    unit: "pcs",  // Low stock item
  },
];


const HomeScreen = () => {
  const [view, setview] = useState(0);  // useState should work now with React import
  const [data, setdata] = useState([{
    id: 1,
    name: "Item 1",
    stock: 50,
    unit: "pcs",
  },
  {
    id: 2,
    name: "Item 2",
    stock: 20,
    unit: "pcs",
  },
  {
    id: 3,
    name: "Item 3",
    stock: 30,
    unit: "kg",
  },
  {
    id: 4,
    name: "Item 4",
    stock: 40,
    unit: "liters",
  },
  {
    id: 5,
    name: "Item 5",
    stock: 43,
    unit: "pcs",  // Low stock item
  },
  {
    id: 6,
    name: "Item 6",
    stock: 50,
    unit: "kg",
  },
  {
    id: 7,
    name: "Item 7",
    stock: 75,
    unit: "liters",
  },
  {
    id: 8,
    name: "Item 8",
    stock: 55,
    unit: "pcs",  // Low stock item
  }])
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
         <Pressable style={[styles.button,view===0 ? {backgroundColor:"green"}:null]} onPress={()=>setview(0)}>
            <Text style={[styles.btntext,view===0?{color:"white"}:null]}> All items</Text>
        </Pressable>
         <Pressable style={[styles.button,view===1 ? {backgroundColor:"green"}:null]} onPress={()=>setview(1)}>
            <Text style={[styles.btntext,view===1?{color:"white"}:null]}> LowStock</Text>
        </Pressable>
         <Pressable style={[styles.button,view===2 ? {backgroundColor:"green"}:null]} onPress={()=>setview(2)}>
            <Text style={[styles.btntext,view===2?{color:"white"}:null]}> Create</Text>
        </Pressable>
      </View>
      {view ===0 && <AllItems data={data} />}
      {/* {view ===1 && <LowStock/>} */}
      {view ===1 && <AllItems data={data.filter((item)=>item.stock<45)}/>}
      {view ===2 && <CreateScreen data={data} setdata={setdata}/>}
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
    paddingHorizontal:10,
    paddingVertical:3.5
  },
 
  btntext:{
    color:"green",
    fontsize:12

  }
});

export default HomeScreen;
