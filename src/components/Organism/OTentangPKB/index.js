import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ATOMJawaban, AtomJawabanField, ATOMJawabanMC, Gap} from '../../atoms';
import {CBQANEWv2} from '../../molecules';

const OTentangPKB = ({data}) => {
  const SC = () => {
    if (data.tipejawaban == 'field') {
      return (
        <AtomJawabanField
          idPertanyaan="xxxx"
          namaResponden="tofan"
          tipe={data.tipejawaban}
        />
      );
    }
    if (data.tipejawaban == 'sc') {
      return <CBQANEWv2 dataQA={data} tipe={data.tipejawaban} />;
    }
    if (data.tipejawaban == 'mc') {
      return data.jawaban.map((d, i) => {
        return (
          <ATOMJawabanMC
            data={d}
            idPertanyaan={d.idPertanyaan}
            namaResponden="tofan"
            idjawaban={d._id}
            keydata={i}
            key={i}
            check={d.checked}
            tipe={data.tipejawaban}
            subjawaban={d.subjawaban}
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
  },
  pertanyaan: {
    fontWeight: 'bold',
  },
  rowQuestion: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
