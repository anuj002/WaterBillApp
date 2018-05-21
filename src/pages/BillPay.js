import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
    Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView, Image,
    Alert, Button, AsyncStorage, Dimensions, TextInput, StatusBar, Switch, Keyboard
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import Loader from '../components/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListPopover from '../components/ListPopover';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


export default class BillPay extends Component {

    constructor() {
        super();
        this.state = { 
            loading:false,
            isVisible:false,
            arrItems:[],
            selectedIndex:-1,
            switchValue: false,
            arrState:['Andra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa'
            ,'Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala'
            ,'Madya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Punjab'
            ,'Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttaranchal','Uttar Pradesh','West Bengal',
            'Andaman and Nicobar Islands','Chandigarh','Dadar and Nagar Haveli,','Daman and Diu','Delhi',
            'Lakshadeep','Pondicherry'
            ],
            arrDistrict:['Ajmer','Jaipur','Sikar', 'Jhunjhunu', 'Kota', 'Jodhpur', 'Udaipur','Karoli'],
            arrBillType:['Water Bill', 'Electricity Bill'],
            selectedState:'Select-State',
            selectedDistrict:'Select-District',
            selectedBillType:'Select-Bill-Type',
            waterReding:'',
            totalAmount:'',
            showAmount:false
        }
    }

