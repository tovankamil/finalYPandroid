import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ICNext} from '../../../assets';
const MenuHome = ({navigation, onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.title}> {title}</Text>
          <ICNext />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
  },
  content: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
