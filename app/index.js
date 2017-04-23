
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ListView
} from 'react-native'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob';

import DosesListView from './DosesListView';
import DosesDataSource from './model/DosesDataSource';
import AddChildModal from './AddChildModal';

export default class Babycare extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      babyRecordCount: 0
    }
    DosesDataSource.getBabyRecords().then((babyRecords) => {
        this.setState({modalVisible: !babyRecords || babyRecords.length === 0});
    });
  }
  addBabyRecord(babyRecord) {
    DosesDataSource.addBabyRecord(babyRecord).done();
    this.setState({modalVisible: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AddChildModal visible={this.state.modalVisible} onClose={this.addBabyRecord.bind(this)}/>
        <DosesListView />
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
