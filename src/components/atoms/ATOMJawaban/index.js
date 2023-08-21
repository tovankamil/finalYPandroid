import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Gap from '../Gap';

const ATOMJawaban = ({label, noParent, data, isChecked, keydata}) => {
  const dispatch = useDispatch();
  console.log('dataQuestion', data);
  const cek = id => {
    data.map((dataindex, index) => {
      dataindex.isChecked = false;
    });
    data[keydata].isChecked = true;
    // dispatch(setLoadingJK(dataQA));
    // dispatch({
    //   type: 'SET_NEWJK',
    //   value: dataQA,
    // });
  };

  return (
    <View>
      <Gap height={2} />
      <View style={styles.detailPertanyaan}>
        <View style={styles.boxContainer}>
          <CheckBox
            key={keydata}
            value={isChecked}
            style={styles.checkbox}
            onValueChange={cek}
            tintColors={{true: 'green', false: '#ddd'}}
          />
          <Text>{data.namaJawaban}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ATOMJawaban);
const styles = StyleSheet.create({
  detailPertanyaan: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: '#020202',
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
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
