import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "../components/SignInScreen";
import SignUp from "../components/SignUpScreen";

const Stack = createNativeStackNavigator();

const Navigation = (navi) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;