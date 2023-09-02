import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, OTentangPKB} from '../../../components';
import Button from '../../../components/Button';
import {inpudataresponden} from '../../../redux/action/inputdataresponden';
import {question} from '../../../redux/action/question';
import {getData} from '../../../utils';
import {v4 as uuidv4} from 'uuid';

const IdentitasLain = ({navigation}) => {
  const selector = useSelector(state => state.questionReducer);

  if (selector) {
    const filter = selector?.dataQuestion.filter((d, i) => {
      if (d.idKategori?.namakategori === 'Identitas Pemilih') return d;
    });

    return (
      <ScrollView>
        <View style={styles.content}>
          <Header
            title="Responden"
            subTitle="Form Responden"
            onBack={() => navigation.goBack()}
          />
          {/* Tab */}
          <View style={styles.boxJawaban}>
            <View style={styles.container}>
              <View style={styles.boxH1}>
                <Text style={styles.H1}>Identitas Pemilih</Text>
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
                  text="Kembali"
                  color="#8D92A3"
                  textColor="#F9F9F9"
                  onPress={() => navigation.navigate('Attribute')}
                />
              </View>

              <View style={styles.boxButton}>
                <Button
                  style={styles.button}
                  onPress={() => navigation.navigate('TentangCalegPropinsi')}
                  text="Selanjutnya"
                  textColor="#F9F9F9"
                  color="green"
                />
              </View>
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

export default IdentitasLain;

const styles = StyleSheet.create({
  boxJawaban: {
    display: 'flex',
    flexDirection: 'column',
  },
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
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
