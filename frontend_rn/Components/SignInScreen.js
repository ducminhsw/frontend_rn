import React, {useState, useNavigate} from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "./assets/images/Facebook_f_logo_(2019).svg.png";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const SignIn = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const onSignInPressed = () => {
        fetch
        navigate('/show');
    };
    const onForgotPasswordPressed = () => {
        navigate('')
    };
    const onSignUpPressed = () => {
        navigate('/register')
    };


    return (
        <View>
            <Image 
                source = {Logo} 
                style = {[styles.logo, {height: height * 0.3}]}
                resizeMode = "contain" 
            />
            <CustomInput 
                placeholder="Email hoặc số điện thoại"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Mật khẩu"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton
                style={signInButton}
                text="Đăng nhập"
                onPress={onSignInPressed}
            />
            <CustomButton
                text="Quên mật khẩu"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
            />
            <CustomButton
                text="Tạo tài khoản mới"
                onPress={onSignUpPressed}
                type="SECONDARY"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100
    },
    signInButton: {
        marginTop: 30
    }
})

export default SignIn;