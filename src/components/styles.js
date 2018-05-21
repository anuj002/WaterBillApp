import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';
const deviceScreen = require('Dimensions').get('window')
import { ifIphoneX } from 'react-native-iphone-x-helper';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

module.exports = StyleSheet.create({


  ApplistView: {
    width: viewportWidth,
    ...Platform.select({
      ios: {
        ...ifIphoneX({
          height: viewportHeight-(50 + 45),
        }, {
            height: viewportHeight-(20 + 45),
          })
      },
      android: {
        height:viewportHeight-(30 + 45),
      },
    }),
  },

});
