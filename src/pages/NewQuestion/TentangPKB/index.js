import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, OTentangPKB} from '../../../components';
import {question} from '../../../redux/action/question';

const TentangPKB = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.questionReducer);
  useEffect(() => {
    grepData();
    return () => {};
  }, []);
  const grepData = () => {
    dispatch(question());
  };
  if (selector) {
    const filter = selector?.dataQuestion.filter((d, i) => {
      if (d.idKategori?.namakategori === 'Tentang PKB') return d;
    });
    return (
      <ScrollView>
        <View style={styles.content}>
          <Header
            title="Responden"
            subTitle="Form Responden"
            onBack={() => navigation.goBack()}
          />
          {/* Tab */}
          <View style={styles.container}>
            <View style={styles.boxH1}>
              <Text style={styles.H1}>Tentang PKB</Text>
            </View>
            <Gap height={14} />
            {filter.map((d, i) => {
              return <OTentangPKB data={d} key={i} />;
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>Tidak data</Text>
    </View>
  );
};

export default TentangPKB;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  boxH1: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  H1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxButton: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
});
