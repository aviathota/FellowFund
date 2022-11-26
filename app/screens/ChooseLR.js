import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const ChooseLR = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Image style={styles.flr} source={require('../assets/grn_flair.png')}></Image>
            <Text style={styles.titletx}>Let's get you signed in!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Image style={styles.nxtbut1} source={require('../assets/su_3.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.spacer}>xddFishing</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Image style={styles.nxtbut2} source={require('../assets/su_4.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F2EF",
        justifyContent: "center",
        alignContent: "center",
    }, spacer: {
        color: "#F0F2EF",
        padding: 1,
    }, flr: {
        position: "absolute",
        top: 0,
        left: 0,
    }, nxtbut1: {
        justifyContent: "flex-end",
        alignSelf: "center",
        alignContent: "center",
    }, nxtbut2: {
        justifyContent: "flex-end",
        alignSelf: "center",
        alignContent: "center",
    }, titletx: {
        textAlign: "center",
        color: "#302F2F",
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "bold",
        justifyContent: "flex-end",
        paddingBottom: 320,
    }
})

export default ChooseLR;