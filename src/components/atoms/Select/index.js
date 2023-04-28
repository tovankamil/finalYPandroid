import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch} from 'react-redux';
import {dataDesa, dataKecamatan, dataKecamatan2} from '../../../redux/action';

const Select = ({
  label,
  value,
  onSelectChange,
  namaSelect,
  datax,
  koresponden,
}) => {
  const Pilih = () => {
    const dispatch = useDispatch();
    if (namaSelect === 'Pilih Kota') {
      if (
        typeof value !== 'undefined' &&
        Object.keys(value).length == 0 &&
        namaSelect === 'Pilih Kota'
      ) {
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              <Picker.Item label="Pilih Kota" value={0} key={0} />
              {datax?.data &&
                datax?.data?.map((d, i) => {
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
        );
      } else {
        value && dispatch(dataKecamatan2({kota: value.split('#')[0]}));
        value &&
          dispatch({
            type: 'SET_KOTA',
            value: {kota: value.split('#')[0], nama_kota: value.split('#')[1]},
          });
        koresponden &&
          dispatch({type: 'SET_KOTA_KORESPONDEN', value: value.split('#')[1]});
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              {datax?.data &&
                datax?.data?.map((d, i) => {
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
        );
      }
    }

    if (namaSelect === 'Pilih Kecamatan') {
      if (
        typeof datax !== 'undefined' &&
        Object.keys(datax).length == 0 &&
        namaSelect === 'Pilih Kecamatan'
      ) {
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
            </Picker>
          </View>
        );
      } else {
        value && dispatch(dataDesa({kecamatan: value.split('#')[0]}));
        value &&
          dispatch({
            type: 'SET_KECAMATAN',
            value: {
              kecamatan: value.split('#')[0],
              nama_kecamatan: value.split('#')[1],
            },
          });
        koresponden &&
          dispatch({
            type: 'SET_KECAMATAN_KORESPONDEN',
            value: value.split('#')[1],
          });
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
              {datax?.data &&
                datax?.data?.map((d, i) => {
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
        );
      }
    }

    if (namaSelect === 'Pilih Desa') {
      if (
        typeof datax !== 'undefined' &&
        Object.keys(datax).length == 0 &&
        namaSelect === 'Pilih Desa'
      ) {
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              <Picker.Item label="Pilih Desa" value={0} key={0} />
            </Picker>
          </View>
        );
      } else {
        dispatch({
          type: 'SET_DESA',
          value: {
            desa: value.split('#')[0],
            nama_desa: value.split('#')[1],
          },
        });
        koresponden &&
          dispatch({type: 'SET_DESA_KORESPONDEN', value: value.split('#')[1]});
        return (
          <View style={styles.input}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onSelectChange(itemValue)}
              style={styles.label}
            >
              <Picker.Item label="Pilih Desa" value={0} key={0} />
              {datax?.data &&
                datax?.data?.map((d, i) => {
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
        );
      }
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {Pilih()}
    </View>
  );
};

export default React.memo(Select);

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
