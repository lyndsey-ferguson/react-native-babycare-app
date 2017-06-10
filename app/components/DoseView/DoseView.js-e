import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Bounceable from "react-native-bounceable";

import styles from './DoseViewStyleSheet'

export default class DoseView extends Component {
  constructor() {
    super();
    this.state = {isDoseApplied: false};
  }
  render() {
    const name = this.props.data.name;
    const { name } = this.props;
    const dose = this.props.data.dose;

    const doseAppliedIcon = this.state.isDoseApplied ? 'check-circle-o' : 'circle-thin';
    const doseAppliedIconColor = this.state.isDoseApplied ? '#0A0' : '#333';

    return (

      <View style={[styles.container, styles.card]}>
        <View style={{flexDirection: 'row'}}>
          <Bounceable
              onPress={()=> this.setState({isDoseApplied: !this.state.isDoseApplied})}
              level={1.1}>
              <Icon name={doseAppliedIcon} size={30} color={doseAppliedIconColor} style={{paddingHorizontal: 5}} />
          </Bounceable>

          <Text style={styles.name}>
            {name}
          </Text>
        </View>
        <Text style={styles.dose}>
          {dose}
        </Text>
      </View>
    );
  }
}

DoseView.defaultProps = {
  data: {
    name: '',
    dose: ''
  }
};

AppRegistry.registerComponent('DoseView', () => DoseView);
