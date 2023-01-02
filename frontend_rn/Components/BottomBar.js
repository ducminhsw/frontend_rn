import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, MaterialIcons  } from '@expo/vector-icons'; 
/*
<Entypo name="home" size={26} color="black" />
<MaterialIcons name="group" size={26} color="black"/>
<Entypo name="bell" size={26} color="black"
<Entypo name="menu" size={26} color="black" /> />
*/
const BottomBar = () => {
  return (
    <View style={styles.Row}>
       <TouchableOpacity style={styles.ToolContainer}>
       <Entypo name="home" size={26}  color='#3a86e9'/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.ToolContainer}>
       <MaterialIcons name="group" size={30} color="black"/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.ToolContainer}>
       <Entypo name="bell" size={26} color="black"/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.ToolContainer}>
       <Entypo name="menu" size={26} color="black" />
       </TouchableOpacity>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    Row:{
        flexDirection:'row',
        width:'100%'
    },
    ToolContainer:{
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:8
    },
    
})