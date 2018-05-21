import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView, Image,
    Alert, Button, AsyncStorage, Dimensions, TextInput, StatusBar, Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class BillHome extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        setTimeout(() => {
          Actions.BillPay()
        },3000);
    }


    render() {
        return (
            <View style={styles.container}>

            <StatusBar
                    backgroundColor='#4E5BFD'
                    barStyle="light-content"
                />

                <TouchableHighlight
                        underlayColor='transparent' 
                        onPress={() => 
                            {
                                // Actions.BillPay();
                            }}>

                    <Image style={{ width: 200, height: 200 }}
                        source={require('./../assets/Water.png')} />
                </TouchableHighlight>
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