import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import {
	Entypo,
	AntDesign,
	MaterialCommunityIcons
} from '@expo/vector-icons'
import Avatar from './Avatar'
const Post = () => {
  return (
    <View style={styles.Container}>
				<View style={styles.Header}>
					<View style={styles.Row}>
						<Avatar
							source={require('../assets/user1.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<Text style={styles.Text}>Luffy</Text>
							<View style={styles.Row}>
								<Text style={styles.Time}>1 giờ</Text>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</View>
						</View>
					</View>
					<Entypo
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
				</View>
				<Text style={styles.Text}>
					Crie na prática uma aplicação utilizando NextJS,
					ReactJS, React Native e Strap Api.
				</Text>
				<Image style={styles.Photo} source={require('../assets/user1.jpg')} />
				<View style={styles.Footer}>
					<View style={styles.FooterCount}>
						<View style={styles.Row}>
							<View style={styles.IconCount}>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</View>
							<Text style={styles.TextCount}>88 likes</Text>
						</View>
						<Text style={styles.TextCount}>2k comments</Text>
					</View>

					<View style={styles.Separator} />
					<View style={styles.FooterMenu}>
						<TouchableOpacity style={styles.Button}>
							<View style={styles.Icon}>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</View>
							<Text style={styles.Text}>Like</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.Button}>
							<View style={styles.Icon}>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</View>
							<Text>Comment</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.Button}>
							<View style={styles.Icon}>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</View>
							<Text style={styles.Text}>Share</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.BottomDivider}/>
			</View>
)}
export default Post

const styles = StyleSheet.create({
    Container:{
      flex:1
    },
   Header:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
	marginTop:6,
	paddingLeft:11,
    paddingRight:11
   },
   Row:{
    alignItems:'center',
    flexDirection:'row'
   },
   User:{
    fontSize:12,
    fontWeight:'bold',
    color:'#222121'
   },
   Time:{
    fontSize:9,
    color:'#747476'
   },
   Post:{
    fontSize:12,
    color:'#222121',
    lineHeight:16,
    paddingLeft:11,
    paddingRight:11
   },
   Photo:{
    marginTop:9,
    width:'100%',
    height:300,
	resizeMode:'contain'
   },
   Footer:{
    paddingLeft:11,
    paddingRight:11
   },
   FooterCount:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:9,
    paddingBottom:9
   },
   IconCount:{
	backgroundColor: '#1878f3',
	width: 20,
	height: 20,
	bordeRadius: 10,
	alignItems: 'center',
	justifyContent: 'center',
	marginRight: 6,
   },
   TextCount :{
	fontSize: 11,
	color: '#424040',
   },
   Separator :{
     width: '100%',
     height: 4,
     backgroundColor: '#f9f9f9',
   },
   FooterMenu :{
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingTop:9,
     paddingBottom:9
    },
    Button:{
	 flexDirection: 'row',
   },
    Icon:{
    marginRight:6
},
    Text:{
	fontSize:12,
	color: '#424040',
 },
    BottomDivider :{
	width: '100%',
	height: 9,
	backgroundColor: '#f0f2f5',
}})