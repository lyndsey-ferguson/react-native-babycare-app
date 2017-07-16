import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  addChild,
  setAddChildModalVisibility,
  changeGender,
  changeName,
  changeChildImage,
  doseTapped,
  setSelectChildModalVisibility,
  childSelected,
  childChanged
} from './actions';
import AddChildModal from './components/AddChildModal/AddChildModal';
import DosesListView from './components/DosesListView/DosesListView';
import InfoBar from './components/InfoBar/InfoBar';
import SelectChildModal from './components/SelectChildModal/SelectChildModal';

class App extends Component {
  render() {
    const currentBabyRecord = this.props.babyRecords[this.props.currentBabyRecordId] || {};
    const selectedDoses = currentBabyRecord.selectedDoses || [];
    console.log('babyRecords: ' + JSON.stringify(this.props.babyRecords));
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AddChildModal
          visible={this.props.addChildModal.visible}
          allowCancel={this.props.addChildModal.allowCancel}
          gender={this.props.addChildModal.gender}
          name={this.props.addChildModal.name}
          changeGender={this.props.changeGender}
          changeName={this.props.changeName}
          addChild={this.props.addChild}
          cancel={() => this.props.setAddChildModalVisibility(false)}
          setAddChildModalVisibility={this.props.setAddChildModalVisibility}
          />
        <SelectChildModal
          visible={this.props.selectChildModal.visible}
          childSelected={this.props.childSelected}
          childChanged={this.props.childChanged}
          currentBabyRecordId={this.props.currentBabyRecordId}
          cancel={() => this.props.setSelectChildModalVisibility(false)}
          babyRecords={this.props.babyRecords}
         />
        <InfoBar
          babyRecord={currentBabyRecord}
          babyRecords={this.props.babyRecords}
          changeImage={this.props.changeChildImage}
          setAddChildModalVisibility={this.props.setAddChildModalVisibility}
          setSelectChildModalVisibility={this.props.setSelectChildModalVisibility} />
        <DosesListView doseTapped={this.props.doseTapped} selectedDoses={currentBabyRecord.selectedDoses}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = (state) => {
  return {
    currentBabyRecordId: state.babycare.currentBabyRecordId,
    babyRecords: state.babycare.babyRecords,
    addChildModal: state.babycare.addChildModal,
    selectChildModal: state.babycare.selectChildModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addChild,
    changeGender,
    changeName,
    changeChildImage,
    doseTapped,
    setAddChildModalVisibility,
    setSelectChildModalVisibility,
    childSelected,
    childChanged
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
