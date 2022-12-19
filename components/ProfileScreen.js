import React, { cloneElement, useState } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, Button, Alert, TextInput } from "react-native";
import BigPic from '../assets/wallPP.jpg'
import SmallPic from '../assets/Luffy.jpg'
import PictureIC from '../assets/pic2_ic.png'
import CommentIC from '../assets/video_ic.png'

const Separator = () => (
    <View style={styles.separator} />
)

const BigSeparator = () => (
    <View style={styles.bigseparator} />
)

export default function ProfileScreen({ }) {

    const [postText, onChangePostText] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>ProfileScreen</Text>
            </View>
            <Separator />
            <Image style={styles.bigPic} source={BigPic} />
            <View style={styles.imgBackground}>
                <Image style={styles.smallPic} source={SmallPic} />
            </View>
            <Text style={styles.name}>Nguyễn Đức Minh</Text>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <View style={styles.bgButton1}>
                    <Button
                        title="Chỉnh sửa thông tin"
                        color="#fff" />
                </View>
                <View style={styles.bgButton2}>
                    <Button
                        title="..."
                        color="#000" />
                </View>
            </View>
            <View style={styles.detailsView}>
                <Text style={{ fontSize: 20 }}>Chi tiết</Text>
                <View style={styles.details}>
                    <Text style={styles.detailsLine}>Đã làm việc tại BKAI</Text>
                    <Text style={styles.detailsLine}>Tham gia vào 24 tháng 12 năm 2019</Text>
                    <Text style={styles.detailsLine}>Mối quan hệ: Đã kết hôn</Text>
                </View>
            </View>
            <Separator />
            <View style={{ marginStart: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 20 }}>Bài viết</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image
                        style={styles.littlePic}
                        source={SmallPic} />
                    <TextInput
                        style={styles.input}
                        onKeyPress={onPress}
                        onChangeText={onChangePostText}
                        value={postText}
                        placeholder='   Hello world!' />
                </View>
            </View>
            <BigSeparator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
    },
    separator: {
        marginTop: 10,
        marginHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bigseparator: {
        marginTop: 10,
        borderBottomWidth: 10,
        borderBottomColor: '#c1c1c1',
    },
    bigPic: {
        height: 200,
        width: '100%',
    },
    smallPic: {
        height: 160,
        width: 160,
        borderRadius: 200,
        alignSelf: "center",
        marginTop: 5,
    },
    imgBackground: {
        height: 170,
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 200,
        position: 'absolute',
        marginStart: 20,
        marginTop: 150,
        borderColor: '#endregion',
    },
    name: {
        marginTop: 90,
        marginStart: 25,
        fontSize: 26,
        fontWeight: '500',
    },
    bgButton1: {
        flex: 5,
        marginTop: 10,
        backgroundColor: '#0084ff',
        marginStart: 25,
        borderRadius: 10,
    },
    bgButton2: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#e4e6eb',
        marginStart: 10,
        marginEnd: 10,
        borderRadius: 10,
    },
    detailsView: {
        marginStart: 10,
        marginTop: 10,
    },
    details: {
        marginStart: 10,
    },
    detailsLine: {
        marginTop: 2,
        fontSize: 16,
    },
    littlePic: {
        width: 48,
        height: 48,
        borderRadius: 100,
    },
    input: {
        alignSelf: "center",
        height: 36,
        width: 260,
        borderWidth: 1,
        marginStart: 20,
        borderRadius: 20,
        borderColor: '#c1c1c1'
    },
    ic: {
        height: 30,
        width: 30,
        marginHorizontal: 40,
    },
    icView: {
        justifyContent: "center",
    }
})
