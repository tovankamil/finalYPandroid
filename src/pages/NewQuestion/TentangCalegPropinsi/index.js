import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, OTentangPKB} from '../../../components';
import Button from '../../../components/Button';

const TentangCalegPropinsi = ({navigation}) => {
  const selector = useSelector(state => state.questionReducer);

  if (selector) {
    const filter = selector?.dataQuestion.filter((d, i) => {
      if (d.idKategori?.namakategori === 'Caleg Propinsi') return d;
    });
    return (
      <ScrollView>
        <View style={styles.content}>
          <Header
            title="Responden"
            subTitle="Form Responden Caleg Propinsi"
            // onBack={() => navigation.goBack()}
          />
          {/* Tab */}
          <View style={styles.container}>
            <View style={styles.boxH1}>
              <Text style={styles.H1}>Tentang Caleg Propinsi</Text>
            </View>
            <Gap height={14} />
            {filter.map((d, i) => {
              return <OTentangPKB data={d} key={i} />;
            })}
          </View>
          <Gap height={10} />
          <View style={styles.FlexButton}>
            <View style={styles.boxButton}>
              <Button
                text="Sebelumnya"
                color="#8D92A3"
                textColor="#F9F9F9"
                onPress={() => navigation.navigate('IdentitasLain')}
              />
            </View>

            <View style={styles.boxButton}>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate('TentangCalegKabupaten')}
                text="Selanjutnya"
                textColor="#F9F9F9"
                color="green"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>Tidak ada data</Text>
    </View>
  );
};

export default React.memo(TentangCalegPropinsi);
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  boxH1: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  H1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxButton: {
    padding: 10,
    width: '50%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
  FlexButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boldText: {
    color: 'green',
    fontWeight: 'bold',
  },
});
