import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, OTentangPKB} from '../../../components';
import Button from '../../../components/Button';
import {inpudataresponden} from '../../../redux/action/inputdataresponden';
import {getData, showMessage} from '../../../utils';
import {v4 as uuidv4} from 'uuid';
import {setLoading} from '../../../redux/action';

const TentangCalegKabupaten = ({navigation}) => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.questionReducer);
  const globalreducer = useSelector(state => state.globalReducer);
  const dataresponden = useSelector(state => state.formKorespondenReducer);
  const datamc = useSelector(state => state.jawabanRespondenReducer);
  const datasubjawaban = useSelector(state => state.subjawabanRespondenReducer);
  const datasc = useSelector(state => state.jawabanRespondenReducer);

  const datafield = useSelector(state => state.fieldjawabanRespondenReducer);
  const datascf = useSelector(state => state.scfjawabanRespondenReducer);
  const datascfsub = useSelector(state => state.scfsubjawabanResponden);
  const listkota = useSelector(state => state.listkota);
  const listkecamatan = useSelector(state => state.listkecamatan);
  const listdesa = useSelector(state => state.listdesa);

  useEffect(() => {
    if (globalreducer.successinput === true) {
      showMessage('Data Berhasil di masukan', 'success');
      dispatch({type: 'RESET_NEW_DATA_KECAMATAN'});
      dispatch({type: 'RESET_NEW_DATA_KOTA'});
      dispatch({type: 'RESET_NEW_DATA_DESA'});
      dispatch({type: 'RESET_SUCCESS_DATA_INPUT'});
      dispatch({type: 'SET_RESET_FORM'});
      dispatch({type: 'RESET_DATA_JAWABAN_RESPONDEN_BARU'});
      dispatch({type: 'RESET_POPULATE_DATA_SUBJAWABAN_RESPONDEN_BARU'});
      dispatch({type: 'RESET_DATA_JAWABAN_RESPONDEN_FIELD'});
      dispatch({type: 'RESET_POPULATE_DATA_SCF_SUBJAWABAN_RESPONDEN_BARU'});
      dispatch({
        type: 'RESET_POPULATE_DATA_SCF_FIELD_SUBJAWABAN_RESPONDEN_BARU',
      });
      dispatch({
        type: 'dataJK',
      });
      dispatch({
        type: 'RESET_UPDATE_CHECKED',
      });
      dispatch({
        type: 'RESET_dataJK',
      });

      dispatch(setLoading(false));
      // navigation.navigate('DataKoresponden');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }
    return () => {};
  }, [globalreducer]);

  if (selector) {
    const filter = selector?.dataQuestion.filter((d, i) => {
      if (d.idKategori?.namakategori === 'Caleg Kabupaten') return d;
    });

    const submit = async () => {
      let datafinal;
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
          if (d.fieldjawaban?.length > 0) {
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
          }
        });
      }

      if (datascf.data_jawaban.length > 0) {
        datascf.data_jawaban.map(dx => {
          if (listjawaban.length <= 0) {
            if (datascfsub?.data_jawaban?.length > 0) {
              const cariindex = datascfsub.data_jawaban?.findIndex(d => {
                return d.idjawaban === dx.idjawaban;
              });

              if (cariindex >= 0) {
                const data = {
                  idPertanyaan: dx.idPertanyaan,
                  idjawaban: dx.idjawaban,
                  fieldjawaban: dx.fieldjawaban,
                  subjawaban: datascfsub?.data_jawaban[cariindex]?.subjawaban,
                  tipe: dx.tipe,
                };

                listjawaban.push(data);
              } else {
                const data = {
                  idPertanyaan: dx.idPertanyaan,
                  idjawaban: dx.idjawaban,
                  fieldjawaban: dx.fieldjawaban,
                  subjawaban: '',
                  tipe: dx.tipe,
                };

                listjawaban.push(data);
              }
            } else {
              const data = {
                idPertanyaan: dx.idPertanyaan,
                idjawaban: dx.idjawaban,
                fieldjawaban: dx.fieldjawaban,
                subjawaban: '',
                tipe: dx.tipe,
              };
              listjawaban.push(data);
            }
          } else {
            if (datascfsub?.data_jawaban?.length > 0) {
              const cariindex2 = datascfsub.data_jawaban.findIndex(d => {
                return d.idjawaban === dx.idjawaban;
              });

              if (cariindex2 >= 0) {
                const data = {
                  idPertanyaan: dx.idPertanyaan,
                  idjawaban: dx.idjawaban,
                  fieldjawaban: dx.fieldjawaban,
                  subjawaban: datascfsub?.data_jawaban[cariindex2]?.subjawaban,
                  tipe: dx.tipe,
                };

                listjawaban.push(data);
              } else {
                const data = {
                  idPertanyaan: dx.idPertanyaan,
                  idjawaban: dx.idjawaban,
                  fieldjawaban: dx.fieldjawaban,
                  subjawaban: '',
                  tipe: dx.tipe,
                };

                listjawaban.push(data);
              }
            } else {
              const data = {
                idPertanyaan: dx.idPertanyaan,
                idjawaban: dx.idjawaban,
                fieldjawaban: dx.fieldjawaban,
                subjawaban: '',
                tipe: dx.tipe,
              };

              listjawaban.push(data);
            }
          }
        });
      }
      datafinal = dataresponden;

      datafinal['listjawaban'] = listjawaban;
      const v4options = {
        random: [
          0x10,
          0x91,
          0x56,
          0xbe,
          0xc4,
          0xfb,
          0xc1,
          0xea,
          0x71,
          0xb4,
          0xef,
          0xe1,
          0x67,
          0x1c,
          0x58,
          0x36,
        ],
      };

      datafinal['kota'] = listkota.nama_kota?.split('#')[0];
      datafinal['kecamatan'] = listkecamatan.nama_kecamatan?.split('#')[0];
      datafinal['desa'] = listdesa.nama_desa?.split('#')[0];

      if (
        datafinal?.nama?.length <= 0 ||
        datafinal?.kota?.length <= 0 ||
        datafinal?.kecamatan?.length <= 0 ||
        datafinal?.desa?.length <= 0
      ) {
        return showMessage('Mohon isikan nama/kota/kecamatan/desa', 'danger');
      }

      datafinal['uuid'] = await uuidv4(v4options);
      getData('token')
        .then(data => {
          dispatch(setLoading(true));
          dispatch(inpudataresponden(data, datafinal));
        })
        .catch(err => console.log(err));
    };
    return (
      <ScrollView>
        <View style={styles.content}>
          <Header
            title="Responden"
            subTitle="Form Responden Caleg Kabupaten"
            // onBack={() => navigation.goBack()}
          />
          {/* Tab */}
          <View style={styles.container}>
            <View style={styles.boxH1}>
              <Text style={styles.H1}>Tentang Caleg Kabupaten</Text>
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
                onPress={() => navigation.navigate('TentangCalegPropinsi')}
                // onPress={() => navigation.navigate('TentangCalegPropinsi')}
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
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>Tidak ada data</Text>
    </View>
  );
};

export default React.memo(TentangCalegKabupaten);
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
