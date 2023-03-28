import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp';
import PickupAndDropBox from '../../CommanComponents/PickupAndDropBox';
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp';


const SelectPickUpandDropPoint = () => {
  const navigation = useNavigation();
  return (
        <View style={{ flex: 1, }}>
            <HeaderComp
                rightIcon='openmenu'
            />
            <ScrollView>
                <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                    <Text style={{ fontSize: 24, color: '#120D26', fontWeight: '700', }}>Select Pick Up & Drop Point</Text>
                    <Text style={{ fontSize: 14, color: '#120D26', fontWeight: '600',marginVertical:30,}}>Available Pick Points</Text>
                  <PickupAndDropBox rightImg={true} />
                  <PickupAndDropBox/>
                  <Text style={{ fontSize: 14, color: '#120D26', fontWeight: '600',marginVertical:30,}}>Available Drop Points</Text>
                  <PickupAndDropBox/>

                </View>
                <BtnComp 
                btnNameComp='Confirm & Proceed'
                 onPress={() => navigation.navigate('PassengerDetails')}
                />

                </ScrollView>

          </View>
  )
}

export default SelectPickUpandDropPoint

const styles = StyleSheet.create({})