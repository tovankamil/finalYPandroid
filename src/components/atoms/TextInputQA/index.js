import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import Gap from '../Gap';

const TextInputQA = ({placeholder, label, numeric, sublabel, ...restProps}) => {
  return (
    <View style={styles.boxContainer}>
      <TextInputRN
        placeholder={placeholder}
        style={styles.input}
        {...restProps}
        keyboardType={numeric}
      />
    </View>
  );
};

export default React.memo(TextInputQA);

const styles = StyleSheet.create({
  boxContainer: {
    width: '50%',
  },
  wajibdiisi: {
    color: 'red',
    fontSize: 10,
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 0,
    paddingHorizontal: 12,
    color: 'black',
  },
});
