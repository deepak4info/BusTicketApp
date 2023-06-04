import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const BtnComp = ({
  btnNameComp, 
  onPress = () => { }, 
}) => {
  const Navigation= useNavigation();

  return (
    <TouchableOpacity style={styles.btnContainer}
    onPress={onPress}
    >
      <View> 

      { (btnNameComp=='SignUp') ?
   
      <Text style={styles.btnSignup}> Sign Up</Text>
       : 
       <Text style={styles.btnSignup}>{btnNameComp}</Text>
       }
      
      </View>
      <View style={styles.btnbox}> 
      <Image source={require('../../Assets/Images/next.png')} style={styles.btnboxImg} />
      </View>
    </TouchableOpacity>
  )
}

export default BtnComp

const styles = StyleSheet.create({
  btnContainer:
  { flex:0.1, flexDirection:'row', backgroundColor: '#5669FF', justifyContent: 'center', alignItems: 'center', width:'82%', height:responsiveHeight(8), borderRadius:10, marginTop:responsiveHeight(4),marginHorizontal:'9%' },
  btnSignup:
  {fontSize:responsiveFontSize(2.5), fontWeight:'700', color:'#fff', marginLeft:responsiveWidth(2),},
btnbox:{justifyContent:'flex-end', position:'absolute', right:responsiveWidth(8),},
btnboxImg:{width:responsiveWidth(8), height:responsiveHeight(5), alignSelf:'flex-end',}
})