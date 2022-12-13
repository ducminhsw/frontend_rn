import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeChatTabs from "../navigations/HomeChatTabs";
import { Button, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
// import HeaderButtons from "../components/HeaderButtons";
import ChatView from "../screens/ChatView";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const Navigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={
                        ({navigation}) => ({
                            title: 'Inbox',
                            // headerRight: () => {
                            //     return <HeaderButtons/>
                            // },
                            headerLeft: () => {
                                return <Image style={styles.image} source={
                                    {
                                        uri: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                                    }
                                } />
                            },
                            headerLeftContainerStyle:{
                                paddingHorizontal: 10
                            },
                            headerRightContainerStyle:{
                                paddingHorizontal: 10
                            }
                        })
                    }
                    name="Home"
                    component={HomeChatTabs}
                />
                <Stack.Screen
                    name="ChatView"
                    component={ChatView}
                    options={
                        ({navigation, route}) => ({
                            title: null,
                            headerRight: () => {
                                return (
                                    <View style={styles.chatViewHeaderRightContainer}>
                                        {/* <TouchableOpacity style={styles.call}>
                                            <Ionicons name="ios-call" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.video}>
                                            <FontAwesome name="video-camera" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity> */}
                                        <TouchableOpacity style={styles.info}>
                                            <FontAwesome5 name="info-circle" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            },
                            headerLeft: () => {
                                return (
                                    <View style={styles.chatViewHeaderLeftContainer}>
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                            <Ionicons name="md-arrow-back" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                        <View style={styles.chatViewProPicContainer}>
                                            <Image style={styles.profilePic} source={{ uri: 'https://i.imgur.com/6oU7JoG.jpg' }} />
                                        </View>
                                        <View>
                                            <Text style={styles.name}>Name</Text>
                                            {/* <Text style={styles.lastOnlineText}>Active 12 hour ago</Text> */}
                                        </View>

                                    </View>
                                )
                            },
                            headerLeftContainerStyle:{
                                paddingHorizontal: 10
                            }
                        })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
    image:{
        width: responsiveHeight(5),
        height: responsiveHeight(5),
        borderRadius: 200
    },
    profilePic: {
        borderRadius: 200,
        width: responsiveHeight(5),
        height: responsiveHeight(5),
    },
    chatViewHeaderLeftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    chatViewProPicContainer: {
        padding: 10
    },
    chatViewHeaderRightContainer: {
        flexDirection: 'row'
    },
    info: {
        paddingHorizontal: 10
    }
    // lastOnlineText: {
    //     fontSize: responsiveFontSize(1.5),
    //     color: 'gray'
    // },
    // call: {
    //     paddingHorizontal: 10
    // },
    // video: {
    //     paddingHorizontal: 10
    // },
})