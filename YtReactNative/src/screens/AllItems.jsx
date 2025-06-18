//rnfes
import { FlatList, SafeAreaView,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Stocks</Text>
        </View> 

      <FlatList
        data={data}
        keyExtractor={(item)=>item.id }
        renderItem={({item})=>
        <View style={[styles.itemContainer,{backgroundColor: item.stock<45 ? "yellow" : null}]}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.stock}</Text>
        </View>
        }/>   
      </SafeAreaView>
  )
}

export default AllItems

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",


  },
  headingText:{
    fontWeight:"400",
    fontSize:15

  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    //backgroundColor:"red"error


  },
  itemText:{
    fontWeight:"400",
    fontSize:15,
    color:"#333"

  }
})