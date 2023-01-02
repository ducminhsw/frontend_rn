import React from 'react'
import {View,TextInput,StyleSheet } from 'react-native'
import Avatar from './Avatar'
const PersonalNewsFeed= () => {
	return (	
		<View style={styles.Container}>		
				<View style={styles.Row}>
					<Avatar source={require('../assets/user1.jpg')} online/>
					<TextInput style={styles.Input} placeholder="What's on your mind?" />
				</View>
				<View style={styles.Divider}></View>
		</View>
	)
}
export default PersonalNewsFeed
const styles= StyleSheet.create({
	Container:{
		width:'100%',
		flexDirection:'column',
	},
	Row:{
     flexDirection:'row',
	 background:'#ffffff',
	 alignItems:'center',
	 paddingLeft:8,
	 paddingTop:16,
	 paddingBottom:16
	},
	Input:{
		 marginLeft:8,
		 paddingLeft:16,
		 width:300,
		 height:50,
		 borderWidth:2,
		 borderRadius:20,
		 borderColor:'#737272'
	},
	Divider:{
		width: '100%',
		  height: 5,
		  backgroundColor: '#f0f2f5'
		}
})
