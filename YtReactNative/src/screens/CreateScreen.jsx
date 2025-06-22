import { useState } from 'react'
import { StyleSheet, Text,ScrollView, View, TextInput, FlatList, Pressable } from 'react-native'

const CreateScreen = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('')
  const [stockAmount, setstockAmount] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount
    }
    // rnfes: Should use spread operator to merge arrays
    // Original creates nested array: [existingData, newItem]
    // Correct: setdata([...data, newItem])
    setdata([...data, newItem]);

    setitemName('');
    setstockAmount('');
    setisEdit(false)
  }
  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))

  }
  const editItemHandler = (item) => {
    setisEdit(true)
    setitemName(item.name);
     // rnfes: The issue is here - item.stock might be a number from initial data
    // But TextInput requires string values. Convert to string:
    setstockAmount(String(item.stock))
    //if you convert string like previous line-------this part is a must
  //  const updatedStock = Number(stockAmount) || 0;
  
  // setdata(data.map((item) => (
  //   item.id === editItemId 
  //     ? { ...item, name: itemName, stock: updatedStock } 
  //     : item
  // )));
    //setstockAmount(item.stock);
    seteditItemId(item.id)

  }
  const updateEditHandler = () => {
     const updatedStock = Number(stockAmount) || 0;
  
  setdata(data.map((item) => (
    item.id === editItemId 
      ? { ...item, name: itemName, stock: updatedStock } 
      : item
  )));
  //if not using this---setstockAmount(String(item.stock))....use the lower part
    // setdata(data.map((item) => (
    
    //   item.id === editItemId ? { ...item, name: itemName, stock: stockAmount } : item)))
    setitemName('');
    setstockAmount('');
    setisEdit(false);
    seteditItemId(null);  // Add this line
    

  }

return (
  <ScrollView>
    <TextInput
      placeholder="Enter an Item Name"
      value={itemName}
      // rnfes: Wrong prop name - should be onChangeText
      // Also needs to use event value directly
      // Correct: onChangeText={setitemName}
      onChangeText={(item) => setitemName(item)}
    />

    <TextInput
      placeholder="Enter Stock Ammount"
      // rnfes: Wrong value binding - should be stockAmount
      // Correct: value={stockAmount}
      value={stockAmount}
      // rnfes: Same issues as first input
      // Correct: onChangeText={setstockAmount}
      onChangeText={(item) => setstockAmount(item)}
    />

    <Pressable style={styles.addButton} 
     onPress={() => !isEdit ? addItemHandler() : updateEditHandler()}
     // onPress={isEdit ? updateEditHandler : addItemHandler}  // Remove arrow function}
    //pressable not showing -styles
    // rnfes: onPress should be on Pressable, not Text
    // Also needs to reference function without ()
    // Correct: onPress={addItemHandler}
    // rnfes: Still incorrect - arrow function returns function reference without executing
    // Should be either: onPress={addItemHandler} 
    // OR onPress={() => addItemHandler()}
    >
      <Text style={styles.btnText}> {isEdit ?
        "Edit item in Stock" : "Add item in Stock"}
      </Text>
    </Pressable>

    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Items</Text>
      <Text style={styles.headingText}>Stocks</Text>
    </View>

    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        // rnfes: Entire item row should be in one container
        // Stock value should be displayed here, not outside FlatList
        // rnfes: Comparing string to number - item.stock is string from TextInput
        // Should convert to number: parseInt(item.stock) < 45
        <View style={[styles.itemContainer, { backgroundColor: item.stock < 45 ? "yellow" : null }]}>
          <Text style={styles.itemText}>{item.name}</Text>
          {/* rnfes: Missing stock display in item */}
          {/* <Text style={styles.itemText}>{item.stock}</Text> */}
          {/* rnfes: Edit/Delete should be inside item container */}
          <View style={{ flexDirection: "row", gap: 20 }}>
            {/* rnfes: Stock value should be formatted for consistency */}
            <Text style={styles.itemText}>{item.stock}</Text>
            <Pressable onPress={() => editItemHandler(item)}>
              <Text style={styles.itemText}>Edit</Text>

            </Pressable>

            <Pressable onPress={() => deleteItemHandler(item.id)}>
              <Text style={styles.itemText}>Delete</Text>

            </Pressable>


          </View>
        </View>
      )}
    />

    {/* rnfes: This view should be INSIDE renderItem */}
    {/* Currently renders once after entire list 
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text style={styles.itemText}>{item.stock}</Text>
        <Text style={styles.itemText}>Edit</Text>
        <Text style={styles.itemText}>Delete</Text>
      </View>*/}

  </ScrollView>
)
}

