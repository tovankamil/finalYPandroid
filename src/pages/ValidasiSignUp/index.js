import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, GroupValidasi, Header, Button} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
export const ValidasiSignUp = ({navigation}) => {
  const globalState = useSelector(state => state.registerReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signUpAction(globalState, navigation));
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header
        title="Validasi Data"
        subTitle="Mohon periksa kembali data anda"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.page}>
          <Text style={styles.registrasi}>Data Registrasi :</Text>
          <Gap height={16} />
          {globalState &&
            typeof globalState != 'undefined' &&
            Object.keys(globalState).length > 0 &&
            Object.keys(globalState).map((data, index) => {
              if (
                data.replace(/^\s+|\s+$/gm, '') !== 'desa' &&
                data.replace(/^\s+|\s+$/gm, '') !== 'kota' &&
                data.replace(/^\s+|\s+$/gm, '') !== 'kecamatan'
              ) {
                return (
                  <GroupValidasi
                    key={index}
                    nama={data.replace('_', ' ')}
                    title={globalState[data]}
                  />

                  // <Text key={index}>{data.replace("_"," ")} {globalState[data]}</Text>
                );
              }
            })}

          <Gap height={46} />
          <Button
            text="Submit"
            color="#0EA137"
            textColor="#F9F9F9"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ValidasiSignUp;
const styles = StyleSheet.create({
  registrasi: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    color: '#0000',
    flex: 1,
  },
  groupvalidasi: {},
});
