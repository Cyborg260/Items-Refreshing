/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
import{
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SectionList,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const App= ()=>{
  const [Item, setItems ]=useState([
    {name:'TEXT'},
    {name:'TEXTINPUT'},
    {name:'BUTTON'},
    {name:'TOUCHABLEOPACITY'},
    {name:'VIEW'},
    {name:'PRESSABLE'},
    {name:'SCROLLVIEW'},
    {name:'SECTIONLIST'},
  

  ])
  const [refreshing,setRefrehing]=useState(false);
  
  const Items = ({ item }) => {

   
    return (
     <View>
      <Text>{item.name}</Text>
     </View>
    );
  };
  return(
    <SafeAreaView
    style={{flex:1,backgroundColor:"#ff7f50"}}
    >
      <View>
        <Text style={{
          textAlign:"center",
          backgroundColor:"#00ffff",
          fontSize:24,
          fontWeight:'bold',
          
          }}> MULTIPLE TASK USING REACT NATIVE </Text>
        </View>
        
<FlatList 
  data={Item}
  renderItem={({ item }) => (
    <View style={{
      margin: 10,
      borderRadius:20,
      backgroundColor: '#48d1cc',
      justifyContent: 'center',
      alignItems: 'center', 
      marginVertical:30
    }}>
      <Text style={{
        textAlign:'center',
        fontSize:30,
    }}>
       {item.name}</Text>
   
    </View>
  )}
  refreshing={refreshing}
  onRefresh={()=>{
    setItems([
      { name:"VIEW"},
      {name:'PRESSABLE'},
      {name:'SCROLLVIEW'},
      {name:'SECTIONLIST'},
    ]);
  }}
/>
  
</SafeAreaView>
  );
};
  const styles = StyleSheet.create({

  })
export default App;