import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Button, Gap, Header} from '../../components';
import {profilPKB, profilyanuarprihatin} from '../../constants/QA';
export default function Profile({navigation}) {
  const [tab, setTab] = useState({
    tab1: true,
    tab2: false,
  });

  const submit = data => {
    // setTab({data: data === 'tab1' ? true : false});
    if (data === 'tab1') {
      setTab({tab1: true, tab2: false});
    }
    if (data === 'tab2') {
      setTab({tab2: true, tab1: false});
    }
  };

  return (
    <View>
      <Header
        title="Profil "
        subTitle="Profil Yanuar Prihatin"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Gap height={35} />
        <View style={styles.blockButton}>
          <Button
            text="Profil PKB"
            color={tab.tab1 ? 'green' : '#8D92A3'}
            textColor="#F9F9F9"
            onPress={() => {
              submit('tab1');
            }}
          />
          <Gap width={15} />
          <Button
            text="Profil Yanuar Prihatin"
            color={tab.tab2 ? 'green' : '#8D92A3'}
            textColor="#F9F9F9"
            onPress={() => {
              submit('tab2');
            }}
          />
        </View>
        {tab.tab1 && <HTMLView value={profilPKB} stylesheet={styles} />}
        {tab.tab2 && (
          <HTMLView value={profilyanuarprihatin} stylesheet={styles} />
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 0,
    paddingBottom: 25,
  },
  blockButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  p: {
    marginBottom: -60,
    lineHeight: 20,
  },
});
