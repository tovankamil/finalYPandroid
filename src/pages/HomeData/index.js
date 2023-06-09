import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {BarChart} from 'react-native-gifted-charts';
import {useDispatch, useSelector} from 'react-redux';
import {
  ICKELUAR,
  ICPKORESPONDEN,
  ICPROFILE,
  ICSETTING,
  ICUser,
} from '../../assets';
import {Gap} from '../../components';
import {dataTopKota} from '../../redux/action/topkota';
import {getData, removeData} from '../../utils';
import {capitalizeFirstLetter} from '../../utils/firstCapital';
const HomeData = ({navigation}) => {
  const dispatch = useDispatch();
  const globalTopkota = useSelector(state => state.topKotaReducer);
  const [user, setUser] = useState({});
  const [bardata, setBardata] = useState({});

  useEffect(() => {
    getData('userProfile').then(data => {
      setUser(data);
    });
    grepTopKota();
  }, []);

  const grepTopKota = () => {
    getData('token').then(data => {
      dispatch(dataTopKota(data));
    });
  };
  const onSubmit = () => {
    removeData('token');
    removeData('userProfile');
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  };
  const barData = [];
  let datafrontColor = ['blue', 'green', 'orange', 'red'];
  globalTopkota?.data?.data &&
    globalTopkota?.data?.data.map((d, i) => {
      let dataKota = {
        value: globalTopkota?.data.data[i].count,
        label: globalTopkota?.data.data[i]._id[0].nama,
        frontColor: datafrontColor[i],
        sideColor: '#23A7F3',
        topColor: '#92e6f6',
      };
      barData.push(dataKota);
    });

  return (
    <View style={styles.page}>
      <View style={styles.topBoxProfile}>
        <ICUser />
        <View style={styles.boxName}>
          <Text style={styles.name}>
            Hi,
            {user &&
              user?.nama?.length > 0 &&
              capitalizeFirstLetter(user?.nama)}
          </Text>
          <Gap height={1} />
          <Text style={styles.subtitle}>Relawan</Text>
        </View>
      </View>

      <Gap height={20} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <Text style={styles.labelTopKota}>
            4 kecamatan responden terbanyak
          </Text>
        </View>
        <BarChart
          width={360}
          xAxisColor={'#c919ff'}
          rotateLabel
          isAnimated
          isThreeD
          spacing={65}
          labelWidth={20}
          barWidth={20}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          disableScroll={true}
          autoShiftLabels
          noOfSections={4}
        />
      </View>
      <Gap height={110} />
      <View style={styles.containerMenu}>
        {/* <TouchableOpacity
          style={styles.borderData}
          onPress={() => navigation.navigate('DataKoresponden')}
        >
          <Image source={ICPKORESPONDEN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderData}
          // onPress={() => navigation.navigate('DataKoresponden')}
        >
          <Image source={ICPROFILE} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Gap height={35} />
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.borderData}
          onPress={() => navigation.navigate('Setting')}
        >
          <Image source={ICSETTING} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderData} onPress={onSubmit}>
          <Image source={ICKELUAR} style={styles.image} />
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.containerMenu}>
        <Gap height={5} />
        <MenuHome
          title="Data Koresponden"
          onPress={() => navigation.navigate('DataKoresponden')}
        />
        <Gap height={5} />
        <MenuHome
          title="Data Relawan"
          onPress={() => navigation.navigate('home')}
        />
        <Gap height={5} />
        <MenuHome title="Profile" onPress={() => navigation.navigate('home')} />

        <Gap height={5} />
        <MenuHome title="Keluar" onPress={onSubmit} />
      </View> */}
    </View>
  );
};
export default HomeData;
const styles = StyleSheet.create({
  labelTopKota: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  borderData: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.81,
    elevation: 12,
  },
  page: {flex: 1},
  boxName: {
    padding: 15,
    backgroundColor: '#153606',
  },
  containerMenu: {
    paddingHorizontal: 25,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topBoxProfile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#153606',
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-medium',
    color: '#D0D0D0',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 10,
    color: '#918D8D',
  },
  image: {
    width: 93,
    height: 105,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});
