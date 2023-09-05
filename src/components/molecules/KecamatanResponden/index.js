import {Picker} from '@react-native-community/picker';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataDesa} from '../../../redux/action';
const KecamatanResponden = ({navigation}) => {
  const listkecamatan = useSelector(state => state?.listkecamatan);
  const globalState = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'RESET_NEW_DATA_KECAMATAN'});

    return () => {};
  }, [globalState.successinput]);
  const submit = value => {
    dispatch(
      dataDesa({
        kecamatan: value.split('#')[0],
      }),
    );
    dispatch({
      type: 'NEW_DATA_KECAMATAN',
      value: {
        kecamatan: value.split('#')[0],
        nama_kecamatan: value,
      },
    });
  };

  return (
    <>
      <Text style={styles.label}> Kecamatan</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={listkecamatan.nama_kecamatan}
          onValueChange={itemValue => submit(itemValue)}
          style={styles.label}
        >
          <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
          {listkecamatan?.data_kecamatan?.data &&
            listkecamatan?.data_kecamatan?.data?.map((d, i) => {
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

export default React.memo(KecamatanResponden);

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
