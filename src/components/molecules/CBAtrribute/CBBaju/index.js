import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {capitalizeFirstLetter} from '../../../../utils/firstCapital';

const CBBaju = ({label, isChecked, no, data}) => {
  console.log(data);
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();

  const cek = id => {
    setSelection(prev => !prev);

    let temp = data.findIndex(d => d.id == no);

    console.log('Before Object Updation: ', data[temp]);
    data[temp].isChecked = !data[temp].isChecked;

    console.log('after Object Updation: ', data[temp]);

    dispatch({
      type: 'SET_ALL_ATTRIBUTE',
      value: data,
    });
    // if (label === 'brosur') {
    //   if (!isSelected) {
    //     let data = {
    //       brosur: 'iya',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_BROSUR', value: data});
    //   } else {
    //     let data = {
    //       brosur: '',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_BROSUR', value: data});
    //   }
    // }

    // if (label === 'spanduk') {
    //   if (!isSelected) {
    //     let data = {
    //       spanduk: 'iya',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_SPANDUK', value: data});
    //   } else {
    //     let data = {
    //       spanduk: '',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_SPANDUK', value: data});
    //   }
    // }

    // if (label === 'kaos') {
    //   if (!isSelected) {
    //     let data = {
    //       baju: 'iya',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_BAJU', value: data});
    //   } else {
    //     let data = {
    //       baju: '',
    //     };
    //     dispatch({type: 'SET_ATTRIBUTE_BAJU', value: data});
    //   }
    // }
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
