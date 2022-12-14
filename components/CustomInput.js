import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const CustomInput = props => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.setValue}
                style={styles.input}
                secureTextEntry={props.secureTextEntry} 
                editable={props.editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundcolor: 'white',
        width: '90%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: 10,
        marginVertical: 5,
        marginLeft: '5%'
    },
    input: {
        fontSize: 17
    }
});

export default CustomInput;