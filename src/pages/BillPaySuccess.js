import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView, Image,
    Alert, Button, AsyncStorage, Dimensions, TextInput, StatusBar, Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class BillPaySuccess extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>

            <StatusBar
                    backgroundColor='#4E5BFD'
                    barStyle="light-content"
                />

                <View style={{ width: viewportWidth, height: viewportHeight, alignItems:'center', justifyContent: 'center' }}>
                    
                    <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: 'cyan', alignItems:'center', justifyContent: 'center' }}>
                        <Image style={{ width: 30, height: 30, tintColor:'#000' }}
                            source={require('./../assets/correct_signal.png')} />
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'rgba(168, 218, 235, 1.0)', marginTop: 30 }}>Payment Successful</Text>

                    <Text style={{ fontSize: 25, color: '#fff', marginTop: 10  }}>₹ {this.props.totalAmount}</Text>

                    <View style={{ width: 120, height: 50, borderColor: 'white', borderWidth:.8, borderRadius:5,
                                    alignItems:'center', justifyContent:'center', marginTop: 50 }}>
                                    
                        <TouchableHighlight underlayColor='transparent'  
                                style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center' }}
                                onPress={() => 
                                    { 
                                        Actions.BillPay();
                                    }}>
                
                            <Text style={{ fontSize: 17, fontWeight: '700', color: 'rgba(168, 218, 235, 1.0)' }}>Done</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', width:viewportWidth,height:viewportHeight,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#4E5BFD'
    }
});