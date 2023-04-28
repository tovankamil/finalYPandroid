import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Gap} from '../../atoms';

const GroupValidasi = ({nama, title}) => {
  return (
    <View style={styles.group}>
      <Gap height={36} />
      <View style={styles.kiri}>
        <Text style={styles.titlekiri}>{nama.toUpperCase()}</Text>
      </View>
      <View style={styles.kanan}>
        <Text style={styles.titlekanan}>: {title}</Text>
      </View>
    </View>
  );
};

export default GroupValidasi;

const styles = StyleSheet.create({
  group: {
    display: 'flex',
    color: '#00000',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  kiri: {
    width: '48%',
  },
  kanan: {
    width: '52%',
  },

  titlekiri: {
    fontSize: 12,
    width: '100%',
    fontWeight: 'bold',
    color: '#000000',
  },
  titlekanan: {
    fontSize: 16,
    color: '#000000',
  },
});
