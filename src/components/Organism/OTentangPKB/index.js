import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  AtomJawabanField,
  AtomJawabanFieldWithForm,
  ATOMJawabanMC,
  Gap,
} from '../../atoms';
import {CBQANEWv2} from '../../molecules';
import CBQASCF from '../../molecules/CBQASCF';

const OTentangPKB = ({data}) => {
  const SC = () => {
    if (data.tipejawaban == 'field' && data.jawabanForm) {
      return (
        <AtomJawabanFieldWithForm
          idPertanyaan={data._id}
          namaResponden="tofan"
          tipe={data.tipejawaban}
          formdata={data.formdata}
        />
      );
    }
    if (data.tipejawaban == 'field') {
      return (
        <AtomJawabanField
          idPertanyaan={data._id}
          namaResponden="tofan"
          tipe={data.tipejawaban}
          formdata={data.formdata}
        />
      );
    }
    if (data.tipejawaban == 'sc') {
      return <CBQANEWv2 dataQA={data} tipe={data.tipejawaban} />;
    }

    if (data.tipejawaban == 'scf') {
      return <CBQASCF dataQA={data} tipe={data.tipejawaban} />;
    }

    if (data.tipejawaban == 'mc') {
      return data.jawaban.map((d, i) => {
        return (
          <ATOMJawabanMC
            data={d}
            dataquestion={data}
            idPertanyaan={d.idPertanyaan}
            namaResponden="tofan"
            idjawaban={d._id}
            keydata={i}
            key={i}
            check={d.checked}
            tipe={data.tipejawaban}
            subjawaban={d.subjawaban}
            placeholder={d.placeholder}
          />
        );
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowQuestion}>
        <Text>-</Text>
        <Gap width={4} />
        <Text style={styles.pertanyaan}>{data.namapertanyaan}</Text>
      </View>
      {<SC />}
    </View>
  );
};

export default React.memo(OTentangPKB);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  pertanyaan: {
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  rowQuestion: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
