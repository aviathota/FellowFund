import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import ChooseLR from './ChooseLR';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Image style={styles.flr} source={require('../assets/grn_flair.png')}></Image>
            <Image style={styles.su_pic} source={require('../assets/su_1.png')}></Image>
            <Text style={styles.titletx}>Welcome to FellowFund!</Text>
            <Text style={styles.regtx} numberOfLines={3}>The quickest and easiest platform to send and request money with people you know.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseLR')}>
                <Image style={styles.nxtbut} source={require('../assets/su_2.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

function next() {
    return <ChooseLR />;
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F2EF",
        justifyContent: "center",
        alignContent: "center",
    }, titletx: {
        textAlign: "center",
        color: "#302F2F",
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "bold",
        justifyContent: "flex-end",
        paddingTop: 40,
        paddingBottom: 10,
    }, regtx: {
        textAlign: "center",
        color: "#302F2F",
        alignSelf: "center",
        width: "60%",
        fontFamily: "Avenir",
        fontSize: 12,
        justifyContent: "flex-end",
        paddingBottom: 40,
    }, su_pic: {
        justifyContent: "flex-end",
        alignSelf: "center",
        alignContent: "center",
        paddingBottom: 40
    }, flr: {
        position: "absolute",
        top: 0,
        left: 0,
    }, nxtbut: {
        justifyContent: "flex-end",
        alignSelf: "center",
        alignContent: "center",
        paddingTop: 40
    }
})

export default Welcome;