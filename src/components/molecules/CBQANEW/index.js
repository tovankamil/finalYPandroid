import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ATOMQA, Gap} from '../../atoms';
import {QADAT} from '../../../constants/QA';
import {useDispatch, useSelector} from 'react-redux';
import {setLoadingQA} from '../../../redux/action/qa';

const index = () => {
  const dispatch = useDispatch();
  const selectorQA = useSelector(state => state.qaloadreducer);

  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    grepData();
    return () => {};
  }, []);
  const grepData = () => {
    dispatch(setLoadingQA(QADAT));
  };
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          {selectorQA?.dataQA?.map((d, i) => {
            return (
              <>
                <View>
                  <Text style={styles.label}>
                    {`${i + 1}. `}
                    {d.label}
                  </Text>

                  <Gap height={10} />
                  <View style={styles.containerjawaban}>
                    {d.jawaban.map((dt, index) => {
                      console.log('dd', dt);
                      return (
                        <>
                          <ATOMQA
                            label={dt.data}
                            noParent={i}
                            isChecked={dt.isChecked}
                            dataQA={selectorQA?.dataQA}
                            key={index}
                            keydata={index}
                          />
                          <Gap width={10} />
                        </>
                      );
                    })}
                  </View>
                </View>
                <Gap height={20} />
              </>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  detailPertanyaan: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#020202',
  },
  label: {
    fontWeight: 'bold',
  },
  containerjawaban: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  tabViewContainer: {
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  tabView: {
    backgroundColor: 'white',
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
