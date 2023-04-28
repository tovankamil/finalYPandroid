import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch} from 'react-redux';
import {dataKecamatan2} from '../../../redux/action';

const SelectKoresponden = ({label, value, onSelectChange, data}) => {
  console.log('data selecct', data);
  const dispatch = useDispatch();
  const Pilih = ({label, data, onSelectChange, value}) => {
    if (data?.data?.length == 0) {
      return (
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}
          style={styles.label}
        >
          <Picker.Item label="Pilih Kota" value={0} key={0} />
        </Picker>
      );
    } else {
      value && dispatch(dataKecamatan2({kota: value.split('#')[0]}));
      value &&
        dispatch({type: 'SET_KOTA_KORESPONDEN', value: value.split('#')[1]});

      return (
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}
          style={styles.label}
        >
          <Picker.Item label="Pilih Kota" value={0} key={0} />
          {data?.data?.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={value.nama}
                value={`${value._id}#${value.nama}`}
              />
            );
          })}
        </Picker>
      );
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Pilih
          label=""
          data={data}
          onSelectChange={onSelectChange}
          value={value}
        />
      </View>
    </View>
  );
};

export default React.memo(SelectKoresponden);

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
