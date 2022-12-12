import React, {useState} from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity } from "react-native";
import Logo from "../assets/Facebook_f_logo_(2019).svg.png";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);

    const onSignInPressed = () => {

    };
    const onForgotPasswordPressed = () => {

    };
    const onSignUpPressed = () => {

    };


    return (
        <SafeAreaView>
            <Image 
                source = {Logo} 
                style = {[styles.logo, {height: height * 0.3}]}
                resizeMode = "contain" 
            />
            <View style={styles.inputGroup}>
                <CustomInput 
                    placeholder="Email hoặc số điện thoại"
                    value={username}
                    setValue={setUsername}
                />
                <View style={styles.password}>
                    <CustomInput 
                        placeholder="Mật khẩu"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={secure}
                    />
                    <TouchableOpacity style={styles.visible} onPress={() => setSecure(!secure)}>
                        <Image source={require('../assets/visible.png')} style={{width: '100%', height: '100%', color: '#E8E8E8'}} resizeMode='contain'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.signInButtonGroup}>
                <CustomButton
                    text="Đăng nhập"
                    onPress={onSignInPressed}
                />
                <CustomButton
                    text="Quên mật khẩu?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />
            </View>
            <View
                style={styles.line}
            />
            <View style={styles.registerGroup}>
                <CustomButton
                    text="Tạo tài khoản mới"
                    onPress={onSignUpPressed}
                    type="SECONDARY"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '30%',
        maxWidth: 300,
        height: 100,
        marginHorizontal: '35%'
    },
    inputGroup: {
        marginVertical: '10%'
    },
    signInButtonGroup: {
        marginTop: '25%'
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '80%',
        marginLeft: '10%',
        marginTop: 10,
    },
    registerGroup: {
        marginVertical: 10,
    },
    visible: {
        height: 30,
        width: 25,
        position: 'absolute',
        right: '8%',
        alignSelf: 'center',
    },
    password: {
        flexDirection: 'row'
    }
})

export default SignIn;