import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const BoxScreen = () => {
    return(
        /*<View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>*/
        <View style={styles.parenStyle}>
            <Text style={styles.viewOneStyle} />
                <View style={styles.viewTwoParent}>
                    <Text style={styles.viewTwoStyle} />
                </View>
            <Text style={styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    /*viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'stretch',
        //flexDirection: 'row',
        height: 200,
        //justifyContent: "space-evenly",
        //alignSelf: 'center'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //margin: 20
        //flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
        
        //margin: 20
        //flex: 4,
        //alignSelf: 'flex-end'
        //position: 'absolute',
        //bottom: 10


        //position: 'absolute',
        //top: 0,
        //right: 0,
        //bottom: 0,
        //left: 0,
        //上面五個屬性 可以合成下面簡短屬性
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //margin: 20
        //flex: 1
    }*/
    parenStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //way one
        //marginTop: 50,
        //way tew
        //alignSelf: 'flex-end'
        //way three
        //top: 50
    },
    viewTwoParent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }

});

export default BoxScreen;