import React from 'react'
import { Text, StyleSheet, View} from 'react-native'

const Span = ({label}) =>{
    return(
         <View>
             <Text style={styles.label}>{label}</Text>
         </View>

    )
}

export default Span;

const styles = StyleSheet.create({
    label:{
        fontSize:11,
        fontFamily:'Poppins-reguler',
        color:'red',
        marginBottom:10,
        marginTop:2
    },

})
