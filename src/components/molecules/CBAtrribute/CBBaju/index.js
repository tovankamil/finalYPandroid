import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const CBBaju = ({label, no, data}) => {
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();

  const cek = id => {
    setSelection(prev => !prev);

    let temp = data.findIndex(d => d.id == no);

    data[temp].isChecked = !data[temp].isChecked;

    dispatch({
      type: 'SET_ALL_ATTRIBUTE',
      value: data,
    });
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={cek}
        style={styles.checkbox}
        tintColors={{true: 'green', false: '#ddd'}}
      />
      <Text style={styles.labeldata}>{label}</Text>
    </View>
  );
};

export default React.memo(CBBaju);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
