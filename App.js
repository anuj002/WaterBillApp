/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Root } from 'native-base';


import BillHome from './src/pages/BillHome';
import BillPay from './src/pages/BillPay';
import BillPaySuccess from './src/pages/BillPaySuccess';


export default class App extends Component {

  constructor() {
    super();
    
    this.state = { };
  }

  render() {
    return (
      <Root>
        <Router>
          <Scene key="root">
         
            <Scene initial key = "BillHome" component={BillHome}  hideNavBar panHandlers={null}/>
            <Scene key = "BillPay" component={BillPay}  hideNavBar panHandlers={null}/>
            <Scene key = "BillPaySuccess" component={BillPaySuccess}  hideNavBar panHandlers={null}/>

          </Scene>
        </Router>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
