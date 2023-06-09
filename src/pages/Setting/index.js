import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  CalendarBlank,
  IconUserDetail,
  MapPin,
  Password,
  Phone,
} from '../../assets';
import {Gap, Header} from '../../components';
import {
  dataRelawan,
  dataRelawanUpdatePassword,
} from '../../redux/action/setting';
import {cumatanggal, getData, showMessage} from '../../utils';
import {capitalizeFirstLetter} from '../../utils/firstCapital';

export default function Setting({navigation}) {
  const dispatch = useDispatch();
  const globalState = useSelector(
    state => state?.settingRelawanReducer?.setting,
  );
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    grepData();
  }, []);
  const [password, setPassword] = useState('');
  const grepData = useCallback(() => {
    getData('token').then(data => {
      dispatch(dataRelawan(data));
    });
  }, []);
  const refreshdata = useCallback(() => {
    setRefreshing(true);
    getData('token').then(data => {
      dispatch(dataRelawan(data));
    });
    setTimeout(() => {
      setRefreshing(false);
    }, 1);
  }, []);
  const onSubmit = () => {
    password?.length <= 5 && showMessage('Minimal password  6 digit', 'danger');
    password?.length >= 6 &&
      getData('token').then(data => {
        dispatch(dataRelawanUpdatePassword(data, password));
      });
    // REMOVE TOKEN
  };
  const DataProfile = () => {
    return (
      <>
        {/* Photo */}
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl onRefresh={refreshdata} refreshing={refreshing} />
          }
        >
          <View>
            <View style={styles.boxPhoto}>
              <View style={styles.icon}>
                <IconUserDetail />
              </View>
              <Gap height={10} />
              <Text style={styles.nama}>
                {globalState?.data?.nama &&
                  capitalizeFirstLetter(globalState?.data?.nama)}
              </Text>
              <Gap height={5} />
              <Text style={styles.nik}>{globalState?.data?.nik}</Text>
              <Gap height={5} />
              <Text style={styles.kecamatanTitle}>
                Koordinator{' '}
                {globalState?.data?.nik === 'KC' ? 'Kecamatan' : 'Desa'}
              </Text>
            </View>
          </View>
          {/* Photo */}

          {/* Information */}
          <View style={styles.boxInformation}>
            <View style={styles.boxData}>
              <Text style={styles.informasi}>Informasi</Text>
              {/* Tanggal Daftar */}
              <Gap height={25} />
              <View style={styles.boxFlexRow}>
                <View style={styles.boxFLexCenter}>
                  <CalendarBlank />
                </View>
                <Gap width={10} />
                <Text>
                  {' '}
                  {globalState?.data?.createdAt &&
                    cumatanggal(globalState?.data?.createdAt)}
                </Text>
              </View>
              <Gap height={25} />
              <View style={styles.boxFlexRow}>
                <View style={styles.boxFLexCenter}>
                  <Phone />
                </View>
                <Gap width={10} />
                <Text>
                  {globalState?.data?.hp ? globalState?.data?.hp : ''}
                </Text>
              </View>
              <Gap height={20} />
              <View style={styles.boxFlexRow}>
                <View style={styles.boxFLexCenter}>
                  <MapPin />
                </View>
                <Gap width={10} />
                <Text style={styles.alamat}>
                  {globalState?.data &&
                    `${globalState?.data?.alamat}, ${globalState?.data?.desa?.nama}, ${globalState?.data?.kecamatan?.nama}, ${globalState?.data?.kota?.nama}`}
                </Text>
              </View>
              <Gap height={30} />
              <View style={styles.line}></View>
              <Gap height={40} />

              <View style={styles.boxFlexRow}>
                <View style={styles.boxFLexCenter}>
                  <Password />
                </View>
                <Gap width={10} />

                <TextInputRN
                  placeholder="Masukan password baru"
                  style={styles.input}
                  secureTextEntry
                  onChangeText={value => setPassword(value)}
                />
              </View>

              <Gap height={30} />

              <View style={styles.boxFlexRow}>
                <View style={styles.boxFLexCenter}></View>
                <Gap width={35} />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onSubmit}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Updated Password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };
  return (
    <View style={styles.content}>
      <Header
        title="Setting "
        subTitle="Profile Relawan"
        onBack={() => navigation.goBack()}
      />
      {globalState?.data?.nama && <DataProfile />}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  boxButton: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
  boxPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#190636',
    minHeight: 150,
    paddingVertical: 25,
  },
  nama: {
    color: 'white',
    fontSize: 16,
  },
  kecamatanTitle: {
    color: 'white',
    fontSize: 12,
  },
  boxInformation: {
    padding: 5,
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#dddddd',
  },
  boxData: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#120426',
    padding: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
    flex: 1,
  },
  informasi: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 18,
  },
  nik: {
    color: 'white',
    fontSize: 10,
    backgroundColor: '#0EA137',
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  boxFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxFLexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
  },
  alamat: {
    paddingEnd: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 12,
    color: 'black',
    width: '90%',
  },
  line: {
    backgroundColor: '#D0D0D0',
    height: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'black',
    width: '90%',
    backgroundColor: '#0EA137',
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
});
