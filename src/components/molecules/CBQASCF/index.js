import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ATOMJawaban, ATOMSCF} from '../../atoms';

const CBQASCF = ({dataQA, tipe}) => {
  const selector1 = useSelector(state => state.scfjawabanRespondenReducer);

  return (
    <View>
      {dataQA.jawaban.map((d, i) => {
        const carijawaban = selector1.data_jawaban.findIndex(dx => {
          return dx.idjawaban === d._id;
        });

        return (
          <ATOMSCF
            data={d}
            tipe={tipe}
            key={i}
            keydata={i}
            idPertanyaan={dataQA._id}
            namaResponden="tofan"
            idjawaban={d._id}
            placeholder={d.placeholder}
            tipesubjawaban={d.subjawaban}
            check={carijawaban >= 0 ? true : false}
          />
        );
      })}
    </View>
  );
};

export default React.memo(CBQASCF);
