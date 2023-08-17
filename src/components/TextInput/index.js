import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({placeholder, label, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        placeholder={placeholder}
        style={styles.input}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-reguler',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 5,
    color: 'black',
  },
});
