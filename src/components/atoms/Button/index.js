import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SVGCAMERA} from '../../../assets';

const Button = ({
  text,
  color = '#FFC700',
  textColor = '#020202',
  onPress,
  camera,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {camera ? (
        <View
          style={{
            backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'row',
            padding: 12,
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
        >
          <SVGCAMERA />
          <View>
            <Text style={{color: 'white', marginLeft: 5}}>
              Ambil foto lokasi
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.container(color)}>
          <Text style={styles.text(textColor)}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
