import CheckBox from '@react-native-community/checkbox';
import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {capitalizeFirstLetter} from '../../../../utils/firstCapital';
import {TextInput} from '../../../atoms';

const CBAttributeLainnya = ({label}) => {
  const [isSelected, setSelection] = useState(false);
  const [lainnya, setLainnya] = useState('');
  const dispatch = useDispatch();

  const datalain = useCallback(
    value => {
      setLainnya(value);
    },
    [lainnya],
  );
  if (!isSelected) {
    let data = {
      lainnya: '',
    };
    dispatch({type: 'SET_ATTRIBUTE_LAINNYA', value: data});
  } else {
    let data = {
      lainnya,
    };
    dispatch({type: 'SET_ATTRIBUTE_LAINNYA', value: data});
  }

  const cek = useCallback(() => {
    setSelection(prev => !prev);
  }, [isSelected]);
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <CheckBox
          value={isSelected}
          onValueChange={cek}
          style={styles.checkbox}
          tintColors={{true: 'green', false: '#ddd'}}
        />
        <Text style={styles.labeldata}>{capitalizeFirstLetter(label)}</Text>
      </View>
      {isSelected && <Attr lainnya={lainnya} datalain={datalain} />}
    </View>
  );
};

export default CBAttributeLainnya;
const Attr = ({lainnya, datalain}) => {
  return (
    <View style={styles.lainnya}>
      <TextInput
        label=""
        placeholder="Masukan Attribute Lainnya"
        value={lainnya}
        onChangeText={datalain}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
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
  lainnya: {
    marginTop: -25,
    color: 'black',
    paddingLeft: 35,
  },
});
