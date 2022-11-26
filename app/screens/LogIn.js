import React from 'react';
import { StyleSheet, View, Text } from "react-native"

function LogIn(props) {
    return (
        <View style={styles.background}>
            <Text> sup lol </Text>
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
    }
})

export default LogIn;