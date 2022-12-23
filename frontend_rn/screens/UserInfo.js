import { AntDesign, FontAwesome, Zocial } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

export default function UserInfo(){

    const [modelVisibility, setModelVisibility] = useState(false)

    const onPressHandler = () => {
        setModelVisibility(true)
    }

    return (
        <Modal
                visible={modelVisibility}
                transparent
            >
                <View style={styles.model}>
                    {/* {setModelVisibility && <StatusBar backgroundColor="rgba(52, 52, 52, 0.5)"/>} */}
                    <AntDesign onPress={() => setModelVisibility(false)} style={styles.close} name="close" size={30} color="black" />
                    <View style={styles.content}>
                        {/* <View style={styles.topContainer}>
                            <Zocial style={styles.icon} name="call" size={responsiveFontSize(3)} color="#006AFF" />
                            <FontAwesome style={styles.icon} name="video-camera" size={responsiveFontSize(3)} color="#006AFF" />
                        </View> */}
                        <View style={styles.centerContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: 'https://www.foleon.com/hubfs/Images/Team%20Images/sean-filidis.png' }} />
                            </View>
                            <Text style={styles.name}>Le Minh</Text>
                            {/* <Text style={styles.facebookTitle}>Facebook</Text>
                            <Text style={styles.caption}>You're friend on Facebok</Text> */}
                        </View>
                        <TouchableOpacity style={styles.bottomBtn}>
                            <Text style={styles.btnText}>DELETE</Text>
                            <Text style={styles.btnText}>BLOCK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    model: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200,
        // paddingBottom : 20,
    },
    // topContainer: {
    //     height: '20%',
    //     justifyContent: 'flex-end',
    //     flexDirection : 'row',
    //     padding : 10
    // },
    icon: {
        paddingHorizontal: 10
    },
    centerContainer: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    bottomBtn: {
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#006AFF'
    },
    btnText: {
        color : 'white',
        fontSize : 18
    },
    name: {
        fontSize : 20
    },
    facebookTitle: {
        fontSize : 13
    },
    caption: {
        color : 'gray',
        fontSize : 14
    },
    close : {
        width : 35,
        height : 35,
        backgroundColor : 'transparent',
        flexDirection : 'column',
        position: 'absolute',
        top : 20,
        left : 20,
        color : 'white'
    },
    imageContainer : {
        paddingBottom : 20
    }
})