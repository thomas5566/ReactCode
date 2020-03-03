import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>5566gb</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="GO to Components Demo"
      />
      <Button
        title="Go To Kist Demo"
        onPress={() => navigation.navigate('List')} 
      />
      <Button
        title="Go To ImageScreen"
        onPress={() => navigation.navigate('Image')} 
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')} 
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')} 
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate('Square')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

