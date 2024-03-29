import { StyleSheet, Text, View, TextInput, Image,} from 'react-native'
import React from 'react'
import RadioBtn from './RadioBtn'

const AddNewPassenger = () => {
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
      placeholder='Passenger Name'
      />
      </View>
      <View style={{flex:1,backgroundColor:'white', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderWidth:1,borderColor:'#e4dfdf',  marginVertical:'5%', borderRadius:8,}}>
        <Image 
        source={require('../../Assets/Images/user.png')}
        style={{width:30, height:30, marginHorizontal:15}}
        />        
      <TextInput
      placeholder='Passenger Age'
      />
      </View>
      <View style={{flex:1,}}>
        <Text style={{fontSize:18, color:'#000',fontWeight:'600', marginVertical:10, }}> 
          Gender 
        </Text>
        <RadioBtn/>

      </View>
    </View>
  )
}

export default AddNewPassenger

const styles = StyleSheet.create({})