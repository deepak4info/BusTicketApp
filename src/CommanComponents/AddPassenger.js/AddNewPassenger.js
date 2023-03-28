import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import React from 'react'

const AddNewPassenger = () => {
  return (
    <View style={{flex:1, backgroundColor:'green', flexDirection:'column'}}>
      <View style={{}}>
        <Image 
        source={require('../../Assets/Images/user.png')}
        style={{width:30, height:30}}
        />        
      <TextInput
      placeholder='Passenger Name'
      />
      </View>
    </View>
  )
}

export default AddNewPassenger

const styles = StyleSheet.create({})