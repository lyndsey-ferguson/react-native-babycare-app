import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';

import styles from './SelectChildModalStyleSheet';
import navBarStyles from '../_shared/NavBarStyleSheet';

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
    const babyRecordsChanged = (this.props.babyRecords !== nextProps.babyRecords);
    const editModeChanged = (this.props.isEditing !== nextProps.isEditing);
    const childIdUnderDeleteChanged = (this.props.childIdToDelete !== nextProps.childIdToDelete);

    if (babyRecordsChanged || editModeChanged || childIdUnderDeleteChanged) {
      const { isEditing } = nextProps;

      const babyRecords = Object.keys(nextProps.babyRecords).map(function(key, index) {
        return Object.assign({}, nextProps.babyRecords[key], {isEditing});
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(babyRecords)
      });
    }
  }
  childDeleteConfirm(childId) {
    const { babyRecords, isDirty } = this.props;
    const babyRecord = babyRecords[childId];
    console.log('childDeleteConfirm with: ' + JSON.stringify(babyRecord));

    Alert.alert(
      'Remove Child',
      `Are you sure you want to remove ${babyRecord.name}?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', onPress: () => this.props.DeleteChild(childId)},
      ],
      { cancelable: true }
    );
  }
  renderChildItem(key, childName, childIndex) {
    const { babyRecords, isEditing } = this.props;

    const childId = Object.keys(babyRecords)[childIndex];
    const childCount = Object.keys(babyRecords).length;

    const deleteChildButton = isEditing && childCount > 1 ? (
      <Icon.Button
        name='minus-circle'
        color={'#FF0000'}
        backgroundColor={'#FFFFFF'}
        size={20}
        borderRadius={0}
        iconStyle={{ marginTop: -6, marginBottom: -6, marginLeft: -2, marginRight: -2 }}
        onPress={() => this.childDeleteConfirm(childId)}
      />
    ) : undefined;

    const swipeoutButtons = [
      {
        text: 'Delete',
        backgroundColor: '#FF0000',
        onPress: () => this.childDeleteConfirm(childId)
      }
    ];
    return (
      <Swipeout right={swipeoutButtons} disabled={childCount == 1 || !isEditing} >
        <View style={styles.container}>
          {deleteChildButton}
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.SelectChild(childId)}>
              <Text style={styles.name}>
                {childName}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swipeout>
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
  confirmDone() {
    const { isDirty, babyRecords, SetDisplay, ChangeChildren } = this.props;
    if (!isDirty) {
      SetDisplay(false, {});
      return;
    }

    Alert.alert(
      'Done Editing',
      `Your changes to the list of children will be saved. Continue?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Continue', onPress: () => ChangeChildren(babyRecords)},
      ],
      { cancelable: true }
    );
  }
  renderNavBarButtons() {
    const { babyRecords, isEditing } = this.props;

    const editDoneText = isEditing ? 'Done' : 'Edit';
    const editDoneHandler = isEditing ? this.confirmDone.bind(this) : this.props.EditChildren;

    return (
      <View style={navBarStyles.navBar}>
        <View style={navBarStyles.leftContainer}>
          <Button onPress={() => this.props.SetDisplay(false, {})} title='Cancel' />
        </View>
        <Text style={{ fontSize: 18, color: '#FFFFFF' }}>
          Select Child
        </Text>
        <View style={navBarStyles.rightContainer}>
          <Button onPress={() => editDoneHandler(!isEditing)} title={editDoneText} />
        </View>
      </View>
    );
  }

  render() {
    const { babyRecords } = this.props;
    const renderedCancelButton = this.renderNavBarButtons();
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
