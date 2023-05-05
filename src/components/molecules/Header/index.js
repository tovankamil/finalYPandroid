import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ICBackWHITE} from '../../../assets/icon';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <ICBackWHITE />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#153606',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    fontFamily: 'Poppins-Medium',
    lineHeight: 29,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    lineHeight: 13,
    marginTop: 1,
  },
  back: {
    padding: 15,
    marginRight: 15,
    marginLeft: -10,
  },
});
