import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

import {
  changeChildImage,
  doseTapped,
} from './actions';
import AddChildModal from './components/AddChildModal/AddChildModal';
import DosesListView from './components/DosesListView/DosesListView';
import InfoBar from './components/InfoBar/InfoBar';
import SelectChildModal from './components/SelectChildModal/SelectChildModal';
import * as AddChildActionCreators from './actions/AddChildActionCreators';
import * as ManageChildActionCreators from './actions/ManageChildActionCreators';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('App::componentWillReceiveProps: ' + JSON.stringify(nextProps));
  }
  renderAddChildModal() {
    return (
      <AddChildModal
        {...this.props.addChildModal}
        {...this.props.BoundAddChildActionCreators}
      />
    );
  }

  renderManageChildModal() {
    return (
      <SelectChildModal
        {...this.props.manageChildModal}
        {...this.props.BoundManageChildActionCreators}
       />
    );
  }

  renderInfoBar() {
    const currentBabyRecord = this.props.babyRecords[this.props.currentBabyRecordId] || {};

    return (
      <InfoBar
        babyRecord={currentBabyRecord}
        babyRecords={this.props.babyRecords}
        changeImage={this.props.changeChildImage}
        SetManageChildDialogDisplay={this.props.BoundManageChildActionCreators.SetDisplay}
        SetAddChildDialogDisplay={this.props.BoundAddChildActionCreators.SetDisplay} />
    );
  }

  render() {

    const currentBabyRecord = this.props.babyRecords[this.props.currentBabyRecordId] || {};

    const renderedAddChildModal = this.renderAddChildModal();
    const renderedSelectChildModal = this.renderManageChildModal();
    const renderedInfoBar = this.renderInfoBar();

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { renderedAddChildModal }
        { renderedSelectChildModal }
        { renderedInfoBar }
        <DosesListView
          doseTapped={this.props.doseTapped}
          selectedDoses={currentBabyRecord.selectedDoses} />
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError} />

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
    addChildModal: state.addChildModal,
    manageChildModal: state.manageChildModal
  }
}

const mapDispatchToProps = (dispatch) => {
  const boundBabyActionCreators = bindActionCreators({
    changeChildImage,
    doseTapped
  }, dispatch);

  const boundActionCreators = Object.assign({}, boundBabyActionCreators, {
    BoundAddChildActionCreators: bindActionCreators({
      ...AddChildActionCreators
    }, dispatch),
    BoundManageChildActionCreators: bindActionCreators({
      ...ManageChildActionCreators
    }, dispatch)
  });

  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
