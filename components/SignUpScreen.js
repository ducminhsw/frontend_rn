import React, {useState, useNavigate} from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import Logo from '../assets/Facebook_f_logo_(2019).svg.png'

const SignUp = () => {
    const {firstName, setFirstName} = useState('');
    const {lastName, setLastName} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {passwordRe, setPasswordRe} = useState('');
    const {isChecked, setCheck} = useState(false);

    const onRulePressed = () => {
r
    };
    
    return (
        <View>
            <Text>Đăng ký tài khoản</Text>
            <Image 
                source = {Logo} 
                resizeMode = "contain" 
            />
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
            <Text>Sinh nhật</Text>
            <View>
                <CheckBox
                    value={isChecked}
                    onValueChange={setCheck}
                />
                <Text>
                    Tôi đồng ý với{' '}
                    <Text style={styles.link} onPress={onRulePressed}>điều khoản dịch vụ</Text>
                </Text>
            </View>
            <CustomButton/>
            <CustomButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue', 
    }
});