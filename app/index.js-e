
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

import VaccinationView from './VaccinationView'

export default class Babycare extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <VaccinationView data={{name: 'doggy', dose: '1x day'}} />
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </ScrollView>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError} />
      </View>
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
