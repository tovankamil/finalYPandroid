import {Picker} from '@react-native-community/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {dataDesa, dataKecamatan2} from '../../../redux/action';

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
        value &&
          dispatch(
            dataKecamatan2({kota: value?.length > 0 && value.split('#')[0]}),
          );
        value &&
          dispatch({
            type: 'SET_KOTA',
            value: {
              kota: value?.length > 0 && value.split('#')[0],
              nama_kota: value?.length > 0 && value.split('#')[1],
            },
          });
        koresponden &&
          dispatch({
            type: 'SET_KOTA_KORESPONDEN',
            value: {
              kota: value?.length > 0 && value.split('#')[0],
              nama_kota: value?.length > 0 && value.split('#')[1],
            },
          });
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
        value &&
          dispatch(
            dataDesa({kecamatan: value?.length > 0 && value.split('#')[0]}),
          );
        value == 0 && dispatch(dataDesa({type: 'LIST_DATA_DESA_RESET'}));
        value &&
          dispatch({
            type: 'SET_KECAMATAN',
            value: {
              kecamatan: value?.length > 0 && value.split('#')[0],
              nama_kecamatan: value?.length > 0 && value.split('#')[1],
            },
          });
        koresponden &&
          dispatch({
            type: 'SET_KECAMATAN_KORESPONDEN',
            value: {
              kecamatan: value?.length > 0 && value.split('#')[0],
              nama_kecamatan: value?.length > 0 && value.split('#')[1],
            },
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
            desa: value?.length > 0 && value.split('#')[0],
            nama_desa: value?.length > 0 && value.split('#')[1],
          },
        });
        koresponden &&
          dispatch({
            type: 'SET_DESA_KORESPONDEN',
            value: {
              desa: value?.length > 0 && value.split('#')[0],
              nama_desa: value?.length > 0 && value.split('#')[1],
            },
          });
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
