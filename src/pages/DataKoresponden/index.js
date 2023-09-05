import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header} from '../../components';
import TabListDataKoresponden from '../../components/molecules/TabListDataKoresponden';
import {resetDataFormKoresponden} from '../../redux/action';
import {resetjawabanRespondenbarufield} from '../../redux/action/fieldjawabanResponden';
import {resetjawabanRespondenbaru} from '../../redux/action/jawabanResponden';
import {resetscffieldjawabanRespondenbaru} from '../../redux/action/subjawabanResponden';

const DataKoresponden = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetDataFormKoresponden());
    dispatch(resetjawabanRespondenbaru());
    dispatch(resetjawabanRespondenbarufield());
    dispatch(resetscffieldjawabanRespondenbaru());
    dispatch({type: 'RESET_NEW_DATA_KECAMATAN'});
    dispatch({type: 'RESET_NEW_DATA_KOTA'});
    dispatch({type: 'RESET_NEW_DATA_DESA'});
  }, []);
  return (
    <View style={styles.content}>
      <Header
        title="Data responden"
        subTitle="List Data Responden"
        onBack={() => navigation.goBack()}
      />
      {/* Tab */}
      <View style={styles.content}>
        <TabListDataKoresponden />
      </View>

      {/* end tab   */}
    </View>
  );
};

export default DataKoresponden;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  boxButton: {
    padding: 10,

    justifyContent: 'center',
  },
  button: {
    width: '50%',
    color: 'red',
  },
});
