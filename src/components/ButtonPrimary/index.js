import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
const ButtonPrimary = ({bg, color, textData, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(bg)}>
        <Text style={styles.text(color)}> {textData} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
  }),
  text: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
