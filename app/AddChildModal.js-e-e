import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ListView,
  Modal,
  Button,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Bounceable from "react-native-bounceable";

export default class AddChildModal extends Component {
  constructor() {
    super();
    this.state = {
      gender: undefined,
      name: ''
    }
  }
  render() {
    const isGirl = this.state.gender === 'girl';
    const isBoy = this.state.gender === 'boy';

    const girlButtonColor = isGirl ? '#dd4792' : '#ffDFFC';
    const boyButtonColor = isBoy ? '#0000CC' : '#BBBBFF';
    const girlButtonTextColor = isGirl ? '#FFFFFF' : '#000000';
    const boyButtonTextColor = isBoy ? '#FFFFFF' : '#000000';

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {alert("Modal has been closed.")}} >
          <View style={{marginTop: 22, alignItems:'center'}}>
            <View>
              <Text>Add Child</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon.Button name='venus' backgroundColor={girlButtonColor} onPress={() => this.setState({gender: 'girl'})}>
                  <Text style={{color: girlButtonTextColor}}>Nena</Text>
                </Icon.Button>
                <Icon.Button name='mars' backgroundColor={boyButtonColor} onPress={() => this.setState({gender: 'boy'})}>
                  <Text style={{color: boyButtonTextColor}}>Nene</Text>
                </Icon.Button>
              </View>
            </View>
          </View>
      </Modal>
    );
  }
}

AddChildModal.defaultProps = {
  visible: false,
  onClose: function() {}
};
