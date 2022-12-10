import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import Logo from '../assets/Facebook_f_logo_(2019).svg.png'
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');

    const navi = useNavigation();

    const onRulePressed = () => {
        console.warn('Ok')
    };
    const onReturnPressed = () => {
        navi.navigate('SignIn')
    };
    const onNextPressed = () => {

    }
    
    return (
        <SafeAreaView>
            <Text style={styles.header}>Đăng ký tài khoản</Text>
            <Image 
                source = {Logo} 
                resizeMode = "contain"
                style={styles.logo}
            />
            <View style={styles.form}>
                <CustomInput
                    placeholder="Tên"
                    value={firstName}
                    setValue={setFirstName}
                />
                <CustomInput
                    placeholder="Họ"
                    value={lastName}
                    setValue={setLastName}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Mật khẩu"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Nhập lại mật khẩu"
                    value={passwordRe}
                    setValue={setPasswordRe}
                    secureTextEntry
                />
            </View>
            <Text style={styles.birthdayText}>Sinh nhật</Text>
            <View style={styles.placeholder}>
                <Button title="Date placeholder"/>
            </View>
            <View style={styles.rule}>
                <Text style={styles.ruleText}>
                    Nhấn xác nhận đồng nghĩa với bạn đã đọc và đồng ý với{' '}
                    <Text style={styles.link} onPress={onRulePressed}>điều khoản dịch vụ{' '}</Text>
                    và{' '}
                    <Text style={styles.link}>chính sách bảo mật{' '}</Text>
                    của chúng tôi.
                </Text>
            </View>
            <View style={styles.naviButton}>
                <CustomButton
                    text="Quay lại"
                    onPress={onReturnPressed}
                    type="LEFT"
                />
                <CustomButton
                    text="Xác nhận"
                    onPress={onNextPressed}
                    type="RIGHT"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    link: {
        color: 'blue', 
        fontStyle: 'italic'
    },
    logo: {
        width: '30%',
        maxWidth: 300,
        height: 100,
        marginHorizontal: '35%',
        marginTop: 15,
    },
    form: {
        marginTop: '10%'
    },
    naviButton: {
        flexDirection: 'row',
    },
    birthdayText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    rule: {
        marginHorizontal: '5%',
        textAlign: 'center'
    },
    ruleText: {
        fontSize: 15,
        alignSelf: 'center',
    },
    placeholder: {
        width: '90%',
        marginHorizontal: '5%',
    }
});

export default SignUp;