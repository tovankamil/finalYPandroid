import {Picker} from '@react-native-community/picker';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../..';
import {dataKecamatan2} from '../../../redux/action';
const DesaResponden = ({navigation}) => {
  const listdesaReducer = useSelector(state => state?.listdesa);
  console.log('listdesaReducer', listdesaReducer);

  const dispatch = useDispatch();

  const submit = value => {
    console.log('value', value);

    dispatch({
      type: 'NEW_DATA_DESA',
      value: {
        desa: value.split('#')[0],
        nama_desa: value,
      },
    });
  };

  return (
    <>
      <Text style={styles.label}> Desa</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={listdesaReducer?.nama_desa}
          onValueChange={itemValue => submit(itemValue)}
          style={styles.label}
        >
          <Picker.Item label="Pilih Desa" value={0} key={0} />
          {listdesaReducer?.data_desa?.data &&
            listdesaReducer?.data_desa?.data?.map((d, i) => {
              return (
                <Picker.Item
                  label={d.nama}
                  value={`${d._id}#${d.nama}`}
                  key={i}
                />
              );
            })}
        </Picker>
      </View>
    </>
  );
};

export default React.memo(DesaResponden);

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
