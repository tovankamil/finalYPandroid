import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ICNext, UserKoresponden} from '../../../assets';

const AtomListDataKoresponden = ({onPress, value}) => {
  const LisData = () => {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.icon}>
            <UserKoresponden />
          </View>
          <View style={styles.data}>
            <Text style={styles.nama}>{value?.nama} </Text>
            <Text style={styles.alamat}>
              {`${value?.usia} Tahun ,${value?.nama_kota}-${value?.nama_kecamatan}`}{' '}
            </Text>
          </View>
        </View>
        <ICNext />
      </View>
    );
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.89}>
      {value && <LisData />}
    </TouchableOpacity>
  );
};

export default AtomListDataKoresponden;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingHorizontal: 23,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.81,
    elevation: 12,
  },
  box: {
    backgroundColor: '#ffffff',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  data: {
    marginLeft: 14,
    maxWidth: '81%',
  },
  nama: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
    lineHeight: 25,
  },
  alamat: {
    fontSize: 11,
    fontFamily: 'Poppins-reguler',
    fontWeight: 'bold',
    color: '#01B433',
    paddingLeft: 3,
  },
});
