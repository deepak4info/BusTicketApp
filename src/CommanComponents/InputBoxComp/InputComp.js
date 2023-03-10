import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import BtnComp from '../BtnComponent/BtnComp'
import { useNavigation } from '@react-navigation/native'




const InputComp = ({
  textLabel,
  FullName,
  ConfirmPassword,
  Forgot,
}) => {
  const Navigation= useNavigation();
  return (
    <View style={{flex:0.50, width:'88%',alignItems:'flex-start', marginHorizontal:'6%',  }}>
     { (textLabel == 'SignIn') ? 
   <Text style={{fontSize:25, color:'#000', fontWeight:'800'}}> Sign In</Text>
   : 
   <Text style={{fontSize:25, color:'#000', fontWeight:'800'}}> Sign Up</Text>
  }

{ (FullName == 'SignUp') ? 
<View> 
<View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
    <Image source={require('../../Assets/Images/user.png')} style={{width:20, height:20}} />
     <TextInput placeholder='Full Name' placeholderTextColor='#000' 
     style={{ width:'85%',paddingLeft:10}}
     />
  </View> 
    <View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
    <Image source={require('../../Assets/Images/envelope.png')} style={{width:20, height:20}} />
     <TextInput placeholder='E-mail' placeholderTextColor='#000' 
     style={{ width:'85%',paddingLeft:10}}
     />
  </View>
  </View>
: 
<View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
<Image source={require('../../Assets/Images/envelope.png')} style={{width:20, height:20}} />
 <TextInput placeholder='E-mail' placeholderTextColor='#000' 
 style={{ width:'85%',paddingLeft:10}}
 />
</View>
  
}

{ (ConfirmPassword == 'SignUp') ? 

  <View style={{width:'96%'}}> 
  <View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
    <Image source={require('../../Assets/Images/padlock.png')} style={{width:20, height:20, marginLeft:30,}} />
     <TextInput placeholder='Password' placeholderTextColor='#000' 
     style={{ width:'85%',paddingLeft:10}}
     />
         <Image source={require('../../Assets/Images/hidden.png')} style={{width:20, height:20, marginRight:30,}} />
  </View>
    <View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
    <Image source={require('../../Assets/Images/padlock.png')} style={{width:20, height:20, marginLeft:30,}} />
     <TextInput placeholder='Confirm Password' placeholderTextColor='#000' 
     style={{ width:'85%',paddingLeft:10}}
     />
         <Image source={require('../../Assets/Images/hidden.png')} style={{width:20, height:20, marginRight:30,}} />
  </View>
  </View>

: 
<View style={{width:'96%', justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:1, color:'#e8e8e8', borderRadius:10, marginTop:20, marginLeft:'4%',}}>
<Image source={require('../../Assets/Images/padlock.png')} style={{width:20, height:20, marginLeft:30,}} />
 <TextInput placeholder='Password' placeholderTextColor='#000' 
 style={{ width:'85%',paddingLeft:10}}
 />
     <Image source={require('../../Assets/Images/hidden.png')} style={{width:20, height:20, marginRight:30,}} />
</View>

}


{ (Forgot == 'SignIn') ? 
  <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',  width:'100%', marginTop:30}}> 
    <TouchableOpacity
    onPress={()=>{Navigation.navigate('ForgetPassword')}}    
    >
       <Text style={{fontSize:18, fontWeight:'800', color:'#000'}}>Forgot Password ? </Text> 
    </TouchableOpacity>
  </View> : null }

    </View>
  )
}

export default InputComp

const styles = StyleSheet.create({})