    updateValue() {
        if(this.state.selectedState == 'Select-State' ){
            this.refs.toast.show('Please select any State!', 500, () => { });
        } 
        else if(this.state.selectedDistrict == 'Select-District' ) {
            this.refs.toast.show('Please select any District!', 500, () => { });
        } 
        else if(this.state.selectedBillType == 'Select-Bill-Type' ) {
            this.refs.toast.show('Please select type of bill!', 500, () => { });
        }
        else if(this.state.selectedBillType == 'Electricity Bill' ) {
            this.refs.toast.show('Please select type of bill Water!', 500, () => { });
        }
        else if(this.state.waterReding != '') {
            let total = (parseFloat(this.state.waterReding) * 8.5)
            var totalWithTax = total + ((total * 14) / 100)
            if(this.state.switchValue == true) {
                totalWithTax = totalWithTax+((totalWithTax*7)/100)
            } 
            
            this.setState({ showAmount: true, totalAmount: parseFloat(totalWithTax).toFixed(2) })
        } else {
            this.setState({ showAmount: false, totalAmount: '' })
        }
    }

    
    showLoading(isLoading) {
        if (isLoading) {
            this.setState({
                loading: true
            });

        } else {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='#4E5BFD'
                    barStyle="light-content"
                />

                <Toast ref="toast"/>


                <Loader
                    loading={this.state.loading} 
                    color='#000'/>

                {/* Navigation Bar */}
                <View style={styles.navigationBarDesign}>

                    <Text style={styles.navigationTitleStyle}> bill-detail </Text>
                </View>

                {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false}> */}

                    <View style={styles.containerView}>
                        
                        <View style={{width:viewportWidth-40,height:viewportHeight-60,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                                 
                            <TouchableHighlight underlayColor='transparent'  
                                    style={{ width:'100%',height:50,marginTop:10,borderColor:'white',borderWidth:.8,borderRadius:5,alignItems:'center',justifyContent:'center' }}                                
                                    onPress={() => 
                                        {    
                                            this.setState({arrItems:this.state.arrState})
                                            this.setState({ isVisible: true,selectedIndex:0 })
                                        }}>

                                <View style={{width:viewportWidth-60,height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                    
                                    <Text style={{ fontSize: 17, fontWeight: "500",textAlign:'left', color: 'rgba(168,218,235,1.0)'
                                        }}> {this.state.selectedState} </Text>

                                    <Image source={require('./../assets/DownArrow.png')}
                                        style={{ width: 25,  height: 25, alignSelf: 'center' }}/>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor='transparent'
                                    style={{ width:'100%',height:50,marginTop:10,borderColor:'white',borderWidth:.8,borderRadius:5,alignItems:'center',justifyContent:'center' }}
                                    onPress={() => 
                                        {    
                                            this.setState({arrItems:this.state.arrDistrict})
                                            this.setState({ isVisible: true,selectedIndex:1 })
                                        }}>
                            
                                <View style={{width:viewportWidth-60,height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                    
                                    <Text style={{ fontSize: 17, fontWeight: "500",textAlign:'left', color: 'rgba(168,218,235,1.0)'
                                        }}> {this.state.selectedDistrict} </Text>

                                    <Image source={require('./../assets/DownArrow.png')}
                                        style={{ width: 25,  height: 25, alignSelf: 'center' }} />

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor='transparent'
                                    style={{ width:'100%', height:50, marginTop:10, borderColor:'white', borderWidth:.8, borderRadius:5, alignItems:'center', justifyContent:'center' }}                                    
                                    onPress={() => 
                                        {    
                                            this.setState({arrItems:this.state.arrBillType})
                                            this.setState({ isVisible: true,selectedIndex:2 })
                                        }}>
                                
                                <View style={{ width:viewportWidth-60, height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                
                                    <Text style={{
                                        fontSize: 17, fontWeight: "500",textAlign:'left', color: 'rgba(168,218,235,1.0)'
                                    }}> {this.state.selectedBillType} </Text>

                                    <Image source={require('./../assets/DownArrow.png')}
                                        style={{ width: 25,  height: 25, alignSelf: 'center' }}/>

                                </View>
                            </TouchableHighlight>
                       
                            <TextInput style={{ height:50, width: viewportWidth-40, fontWeight:'200', fontSize:15, color:'white',
                                                marginTop:10, paddingLeft:10, borderColor:'white', borderWidth:.8, borderRadius:5
                                            }}
                                placeholder="Consumed-water (In cubics)"
                                placeholderTextColor={'rgba(168,218,235,1.0)'}
                                autoCorrect={false}
                                keyboardType='numeric'
                                returnKeyType='done'
                                maxLength={3}
                                underlineColorAndroid="transparent"
                                onChangeText={(waterReding) => this.setState({ waterReding })}
                                value={this.state.waterReding} 
                                onSubmitEditing={() => 
                                    {
                                        this.updateValue();
                                    }}
                            />

                            <View style={{ width:viewportWidth-40, height:50, flexDirection:'row',
                                alignItems:'center', justifyContent:'space-between'}}>
                                
                                <Text style={{ fontSize: 14, color: 'rgba(168,218,235,1.0)' }}>Per unit charge : <Text style={{
                                    fontSize: 17, fontWeight: "700", color: 'white' }}> 8.5/_</Text> </Text>
                                
                                <Text style={{ fontSize: 14, color: 'rgba(168,218,235,1.0)' }}>Tax : <Text style={{
                                    fontSize: 17, fontWeight: "700", color: 'white' }}>14% </Text></Text>
                            </View>

                            {this.state.showAmount == true && this.state.waterReding != '' &&
                                <View style={{ width:viewportWidth-40, height:50, flexDirection:'row',
                                    alignItems:'center', justifyContent:'space-between' }}>
                                    
                                    <View>
                                        <Text style={{ fontSize: 14, color: 'rgba(168,218,235,1.0)' }}>After due date :</Text>
                                        
                                        <Text style={{ fontSize: 12, color: 'rgba(168,218,235,1.0)' }}>(7% extra)</Text>
                                    </View>

                                    <Switch tintColor={'rgba(225,225,225,1.0)'} onTintColor={'rgba(225,225,225,1.0)'} thumbTintColor={'cyan'}
                                        style={{ transform: [{ scaleX: .99 }, { scaleY: .99 }] }}
                                        onValueChange={(switchValue) => 
                                            { 
                                                this.setState({switchValue}, function(){
                                                    this.updateValue();
                                                })
                                            }}
                                        value={(this.state.switchValue)}
                                    />
                                </View>
                            }
                        
                            {this.state.showAmount == true && this.state.waterReding != '' &&
                                <View style={{ width:viewportWidth-40, height:50, flexDirection:'row',
                                    alignItems:'center', justifyContent:'space-between'}}>
                                    
                                    <View>
                                        <Text style={{ fontSize: 14, color: 'rgba(168,218,235,1.0)' }}>Total Amount : </Text>
                                        { this.state.switchValue == true &&
                                            <Text style={{ fontSize: 12, color: 'rgba(168,218,235,1.0)' }}>(After due Date)</Text>
                                        }
                                    </View>

                                    <Text style={{ fontSize: 17, fontWeight: "700", color: 'white' }}>{this.state.totalAmount}</Text>
                                </View>
                            }

                            {this.state.showAmount == true && this.state.waterReding != '' &&
                                <View style={{ width: 120, height: 50, borderColor: 'white', borderWidth:.8, borderRadius:5,
                                    alignItems:'center', justifyContent:'center', marginTop: 50 }}>
                                    
                                    <TouchableHighlight underlayColor='transparent'  
                                            style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center' }}
                                            onPress={() => 
                                                { 
                                                    Keyboard.dismiss();
                                                    Actions.BillPaySuccess({'totalAmount': this.state.totalAmount});
                                                }}>
                            
                                        <Text style={{ fontSize: 17, fontWeight: '700', color: 'rgba(168,218,235,1.0)' }}>Pay</Text>
                                    </TouchableHighlight>
                                </View>
                            }

                            <ListPopover
                                list={this.state.arrItems}
                                isVisible={this.state.isVisible}
                                onClick={(item) => 
                                    {
                                        if (this.state.selectedIndex == 0) {
                                            this.setState({ selectedState: item })
                                        }
                                        else if (this.state.selectedIndex == 1) {
                                            this.setState({ selectedDistrict: item })
                                        }
                                        else if (this.state.selectedIndex == 2) {
                                            this.setState({ selectedBillType: item })
                                        }
                                    }}
                                onClose={() => 
                                    {
                                        this.setState({isVisible: false })
                                    }}
                            />
                        </View>
                    </View>
                {/* </KeyboardAwareScrollView> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', flex: 1,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#4E5BFD'
    },
    navigationBarDesign: {
        flexDirection: 'row', width: viewportWidth,height: 60,
        justifyContent: 'center', alignItems: 'center',
        
    },
    navigationTitleStyle: {
        fontSize: 20, fontWeight: "500", alignSelf: 'center',
        textAlign: 'center', color: '#fff'
    },
    containerView: {
        alignItems: 'flex-start',flexDirection:'row', justifyContent: 'center',width:viewportWidth,height:viewportHeight-60
      
    },
});