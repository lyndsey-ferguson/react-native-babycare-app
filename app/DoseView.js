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
      <View style={[styles.container, styles.card]}>
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
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 5,
    padding: 3
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
    elevation: 1
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
