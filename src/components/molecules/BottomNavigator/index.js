import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IExit,
  IExitActive,
  IHome,
  IHomeActive,
  IProfile,
  IProfileActive,
  ISetting,
  ISettingActive,
  ITambahResponden,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IHomeActive /> : <IHome />;

    case 'Profile':
      return focus ? <IProfileActive /> : <IProfile />;
    case 'Responden':
      return focus ? <ITambahResponden /> : <ITambahResponden />;
    case 'Setting':
      return focus ? <ISettingActive /> : <ISetting />;
    case 'Keluar':
      return focus ? <IExitActive /> : <IExit />;
    default:
      return <IHome />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <Icon label={label} focus={isFocused} />
            <Text
              style={{
                color: isFocused ? '#0C7649' : '#BFBFBF',
                fontSize: 12,
                fontFamily: 'Poppins-reguler',
                textAlign: 'center',
                marginTop: 5,
              }}
            >
              {' '}
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    color: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 15,
    width: '100%',
    // borderTopRightRadius: 35,
    // borderTopLeftRadius: 35,
  },
});
