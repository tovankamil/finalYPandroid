import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ATOMJawaban} from '../../atoms';

const CBQANEWv2 = ({dataQA, tipe}) => {
  const selector1 = useSelector(state => state.jawabanRespondenReducer);
  return (
    <View>
      {dataQA.jawaban.map((d, i) => {
        const carijawaban = selector1.data_jawaban.findIndex(dx => {
          return dx.idjawaban === d._id;
        });

        return (
          <ATOMJawaban
            data={d}
            tipe={tipe}
            key={i}
            idPertanyaan={dataQA._id}
            namaResponden="tofan"
            idjawaban={d._id}
            check={carijawaban >= 0 ? true : false}
          />
        );
      })}
    </View>
  );
};

export default CBQANEWv2;