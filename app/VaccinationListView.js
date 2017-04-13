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

import VaccinationView from './VaccinationView'

export default class VaccinationListView extends Component {
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <VaccinationView data={rowData} />}
        renderSectionHeader={(sectionData, sectionID) => {
          return <Text style={styles.titleText}>{sectionID}</Text>}
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('VaccinationListView', () => VaccinationListView);
