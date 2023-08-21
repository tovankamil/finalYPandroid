import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ATOMJawaban, Gap} from '../../atoms';

const OTentangPKB = ({data}) => {
  const selector = useSelector(state => state.questionReducer);

  return (
    <View style={styles.container}>
      <View style={styles.rowQuestion}>
        <Text>-</Text>
        <Gap width={4} />
        <Text style={styles.pertanyaan}>{data.namapertanyaan}</Text>
      </View>
      {data.jawaban.map((d, i) => {
        return <ATOMJawaban data={d} key={i} />;
      })}
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
