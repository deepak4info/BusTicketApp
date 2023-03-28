import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from 'react-native'
import React, { useState } from 'react'

const BookSeat = () => {

    const [row1, setRow1] = useState([
        { empty: false, selected: false },  // book
        { empty: true, selected: false },  // avail
        { empty: true, selected: true },  // reserved
        { empty: false, selected: true },  // selected
        { empty: false, selected: false },  // book
        { empty: true, selected: false },  // avail
        { empty: true, selected: true },  // reserved

    ]);
    const [row2, setRow2] = useState([
  
        { empty: false, selected: false },  // book
        { empty: true, selected: false },  // avail
        { empty: true, selected: true },  // reserved
        { empty: false, selected: true },  // selected
         { empty: false, selected: false },  // book
        { empty: true, selected: false },  // avail
        { empty: true, selected: true },  // reserved
        { empty: false, selected: true },  // selected
    ]);

    const [row3, setRow3] = useState([
        { empty: false, selected: false },  // book
        { empty: true, selected: false },  // avail
        { empty: true, selected: true },  // reserved
        { empty: false, selected: true },  // selected


    ]);


    return (
        <View style={{ flex: 1, width: '80%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginHorizontal: '10%', borderRadius: 8, borderWidth: 1, borderColor: '#000' }}>

            <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, paddingVertical: 20, }}>

                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={require('../../Assets/Images/seat.png')}
                        style={{ width: 30, height: 30, tintColor: '#000', marginVertical: 5 }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000' }}>
                        Available
                    </Text>
                </View>

                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={require('../../Assets/Images/seat.png')}
                        style={{ width: 30, height: 30, tintColor: '#00FF00', marginVertical: 5 }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000' }}>
                        Selected
                    </Text>
                </View>

                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={require('../../Assets/Images/seat.png')}
                        style={{ width: 30, height: 30, tintColor: '#E74C3C', marginVertical: 5 }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000' }}>
                        Booked
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={require('../../Assets/Images/seat.png')}
                        style={{ width: 30, height: 30, tintColor: '#E48DF1', marginVertical: 5 }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000' }}>
                        Reserved
                    </Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'80%', marginVertical:15,}}>
                <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', }}>
                    <FlatList
                        data={row1}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ margin: 10 }}>
                                    {
                                        // reserved 
                                        item.empty == true && item.selected == true ? (<Image source={require('../../Assets/Images/seat.png')}
                                            style={{ width: 25, height: 25, tintColor: '#E48DF1' }} 
                                        />)
                                            // selected
                                            : item.empty == false && item.selected == true ? (<Image source={require('../../Assets/Images/seat.png')}
                                                style={{ width: 25, height: 25, tintColor:'#00FF00'}}
                                            />) 
                                            // available 
                                            : item.empty == true && item.selected == false ? (<Image source={require('../../Assets/Images/seat.png')}
                                                style={{ width: 25, height: 25,tintColor:'#000' }}
                                            />):
                                            // booked
                                            item.empty == false && item.selected == false ? (<Image source={require('../../Assets/Images/seat.png')}
                                            style={{ width: 25, height: 25,tintColor:'#E74C3C' }}
                                        />): null                                              
                                    }
                                </TouchableOpacity>)
                        }}

                    />
                </View>

                <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', }}>
                    <FlatList
                        data={row2}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ margin: 10 }}>
                                    {
                                        // reserved 
                                        item.empty == true && item.selected == true ? (<Image source={require('../../Assets/Images/seat.png')}
                                            style={{ width: 25, height: 25, tintColor: '#E48DF1' }} 
                                        />)
                                            // selected
                                            : item.empty == false && item.selected == true ? (<Image source={require('../../Assets/Images/seat.png')}
                                                style={{ width: 25, height: 25, tintColor:'#00FF00'}}
                                            />) 
                                            // available 
                                            : item.empty == true && item.selected == false ? (<Image source={require('../../Assets/Images/seat.png')}
                                                style={{ width: 25, height: 25,tintColor:'#000' }}
                                            />):
                                            // booked
                                            item.empty == false && item.selected == false ? (<Image source={require('../../Assets/Images/seat.png')}
                                            style={{ width: 25, height: 25,tintColor:'#E74C3C' }}
                                        />): null                                              
                                    }
                                </TouchableOpacity>)
                        }}

                    />
                </View>
            </View>


        </View>
    )
}

export default BookSeat

const styles = StyleSheet.create({})