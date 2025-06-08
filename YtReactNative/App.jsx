import { StyleSheet, Text,SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'

const App = () => {


  return (
    //js object and intext style same almost
      //js object style-2
    // <SafeAreaView style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#f0f0f0',
    // }}></SafeAreaView>
    //stylesheet style-3
    <SafeAreaView style={styles.container} >
      <Text style= {{backgroundColor: "red" ,/* intext style-1 */
        padding:100,
        fontSize:10
      }}> 0000000</Text>
      <Text style={styles.text} > 111111111</Text>

      <Image style ={{width:"100%",height:"20%"}} source={{uri:"https://w.wallhaven.cc/full/vq/wallhaven-vqkoz5.png"}}/> 
      {/*  not> </Image>  */}
  



      <Pressable style={styles.button}>
        <Text style={styles.btbutton} >33333333333333</Text>
      </Pressable>
     





    </SafeAreaView>
    
    //view-android ios separately
    //safeareaview-android ios auto
  )
}

export default App
//stylesheet style-3
const styles = StyleSheet.create({
  container:{
    backgroundColor: "yellow" ,
    height:"100%",
    width:"100%"
        
  },
  text:{
    backgroundColor: "blue" ,
        padding:100,
        fontSize:10,
        color:"white"

  },
  button:{
    backgroundColor:"gray",
  
    //first width,then color
    borderWidth:3,
    borderColor:"black",
    justifyContent: "center",  // Centers text vertically
     alignItems: "center"
    
  },
  btbutton:{
    // flex:1,
    color:"white",
    fontWeight:"900",
    fontSize:50,
    //padding:10,
    //textAlign: "center",
    

  }

})










































// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   /*
//    * To keep the template simple and small we're adding padding to prevent view
//    * from rendering under the System UI.
//    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
//    * https://github.com/AppAndFlow/react-native-safe-area-context
//    *
//    * You can read more about it here:
//    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
//    */
//   const safePadding = '5%';

//   return (
//     <View style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         style={backgroundStyle}>
//         <View style={{paddingRight: safePadding}}>
//           <Header/>
//         </View>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             paddingHorizontal: safePadding,
//             paddingBottom: safePadding,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
