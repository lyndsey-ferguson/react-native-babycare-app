'use strict'

import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import React, {Component} from 'react';
import thunk from 'redux-thunk';
import {
  AppState,
  AsyncStorage,
  Text,
  Image,
  View
} from 'react-native';

import rootReducer from './reducers'
import App from './App';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default class AppRoot extends Component {
  constructor() {
    super();
    this.state = {
      isLoadingStore: false
    }
  }
  componentWillMount() {
    var self = this;
    this.setState({isStoreLoading: true});
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    AsyncStorage.getItem('babycareStore').then((value)=>{
      if(value && value.length){
        let initialStore = JSON.parse(value);
        self.setState({store: createStore(rootReducer, initialStore, applyMiddleware(thunk, logger))});
      }else{
        self.setState({store: store});
      }
      self.setState({isStoreLoading: false});
    }).catch((error)=>{
      self.setState({store: store});
      self.setState({isStoreLoading: false});
    })
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }
  _handleAppStateChange(currentAppState) {
    let storingValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('babycareStore', storingValue);
  }
  render() {
    if (this.state.isStoreLoading) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#5d0402' }}>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 24, color: '#FFFFFF' }}>Calendario de anticuerpos</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>Loading...</Text>
          </View>
          <Image
            source={require('./res/launch.jpg')} >
          </Image>
        </View>
      )
      return
    }
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}
