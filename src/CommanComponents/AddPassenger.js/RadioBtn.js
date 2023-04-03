import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RadioBtn = () => {
    const [selectedRadio,setSelectedRadio] = useState(1)
  return (
    <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-start'}}>

     <TouchableOpacity onPress={()=>setSelectedRadio(1)}> 
     <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{height:20, width:20, borderColor:'#000', borderWidth:2,borderRadius:10,margin:5}}> 
            {
                selectedRadio === 1 ? <View style={{backgroundColor:'black', height:8,width:8,borderRadius:8,margin:4}}>
                    </View>: null
            }
        </View>
        <Text style={{fontSize:14, color:'#000',fontWeight:'600'}}> Male</Text> 

     </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>setSelectedRadio(2)}> 
     <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{height:20, width:20, borderColor:'#000', borderWidth:2,borderRadius:10,margin:5}}> 
            {
                selectedRadio === 2 ? <View style={{backgroundColor:'black', height:8,width:8,borderRadius:8,margin:4}}>
                    </View>: null
            }
        </View>
        <Text style={{fontSize:14, color:'#000',fontWeight:'600'}}> female</Text> 

     </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>setSelectedRadio(3)}> 
     <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{height:20, width:20, borderColor:'#000', borderWidth:2,borderRadius:10,margin:5}}> 
            {
                selectedRadio === 3 ? <View style={{backgroundColor:'black', height:8,width:8,borderRadius:8,margin:4}}>
                    </View>: null
            }
        </View>
        <Text style={{fontSize:14, color:'#000',fontWeight:'600'}}> Other</Text> 

     </View>
     </TouchableOpacity>

    </View>
  )
}

export default RadioBtn

const styles = StyleSheet.create({})