//rnfes
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native'


const CreateScreen = ({ data,setdata }) => {
  const [itemName, setitemName] = useState('')
  const [stockAmount, setstockAmount] = useState('')
  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount
    }
    setdata([data, newItem]);
    setitemName('');
    setstockAmount('');



  }
  return (
    <View>
      <TextInput
        placeholder="Enter an Item Name"

        value={itemName}
        onChangeName={(item) => setitemName(item)}

      />
      <TextInput
        placeholder="Enter Stock Ammount"

        value={itemName}
        onChangeName={(item) => setstockAmount(item)}

      />
      <Pressable style={styles.addButton}>
        <Text style={styles.btnText} onPress={() => addItemHandler}> Add item in Stock</Text>

      </Pressable>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Stocks</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View style={[styles.itemContainer, { backgroundColor: item.stock < 45 ? "yellow" : null }]}>
            <Text style={styles.itemText}>{item.name}</Text>


          </View>
        } />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text style={styles.itemText}>{item.stock}</Text>
        <Text style={styles.itemText}>Edit</Text>
        <Text style={styles.itemText}>Delete</Text>

      </View>




    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",


  },
  headingText: {
    fontWeight: "400",
    fontSize: 15

  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor:"red"error


  },
  itemText: {
    fontWeight: "400",
    fontSize: 15,
    color: "#333"

  },
  addButton: {
    borderWidth: 0.8,
    borderColor: "green",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue"

  },
  btnText: {
    color: "white",
    fontsize: 12,
    //justifyContent: 'center'

  }
})