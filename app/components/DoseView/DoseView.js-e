import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Bounceable from "react-native-bounceable";

import styles from './DoseViewStyleSheet'

export default class DoseView extends Component {
  renderTimestamp() {
    const { doseApplicationDate } = this.props;

    if (doseApplicationDate === undefined) {
      return;
    }
    const date = new Date(doseApplicationDate);

    return (
      <Text style={styles.timestamp}>
        {date.toLocaleDateString()}
      </Text>
    );
  }
  render() {
    const { id, name, dose, doseApplicationDate, doseTapped } = this.props;

    const doseAppliedIcon = doseApplicationDate != undefined ? 'check-circle-o' : 'circle-thin';
    const doseAppliedIconColor = doseApplicationDate != undefined ? '#0A0' : '#333';

    const renderedTimestamp = this.renderTimestamp();

    return (
      <View style={[styles.container, styles.card]}>
        <View style={{flexDirection: 'row'}}>
          <Bounceable
              onPress={() => doseTapped(id)}
              level={1.1}>
              <Icon name={doseAppliedIcon} size={30} color={doseAppliedIconColor} style={{paddingHorizontal: 5}} />
          </Bounceable>

          <Text style={styles.name}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.dose}>
            {dose}
          </Text>
          {renderedTimestamp}
        </View>
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
