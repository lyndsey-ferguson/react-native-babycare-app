import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Button
} from 'react-native';

import styles from './SelectChildModalStyleSheet';
import navBarStyles from './NavBarStyleSheet';

export default class SelectChildModal extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource( { rowHasChanged: (r1, r2) => r1 !== r2 } );

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  getInitialState() {
    return {
      dataSource: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.babyRecords)
    })
  }

  renderChildItem(key, childName, childId) {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.childChanged(childId)}>
            <Text style={styles.name}>
              {childName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderChildrenListView() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData, sectionID, childId) => {
          const key = `section:${sectionID};row:${childId}`;
          return this.renderChildItem(key, rowData.name, childId);
        }}
      />
    );
  }
  renderCancelButton() {
    return (
      <View style={navBarStyles.navBar}>
        <View style={navBarStyles.leftContainer}>
          <Button onPress={this.props.cancel} title='Cancel' />
        </View>
        <Text style={{ fontSize: 18, color: '#FFFFFF' }}>
          Select Child
        </Text>
        <View style={navBarStyles.rightContainer}>
          <View/>
        </View>
      </View>
    );
  }

  render() {
    const { currentBabyRecordId, babyRecords } = this.props;

    const renderedCancelButton = this.renderCancelButton()
    const renderedChildrenListView = this.renderChildrenListView();

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
      >
        <View style={styles.modalContent}>
          {renderedCancelButton}
          {renderedChildrenListView}
        </View>
      </Modal>
    );
  }
};
