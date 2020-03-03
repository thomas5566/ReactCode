import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const myname = <Text>Thomas5566GB</Text>
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!!</Text>
            <Text style={styles.nameSize}>My name is {myname}</Text>
        </View>
    ); 
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameSize: {
        fontSize: 20
    }
});

export default ComponentsScreen;