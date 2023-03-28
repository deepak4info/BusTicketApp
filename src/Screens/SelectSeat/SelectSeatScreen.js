import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BusesFound from '../../CommanComponents/BusesFound/BusesFound'
import BookSeat from '../../CommanComponents/BookSeat/BookSeat'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'
import { useNavigation } from '@react-navigation/native'




const SelectSeatScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, }}>
            <HeaderComp
                rightIcon='openmenu'
            />
            <ScrollView>
                <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                    <Text style={{ fontSize: 30, color: '#120D26', fontWeight: '900', }}>Select A seats</Text>
                </View>
                <BusesFound
                   onPress={() => navigation.navigate('SelectPickUpandDropPoint')}
                />

                <BookSeat/>
                <BtnComp 
                btnNameComp='Book Selected Seats'
                 onPress={() => navigation.navigate('SelectPickUpandDropPoint')}
                />
            </ScrollView>
        </View>
    )
}

export default SelectSeatScreen

const styles = StyleSheet.create({})