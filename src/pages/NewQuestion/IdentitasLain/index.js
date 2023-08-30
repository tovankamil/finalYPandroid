import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, OTentangPKB} from '../../../components';
import Button from '../../../components/Button';
import {question} from '../../../redux/action/question';

const IdentitasLain = ({navigation}) => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.questionReducer);
  const dataresponden = useSelector(state => state.formKorespondenReducer);
  const datamc = useSelector(state => state.jawabanRespondenReducer);
  const datasubjawaban = useSelector(state => state.subjawabanRespondenReducer);
  const datasc = useSelector(state => state.jawabanRespondenReducer);

  const datafield = useSelector(state => state.fieldjawabanRespondenReducer);
  const datascf = useSelector(state => state.scfjawabanRespondenReducer);
  const datascfsub = useSelector(state => state.scfsubjawabanResponden);

  if (selector) {
    const filter = selector?.dataQuestion.filter((d, i) => {
      if (d.idKategori?.namakategori === 'Identitas Pemilih') return d;
    });

    const submit = () => {
      let datafinal = [];
      let listjawaban = [];

      if (datamc?.data_jawaban?.length > 0) {
        /* tipe SC */

        datamc?.data_jawaban?.map((d, i) => {
          // cari data subjawaban
          const indexsubjawaban = datasubjawaban.data_jawaban.findIndex(s => {
            return s.subjawaban === d.subjawaban;
          });

          const data = {
            idPertanyaan: d.idPertanyaan,
            idjawaban: d.idjawaban,
            fieldjawaban: d.fieldjawaban,
            subjawaban:
              indexsubjawaban >= 0
                ? datasubjawaban.data_jawaban[indexsubjawaban].subjawaban
                : '',
            tipe: d.tipe,
          };
          listjawaban.push(data);
        });
      }

      if (datafield?.data_jawaban?.length > 0) {
        datafield.data_jawaban.map(d => {
          const data = {
            idPertanyaan: d.idPertanyaan,
            idjawaban: d.idjawaban,
            fieldjawaban: d.fieldjawaban === undefined ? '' : d.fieldjawaban,
            subjawaban: '',
            tipe: d.tipe,
            jawabanForm: [],
          };
          listjawaban.push(data);
          const checkindex = listjawaban.findIndex(ls => {
            return ls.idPertanyaan === d.idPertanyaan;
          });
          if (d?.jawabanForm.length > 0) {
            d.jawabanForm.map(dj => {
              listjawaban[checkindex].jawabanForm.push(dj);
            });
          }
          console.log('listjawaban', listjawaban[checkindex].jawabanForm);
          if (listjawaban?.jawabanForm?.length > 0) {
            console.log('datafieldwithform', listjawaban.jawabanForm);
          }
        });
      }

      if (datasc.data_jawaban.length > 0) {
        datasc.data_jawaban.map(d => {
          const data = {
            idPertanyaan: d.idPertanyaan,
            idjawaban: d.idjawaban,
            fieldjawaban: d.fieldjawaban,
            subjawaban: '',
            tipe: d.tipe,
          };
          listjawaban.push(data);
        });
      }

      if (datascf.data_jawaban.length > 0) {
        datascf.data_jawaban.map(dx => {
          if (datascfsub?.data_jawaban?.length > 0) {
            const cariindex = datascfsub.data_jawaban.findIndex(d => {
              return d.idjawaban === dx.idjawaban;
            });

            const data = {
              idPertanyaan: dx.idpertamyaan,
              idjawaban: dx.idjawaban,
              fieldjawaban: dx.fieldjawaban,
              subjawaban: datascfsub.data_jawaban[cariindex].subjawaban,
              tipe: dx.tipe,
            };

            listjawaban.push(data);
          }
        });
      }
    };
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
                  onPress={submit}
                  text="Simpan"
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
