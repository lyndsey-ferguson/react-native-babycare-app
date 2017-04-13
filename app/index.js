
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
} from 'react-native-admob'

import VaccinationView from './VaccinationView'

export default class Babycare extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }
    );
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(
        {
          'birth' : [
            {
              name: 'hepatitis b',
              dose: '1st dose'
            }
          ],
          '1 to 2 months' : [
            {
              name: 'hepatitis b',
              dose: '2nd dose'
            }
          ]
        }
      )
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <VaccinationView data={rowData} />}
          renderSectionHeader={(sectionData, sectionID) => {
            return <Text style={styles.titleText}>{sectionID}</Text>}
          }
        />
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
