import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {
  CalendarBlank,
  IconUserDetail,
  MapPin,
  Password,
  Phone,
} from '../../assets';
import {Gap, Header} from '../../components';

export default function Setting({navigation}) {
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    // REMOVE TOKEN
  };
  return (
    <View style={styles.content}>
      <Header
        title="Setting "
        subTitle="Profile Relawan"
        onBack={() => navigation.goBack()}
      />

      {/* Photo */}
      <View>
        <View style={styles.boxPhoto}>
          <View style={styles.icon}>
            <IconUserDetail />
          </View>
          <Gap height={10} />
          <Text style={styles.nama}>Tofan</Text>
          <Gap height={5} />
          <Text style={styles.nik}>317400919910010</Text>
          <Gap height={5} />
          <Text style={styles.kecamatanTitle}>Koodinator kecamatan</Text>
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
            <Text>25 Maret 2023</Text>
          </View>
          <Gap height={25} />
          <View style={styles.boxFlexRow}>
            <View style={styles.boxFLexCenter}>
              <Phone />
            </View>
            <Gap width={10} />
            <Text>082292301999</Text>
          </View>
          <Gap height={20} />
          <View style={styles.boxFlexRow}>
            <View style={styles.boxFLexCenter}>
              <MapPin />
            </View>
            <Gap width={10} />
            <Text style={styles.alamat}>
              Jl. Medan Merdeka Sel. No.8-9, RT.11/RW.2, Gambir, Kecamatan
              Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110
            </Text>
          </View>
          <Gap height={20} />
          <View style={styles.line}></View>
          <Gap height={20} />

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

          <Gap height={20} />

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
      {/* Information */}
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
    backgroundColor: 'purple',
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
