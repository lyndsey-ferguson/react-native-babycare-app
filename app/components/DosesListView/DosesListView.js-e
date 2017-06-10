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

import DoseView from '../DoseView/DoseView'
import styles from './DosesListViewStyleSheet'

export default class DosesListView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }
    );
    var dosesData = require('../../model/doses.json')['es']

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dosesData)
    };
  }

  getInitialState() {
    return {
      dataSource: {}
    };
  }

  render() {
    return (
      <ListView style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowId) => {
          const theKey = `section:${sectionID};row:${rowId}`;
          return <DoseView
            key={theKey}
            id={rowData.id}
            name={rowData.name}
            data={rowData} />}
        }
        renderSectionHeader={(sectionData, sectionID) => {
          var capitalised = sectionID.charAt(0).toUpperCase() + sectionID.slice(1);
          const theKey = `section:${sectionID}`;
          return <Text key={theKey} style={styles.sectionHeader}>{capitalised}</Text>}
        }
      />
    );
  }
}

AppRegistry.registerComponent('DosesListView', () => DosesListView);
