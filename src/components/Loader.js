import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,Dimensions,
    ActivityIndicator,Text
} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Loader = props => {
    const {
        loading,color,text,BGColor,textMessageColor,
        ...attributes
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
                <View style={{ backgroundColor: BGColor,height: viewportHeight,width: viewportWidth,borderRadius: 10,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <ActivityIndicator
                        size="large"
                        color = {color}
                        // color = '#4E5BFD'
                        animating={loading} />
                        <Text style={{width:viewportWidth-60,height:60,color:textMessageColor, textAlign:'center'}}>{text}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default Loader;