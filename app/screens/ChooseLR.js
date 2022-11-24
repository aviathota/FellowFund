import React from 'react';
import { StyleSheet, View, Image } from "react-native";

const ChooseLR = () => {
    return (
        <View style={styles.background}>
            <Image style={styles.flr} source={require('../assets/grn_flair.png')}></Image>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F2EF",
        justifyContent: "center",
        alignContent: "center",
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

export default ChooseLR;