import React from 'react';
import {StyleSheet, View} from 'react-native';


import {Picker} from '@react-native-community/picker';

const Desa = ({label, value, onSelectChange,namaSelect ,datax})=> {
     const Pilih = () =>{
         if( namaSelect==='Pilih Desa')
    {
      if(typeof datax !=='undefined' && Object.keys(datax).length ==0 && namaSelect==='Pilih Desa'){
     return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
                   <Picker.Item label="Pilih Desa" value={0} key={0} />


        </Picker>
      </View>

     )
    }
    else{
         return (
          <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          >
            <Picker.Item label="Pilih Desa" value={0} key={0} />
            {datax && datax.map((data,index)=>{
                return   <Picker.Item label={data.value} value={data.desa_id} key={index} />
            })}


        </Picker>
      </View>

     )
    }
  }
     }

  return (
    <View>
    {Pilih}
    </View>
  );
};
export default Desa;
const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});