import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header} from '../../components';
import HomeTabSection from '../../components/molecules/HomeTabSection';
import {
  setATR,
  setIDENTITAS,
  setLogout,
  setNikError,
  setQA,
  setTabindexinputkoresponden,
  setUsiaError,
  signUpKorespondenAction,
} from '../../redux/action';
import {getData} from '../../utils';

const FormKoresponden = ({navigation}) => {
  const globalState = useSelector(state => state.formKorespondenReducer);
  const globalStateLogout = useSelector(state => state);

  let cekqa = 0;

  const dispatch = useDispatch();
  globalStateLogout.globalReducer.isLogout && dispatch(setLogout(false));
  globalStateLogout.globalReducer.isLogout &&
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});

  const [user, setUser] = useState({});
  useEffect(() => {
    getData('token').then(data => {
      setUser(data);
    });
    dispatch(setATR(''));
    dispatch(setQA(''));
    dispatch(setIDENTITAS(''));
    dispatch(setNikError(''));
    dispatch(setUsiaError(''));
  }, []);
  const onPressLearnMore = () => {
    globalState.qa0.map((datax, ind) => {
      datax.jawaban.map((dtx, index) => {
        if (dtx.isChecked) {
          cekqa++;
        }
      });
    });
    let dataattr = '';
    if (globalState?.nik.length == 16) {
      dispatch(setNikError(''));
    }
    if (globalState?.nik.length < 16 || globalState?.nik.length > 16) {
      dispatch(setNikError('Masukan nik 16 digit'));
    }
    if (
      globalState?.usia.length > 2 ||
      globalState?.usia.length < 1 ||
      globalState?.usia == 0
    ) {
      dispatch(setUsiaError('Silahkan isi usia anda maksimal 2 digit'));
    }
    if (globalState?.usia.length == 2) {
      dispatch(setUsiaError(''));
    }

    if (globalState.lainnya.length > 0) {
      dataattr += `#${globalState.lainnya}`;
    }

    let temp = globalState?.attribute?.findIndex(d => d.isChecked == true);
    if (temp === -1 && globalState.lainnya.length < 1) {
      dispatch(setATR('Silahkan Pilih Attribute'));
      dispatch(setTabindexinputkoresponden(2));
    }
    if (temp === 0 && globalState.lainnya.length < 1) {
      dispatch(setATR('Silahkan Pilih Attribute'));
      dispatch(setTabindexinputkoresponden(2));
    }
    if (temp >= 0 && globalState.lainnya.length >= 0) {
      dispatch(setATR(''));
      globalState?.attribute?.map(d => {
        if (d.isChecked) {
          dataattr += `#${d.txt}`;
        }
      });
    }

    if (
      globalState.spanduk.length > 0 &&
      globalState.brosur.length > 0 &&
      globalState.baju.length > 0
    ) {
      dispatch(setTabindexinputkoresponden(2));
      dispatch(setATR(''));
    }
    if (cekqa < 5) {
      dispatch(setQA('Silahkan jawab pertanyaan pada  Q&A'));
      dispatch(setTabindexinputkoresponden(1));
    }
    if (cekqa >= 5) {
      dispatch(setQA(''));
      dispatch(setTabindexinputkoresponden(1));
    }
    if (
      globalState.qa1.length > 0 &&
      globalState.qa2.length > 0 &&
      globalState.qa2.length > 0
    ) {
      dispatch(setQA(''));
      dispatch(setTabindexinputkoresponden(1));
    }
    if (
      globalState?.nama?.length == 0 ||
      globalState?.nama?.length > 20 ||
      globalState?.usia?.length == 0 ||
      globalState?.usia?.length > 2 ||
      globalState?.nik?.length == 0 ||
      globalState?.nik?.length < 16 ||
      globalState?.nik?.length > 17 ||
      globalState?.alamat?.length == 0 ||
      globalState?.hp?.length == 0 ||
      globalState?.hp?.length > 20 ||
      globalState?.kota?.length == 0 ||
      globalState?.kecamatan == false ||
      globalState?.desa == false ||
      globalState?.kecamatan?.length == 0 ||
      globalState?.desa?.length == 0
    ) {
      dispatch(setIDENTITAS('Silahkan lengkapi form indentitas'));
      dispatch(setTabindexinputkoresponden(0));
    } else {
      dispatch(setIDENTITAS(''));
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
      cekqa >= 5 &&
      temp >= 0 &&
      globalState.lainnya.length >= 0
    ) {
      Object.assign(globalState, {dataattribute: dataattr});
      dispatch(signUpKorespondenAction(globalState, navigation, user));
    }
  };

  return (
    <View style={styles.content}>
      <Header
        title="Responden"
        subTitle="Form Responden"
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
