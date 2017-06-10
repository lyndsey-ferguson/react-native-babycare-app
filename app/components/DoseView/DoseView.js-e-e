import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Bounceable from "react-native-bounceable";

import styles from './DoseViewStyleSheet'

export default class DoseView extends Component {
  render() {
    const { id, name, dose, isSelected, doseTapped } = this.props;

    const doseAppliedIcon = isSelected ? 'check-circle-o' : 'circle-thin';
    const doseAppliedIconColor = isSelected ? '#0A0' : '#333';

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