export default CreateScreen
//ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f4f4f4",  // Light background for contrast
    borderRadius: 10,
    shadowColor: "#000",  // Shadow for modern look
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,  // For Android shadow
  },

  headingText: {
    fontWeight: "700",  // Bold and clear
    fontSize: 18,
    color: "#333",
    letterSpacing: 1.2,  // Letter spacing for a stylish effect
    textTransform: "uppercase",  // To give a classy touch
    textAlign: "center",
    paddingVertical: 10,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 12,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,  // For Android shadow effect
    transition: "all 0.3s ease",  // Smooth transition for hover effect
  },

  itemText: {
    fontWeight: "600",  // Lighter than heading for emphasis
    fontSize: 16,
    color: "#555",
    letterSpacing: 0.5,
    textTransform: "capitalize",  // Text looks polished
    paddingVertical: 2,
  },

  addButton: {
    borderWidth: 1.5,
    borderColor: "#4CAF50",  // Green color for action buttons
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#4CAF50",  // Green background for buttons
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,  // Soft shadow for modern touch
    transition: "background-color 0.3s ease",  // Hover effect on press
  },

  btnText: {
    color: "white",
    fontSize: 16,  // Increased font size for readability
    fontWeight: "600",  // Clear and bold text
    letterSpacing: 1.5,  // Space between letters for a polished look
    textTransform: "uppercase",  // Modern effect for the button text
  },

  // Additional styling for hover effects
  addButtonHover: {
    backgroundColor: "#388E3C",  // Darker green on hover for press effect
    transform: [{ scale: 1.05 }],  // Slightly enlarge button on press
  }
});

//dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// const styles = StyleSheet.create({
//   // Main container
//   container: {
//     flex: 1,
//     backgroundColor: '#0F172A',
//     padding: 25,
//   },

//   // Input fields with modern styling
//   inputContainer: {
//     marginBottom: 25,
//     position: 'relative',
//   },
//   input: {
//     backgroundColor: '#1E293B',
//     borderRadius: 14,
//     paddingVertical: 18,
//     paddingHorizontal: 22,
//     fontSize: 16,
//     color: '#F8FAFC',
//     borderWidth: 1.5,
//     borderColor: '#334155',
//     shadowColor: '#5E72E4',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 3,
//   },
  
//   // Premium button with depth
//   addButton: {
//     borderRadius: 16,
//     paddingVertical: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     marginVertical: 20,
//     backgroundColor: '#5E72E4',
//     shadowColor: '#5E72E4',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.4,
//     shadowRadius: 20,
//     elevation: 8,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: '700',
//     letterSpacing: 0.8,
//     textTransform: 'uppercase',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },

//   // Section headers
//   headingContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 18,
//     borderBottomWidth: 1.5,
//     borderBottomColor: '#1E293B',
//     marginBottom: 15,
//     marginTop: 15,
//   },
//   headingText: {
//     fontWeight: "700",
//     fontSize: 18,
//     letterSpacing: 0.7,
//     color: '#E2E8F0',
//     textTransform: 'uppercase',
//   },

//   // Premium list items
//   itemContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: '#1E293B',
//     borderRadius: 18,
//     padding: 22,
//     marginBottom: 18,
//     alignItems: 'center',
//     borderWidth: 1.5,
//     borderColor: '#334155',
//     shadowColor: '#020617',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.25,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   itemText: {
//     fontWeight: "600",
//     fontSize: 17,
//     color: "#F1F5F9",
//     maxWidth: '40%',
//   },
//   stockText: {
//     fontWeight: "800",
//     fontSize: 18,
//     color: "#5E72E4",
//     minWidth: 50,
//     textAlign: 'center',
//     textShadowColor: 'rgba(94, 114, 228, 0.3)',
//     textShadowOffset: { width: 0, height: 0 },
//     textShadowRadius: 10,
//   },
//   lowStock: {
//     color: '#FFD700',
//     textShadowColor: 'rgba(255, 215, 0, 0.3)',
//   },

//   // Action buttons
//   actionContainer: {
//     flexDirection: "row",
//     gap: 18,
//   },
//   actionButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1.5,
//   },
//   editButton: {
//     backgroundColor: 'rgba(94, 114, 228, 0.15)',
//     borderColor: 'rgba(94, 114, 228, 0.4)',
//   },
//   deleteButton: {
//     backgroundColor: 'rgba(239, 68, 68, 0.15)',
//     borderColor: 'rgba(239, 68, 68, 0.4)',
//   },
//   actionText: {
//     fontWeight: '700',
//     fontSize: 14,
//     letterSpacing: 0.5,
//   },
  
//   // Empty state styling
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 50,
//   },
//   emptyText: {
//     color: '#64748B',
//     fontSize: 17,
//     marginTop: 20,
//     textAlign: 'center',
//     lineHeight: 26,
//     paddingHorizontal: 30,
//   },
// });
//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// const styles = StyleSheet.create({
//   headingContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",


//   },
//   headingText: {
//     fontWeight: "400",
//     fontSize: 15

//   },
//   itemContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     //backgroundColor:"red"error


//   },
//   itemText: {
//     fontWeight: "400",
//     fontSize: 15,
//     color: "#333"

//   },
//   addButton: {
//     borderWidth: 0.8,
//     borderColor: "green",
//     borderRadius: 50,
//     paddingHorizontal: 10,
//     paddingVertical: 3.5,
//     //justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "blue"

//   },
//   btnText: {
//     color: "white",
//     fontSize: 12,
//     // rnfes: Typo still present - should be fontSize (capital S)
//     // This style won't be applied as written
//     //justifyContent: 'center'

//   }
// })