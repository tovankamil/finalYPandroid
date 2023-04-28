import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from '../../../../utils';
import {capitalizeFirstLetter} from '../../../../utils/firstCapital';

const CBBaju = ({label}) => {
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();

  const cek = () => {
    setSelection(prev => !prev);
    if (label === 'brosur') {
      if (!isSelected) {
        let data = {
          brosur: 'iya',
        };
        dispatch({type: 'SET_ATTRIBUTE_BROSUR', value: data});
      } else {
        let data = {
          brosur: '',
        };
        dispatch({type: 'SET_ATTRIBUTE_BROSUR', value: data});
      }
    }

    if (label === 'spanduk') {
      if (!isSelected) {
        let data = {
          spanduk: 'iya',
        };
        dispatch({type: 'SET_ATTRIBUTE_SPANDUK', value: data});
      } else {
        let data = {
          spanduk: '',
        };
        dispatch({type: 'SET_ATTRIBUTE_SPANDUK', value: data});
      }
    }

    if (label === 'baju') {
      if (!isSelected) {
        let data = {
          baju: 'iya',
        };
        dispatch({type: 'SET_ATTRIBUTE_BAJU', value: data});
      } else {
        let data = {
          baju: '',
        };
        dispatch({type: 'SET_ATTRIBUTE_BAJU', value: data});
      }
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={cek}
        style={styles.checkbox}
        tintColors={{true: 'green', false: '#ddd'}}
      />
      <Text style={styles.labeldata}>{capitalizeFirstLetter(label)}</Text>
    </View>
  );
};

export default CBBaju;

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
