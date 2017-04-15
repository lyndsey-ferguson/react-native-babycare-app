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

import DoseView from './DoseView'

export default class DosesListView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }
    );
    var dosesData = require('./model/doses.json')['es']

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dosesData)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <DoseView data={rowData} />}
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

AppRegistry.registerComponent('DosesListView', () => DosesListView);
