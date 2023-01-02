import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {Feather, MaterialCommunityIcons } from '@expo/vector-icons'
const TopBar = ()=>{
	return (
		<View style={styles.container} >
			<Text style={styles.appName}>Facebook</Text>
			<View style={styles.row}>
				<TouchableOpacity style={styles.btn}>
					<Feather name='search' size={23} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn}>
					<MaterialCommunityIcons name='facebook-messenger' size={23} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
export default TopBar
const styles=StyleSheet.create({
      container:{
        width: '100%',
        flexWrap:'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:16,
        paddingLeft:16
      },
      appName:{
        color: '#3a86e9',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.3
      },
      row: {
       flexDirection:'row' 
      },
      btn:{
         width:40,
         height:40,
         borderRadius: 21,
         backgroundColor:'#eeeeee',
         alignItems:'center',
         justifyContent:'center',
         marginLeft:16
      },
})