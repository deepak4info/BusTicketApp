import { StyleSheet, Text, View,TextInput, Image,} from 'react-native'
import React from 'react'

const Contactdetails = () => {
  return (
    <View style={{flex:1, backgroundColor:'white', flexDirection:'column', marginHorizontal:'5%', width:'90%',
  padding:'5%',
    borderRadius:16,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
    
    }}>


      <View style={{flex:1,backgroundColor:'white', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderWidth:1,borderColor:'#e4dfdf',  marginVertical:'5%', borderRadius:8,}}>
        <Image 
        source={require('../../Assets/Images/user.png')}
        style={{width:30, height:30, marginHorizontal:15}}
        />        
      <TextInput
      placeholder='E-mail'
      />
      </View>
      <View style={{flex:1,backgroundColor:'white', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderWidth:1,borderColor:'#e4dfdf',  marginVertical:'5%', borderRadius:8,}}>
        <Image 
        source={require('../../Assets/Images/user.png')}
        style={{width:30, height:30, marginHorizontal:15}}
        />        
      <TextInput
      placeholder='Phone Number'
      />
      </View>
      <View style={{marginVertical:15}}>
    <Text>Note : Booking Details will be sent to above email & phone </Text>
      </View>
    </View>
  )
}

export default Contactdetails

const styles = StyleSheet.create({})