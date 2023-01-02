import React from 'react'
import {Image,StyleSheet, View } from 'react-native'
const Avatar = (props) =>{
    return(
        <View style={styles.Container}>
            <Image style={props.big?styles.User1:styles.User} source={props.source} story={props.story}/>
            {props.online && <View style={styles.UserActive}/>}
        </View>
    )
}
export default Avatar    
const styles= StyleSheet.create({
    Container:{
      position:'relative'
    },
    User:{
    width:40,
    height:40,
    borderRadius:20,
    borderColor: '#1777f2'
    },
    User1:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'#1777f2'
    },
    UserActive:{
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: '#4bcb1f',
        position: 'absolute',
        bottom: -2,
        right: -2,
        borderWidth: 2,
        borderColor: '#ffffff',
    }
})