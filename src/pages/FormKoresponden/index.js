import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header} from '../../components';
import HomeTabSection from '../../components/molecules/HomeTabSection';
import {
  setLogout,
  setNikError,
  setTabindexinputkoresponden,
  signUpKorespondenAction,
} from '../../redux/action';
import {getData} from '../../utils';

const FormKoresponden = ({navigation}) => {
  const globalState = useSelector(state => state.formKorespondenReducer);
  const globalStateLogout = useSelector(state => state);
  const dispatch = useDispatch();
  globalStateLogout.globalReducer.isLogout && dispatch(setLogout(false));
  globalStateLogout.globalReducer.isLogout &&
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});

  const [user, setUser] = useState({});
  useEffect(() => {
    getData('token').then(data => {
      setUser(data);
    });
  }, []);
  const onPressLearnMore = () => {
    let dataattr = '';
    if (globalState?.nik.length == 16) {
      dispatch(setNikError(''));
    }
    if (globalState?.nik.length < 16) {
      dispatch(setNikError('Masukan nik 16 digit'));
    }
    if (globalState.brosur.length > 0) {
      dataattr += '#brosur';
    }
    if (globalState.spanduk.length > 0) {
      dataattr += '#spanduk';
    }
    if (globalState.baju.length > 0) {
      dataattr += '#baju';
    }
    if (globalState.lainnya.length > 0) {
      dataattr += `#${globalState.lainnya}`;
    }

    if (globalState.lainnya.length > 0) {
      dataattr += `#${globalState.lainnya}`;
    }
    if (
      globalState.spanduk.length == 0 ||
      globalState.brosur.length == 0 ||
      globalState.baju.length == 0
    ) {
      dispatch(setTabindexinputkoresponden(2));
    }
    if (
      globalState.qa1.length == 0 ||
      globalState.qa2.length == 0 ||
      globalState.qa2.length == 0
    ) {
      dispatch(setTabindexinputkoresponden(1));
    }

    if (
      globalState?.nama.length == 0 ||
      globalState?.nama.length > 20 ||
      globalState?.usia.length == 0 ||
      globalState?.usia.length > 2 ||
      globalState?.nik.length == 0 ||
      globalState?.nik.length < 16 ||
      globalState?.nik.length > 17 ||
      globalState?.alamat.length == 0 ||
      globalState?.hp.length == 0 ||
      globalState?.hp.length > 20 ||
      globalState?.kota.length == 0 ||
      globalState?.kecamatan.length == 0 ||
      globalState?.desa.length == 0
    ) {
      dispatch(setTabindexinputkoresponden(0));
    }

    if (
      globalState?.nama.length > 0 &&
      globalState?.nama.length <= 20 &&
      globalState?.usia.length > 0 &&
      globalState?.usia.length <= 2 &&
      globalState?.nik.length > 0 &&
      globalState?.nik.length >= 16 &&
      globalState?.nik.length <= 17 &&
      globalState?.alamat.length > 0 &&
      globalState?.hp.length > 0 &&
      globalState?.hp.length <= 20 &&
      globalState?.kota.length > 0 &&
      globalState?.kecamatan.length > 0 &&
      globalState?.desa.length > 0 &&
      globalState.qa1.length > 0 &&
      globalState.qa2.length > 0 &&
      globalState.qa2.length > 0 &&
      globalState.spanduk.length > 0 &&
      globalState.brosur.length > 0 &&
      globalState.baju.length > 0
    ) {
      Object.assign(globalState, {attribute: dataattr});

      dispatch(signUpKorespondenAction(globalState, navigation, user));
    }
  };

  return (
    <View style={styles.content}>
      <Header
        title="Koresponden"
        subTitle="Form Koresponden"
        onBack={() => navigation.goBack()}
      />
      {/* Tab */}
      <View style={styles.content}>
        <HomeTabSection />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Simpan"
            textColor="#F9F9F9"
            color="green"
          />
        </View>
        {/* <View style={styles.boxButton}>
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            text="Draft"
            textColor="#F9F9F9"
            color="green"
          />
        </View> */}
      </View>
      {/* end tab   */}
    </View>
  );
};
export default React.memo(FormKoresponden);
const styles = StyleSheet.create({
  content: {
    flex: 1,
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
});
