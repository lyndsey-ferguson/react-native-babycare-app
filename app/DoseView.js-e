import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

export default class DoseView extends Component {
  constructor() {
    super();
  }
  render() {
    const name = this.props.data.name;
    const dose = this.props.data.dose;

    return (
      <View style={styles.vaccination}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.dose}>
          {dose}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vaccination: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderWidth: .5,
    padding: 10
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    textAlign: 'auto'
  },
  dose: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
    textAlign: 'auto'
  }
});

AppRegistry.registerComponent('DoseView', () => DoseView);
