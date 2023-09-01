import React from 'react';
import {View} from 'react-native';
import {ATOMSCF} from '../../atoms';

const CBQASCF = ({dataQA, tipe}) => {
  return (
    <View>
      {dataQA.jawaban.map((d, i) => {
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
            // check={carijawaban >= 0 ? true : false}
          />
        );
      })}
    </View>
  );
};

export default React.memo(CBQASCF);
