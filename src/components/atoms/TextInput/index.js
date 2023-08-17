import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import Gap from '../Gap';

const TextInput = ({placeholder, label, numeric, sublabel, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>
        {label} <Gap width={2} />
        {sublabel && <Text style={styles.wajibdiisi}>{sublabel}</Text>}
      </Text>
      <TextInputRN
        placeholder={placeholder}
        style={styles.input}
        {...restProps}
        keyboardType={numeric}
      />
    </View>
  );
};

export default React.memo(TextInput);

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 12,
    color: 'black',
  },
});
