import React, {useState, useNavigate} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-date-picker'
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import Logo from '../assets/Facebook_f_logo_(2019).svg.png'

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');
    const [isChecked, setCheck] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const onRulePressed = () => {

    };
    const onReturnPressed = () => {

    };
    const onNextPressed = () => {

    }
    
    return (
        <View>
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
            <CustomButton text="Date placeholder" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <View style={styles.rule}>
                <Text style={styles.ruleText}>
                    Tôi đồng ý với{' '}
                    <Text style={styles.link} onPress={onRulePressed}>điều khoản dịch vụ</Text>
                </Text>
            </View>
            <View style={styles.naviButton}>
                <CustomButton
                    text="Quay lại"
                    onPress={onReturnPressed}
                    type="LEFT"
                />
                <CustomButton
                    text="Tiếp tục"
                    onPress={onNextPressed}
                    type="RIGHT"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        marginTop: '15%',
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
        marginVertical: '10%'
    },
    birthdayText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    rule: {
        marginHorizontal: '5%',
    },
    ruleText: {
        fontSize: 15,
    }
});

export default SignUp;