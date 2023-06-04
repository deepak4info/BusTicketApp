import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const GoogleBox = ({Account}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerBox}>
      <Text style={styles.containerBoxText}>OR</Text>

      <TouchableOpacity style={styles.socialbox}
      onPress={()=>{navigation.navigate('LoginWithGoogle')}}
      > 
        <Image source={require('../../Assets/Images/google.png')} style={styles.socialboxImg} />
        <Text  style={styles.socialboxText}> Login With Google </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialbox}
        onPress={()=>{navigation.navigate('GuestUser')}}
      
      > 
        <Image source={require('../../Assets/Images/user.png')} style={styles.socialboxImg} />
        <Text style={styles.socialboxText}> Guest User Login</Text>
      </TouchableOpacity>
{ (Account == 'SignIn') ? 
  <View style={{flexDirection:'row', marginVertical:responsiveHeight(4),}}> 
<Text style={styles.socialboxText}>Don't Have an account?</Text>
<TouchableOpacity onPress={()=>{
    navigation.navigate('SignUpScreen')
}}> 
<Text style={[styles.socialboxText,{color:'#3D56F0'}]}>Sign Up</Text>
</TouchableOpacity>
</View>
:
<View style={{flexDirection:'row',marginVertical:responsiveHeight(4),}}> 
<Text style={styles.socialboxText}>Already Have an account ?</Text>
<TouchableOpacity onPress={()=>{
    navigation.navigate('SignInScreen')
}}> 
<Text style={[styles.socialboxText,{color:'#3D56F0'}]}>Sign In</Text>
</TouchableOpacity>
</View>
}

    </View>
  )
}

export default GoogleBox

const styles = StyleSheet.create({
  containerBox:{flex:0.25, width:'100%', justifyContent:'center', alignItems:'center'},
  containerBoxText:{fontSize:responsiveFontSize(2.4),color:'#9d9898', fontWeight:'900',marginTop:responsiveHeight(2)},
socialbox:{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%',marginTop:responsiveHeight(2)},
socialboxImg:{width:responsiveWidth(10), height:responsiveHeight(6)},
socialboxText:{fontSize:responsiveFontSize(2), color:'#000', fontWeight:'500', marginLeft:responsiveWidth(3)},

})