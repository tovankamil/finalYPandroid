import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {Button, Header} from '../../../components';
import {
  createTable,
  deleteTodoItem,
  getDBConnection,
  getTodoItems,
  saveTodoItems,
} from '../../../db/db-service';
import {setLoading} from '../../../redux/action';
import {inpudataresponden} from '../../../redux/action/inputdataresponden';
import {getData, showMessage} from '../../../utils';

const Photo = ({navigation}) => {
  const [userProfile, setUserProfile] = useState();

  const [location, setLocation] = useState(false);
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => {
            // See error code charts below.
            showMessage(
              'Anda belum mengijinkan lokasi anda mohon aktifkan gps anda',
            );

            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        showMessage(
          'Anda belum mengijinkan lokasi anda mohon aktifkan gps anda',
        );
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

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
  }

  const updatePhoto = () => {
    launchCamera(
      {
        quality: 1,
        presentationStyle: 'fullScreen',
        includeBase64: true,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const dataImage = {
            uri: response?.assets[0].uri,

            type: response.assets[0].type,
            name: response.assets[0].fileName,
            base64: response.assets[0].base64,
          };

          setUserProfile(dataImage);
          // const photoForUpload = new FormData();
          // photoForUpload.append('file', dataImage);
          //   getData('token').then(resToken => {
          //     Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          //       headers: {
          //         Authorization: resToken.value,
          //         'Content-Type': 'multipart/form-data',
          //       },
          //     })
          //       .then(res => {
          //         getData('userProfile').then(resUser => {
          //           showMessage('Update Photo Berhasil', 'success');
          //           resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
          //           storeData('userProfile', resUser).then(() => {
          //             updateUserProfile();
          //           });
          //         });
          //       })
          //       .catch(err => {
          //         showMessage(
          //           `${err?.response?.data?.message} on Update Photo API` ||
          //             'Terjadi kesalahan di API Update Photo',
          //         );
          //       });
          //   });
        }
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const submit = async () => {
    let datafinal;
    let listjawaban = [];

    if (!userProfile) {
      showMessage('Anda belum mengambil gambar lokasi');
    }
    if (!location) {
      showMessage('Silahkan aktifkan GPS anda');
    }
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
    // datafinal['photo'] = userProfile;
    datafinal[
      'location'
    ] = `${location?.coords?.latitude}, ${location?.coords?.longitude}`;
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
    datafinal['images'] = userProfile.base64;
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
        dispatch(inpudataresponden(data, datafinal));
      })
      .catch(async err => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title=" Lokasi"
        subTitle="Photo lokasi responden"
        onBack={() => navigation.goBack()}
      />
      {/* Tab */}
      <View style={styles.photosection}>
        {!location && (
          <View style={{marginTop: 16}}>
            <Button
              text="Klik disini untuk aktifkan GPS"
              color="purple"
              textColor="white"
              onPress={getLocation}
            />
          </View>
        )}

        <View style={styles.profileDetail}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={updatePhoto}>
              <View>
                {userProfile ? (
                  <Image
                    source={{uri: userProfile.uri}}
                    style={styles.photoContainer}
                  />
                ) : (
                  <View style={{width: 340, height: 340}}></View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 16}}>
            <Button
              text="Foto Lokasi"
              color="red"
              textColor="#F9F9F9"
              onPress={updatePhoto}
              camera
            />
          </View>
          <View style={styles.FlexButton}>
            <View style={styles.boxButton}>
              <Button
                text="Sebelumnya"
                color="#8D92A3"
                textColor="#F9F9F9"
                onPress={() => navigation.navigate('TentangCalegKabupaten')}
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

      {/* end tab   */}
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  page: {flex: 1, flexDirection: 'column'},

  photosection: {flex: 1, height: '100%'},
  content: {flex: 1, marginTop: 24},
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    height: 400,
    backgroundColor: 'black',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 340,
    height: '80%',

    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 340,
    height: '100%',
    backgroundColor: 'black',
  },
  FlexButton: {
    width: '100%',
    display: 'flex',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boxButton: {
    padding: 10,
    width: '50%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
});
