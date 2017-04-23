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
  TouchableHighlight,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Bounceable from "react-native-bounceable";

export default class AddChildModal extends Component {
  constructor() {
    super();
    this.state = {
      gender: undefined,
      name: '',
      nameInputFocused: false
    }
  }
  nameInputColor() {
    return this.state.nameInputFocused ?
      styles.nameInputBlackStyle :
      styles.nameInputGreyStyle;
  }
  renderGenderButtons() {
    const isGirl = this.state.gender === 'girl';
    const isBoy = this.state.gender === 'boy';

    const girlButtonColor = isGirl ? '#dd4792' : '#ffDFFC';
    const boyButtonColor = isBoy ? '#0000CC' : '#BBBBFF';
    const girlButtonTextColor = isGirl ? '#FFFFFF' : '#000000';
    const boyButtonTextColor = isBoy ? '#FFFFFF' : '#000000';

    return (
      <View style={{marginTop: 22, alignItems:'center'}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon.Button
              name='venus'
              backgroundColor={girlButtonColor}
              onPress={() => this.setState({gender: 'girl'})}
            >
              <Text style={{color: girlButtonTextColor}}>Nena</Text>
            </Icon.Button>
            <Text style={{marginHorizontal: 5}}> </Text>
            <Icon.Button
              name='mars'
              backgroundColor={boyButtonColor}
              onPress={() => this.setState({gender: 'boy'})}
            >
              <Text style={{color: boyButtonTextColor}}>Nene</Text>
            </Icon.Button>
          </View>
        </View>
      </View>
    );
  }
  renderNames() {
    let displayedName = this.state.name;
    if (displayedName === '' && !this.state.nameInputFocused) {
      displayedName = 'nombre de bebe';
    }
    const nameInputColorStyle = this.nameInputColor();
    return (
      <View style={styles.nameContainer}>
        <Text style={styles.nameLabel}>Nombre:</Text>
        <TextInput
          onFocus={() => {
            console.log('focussing');
            this.setState({nameInputFocused: true});}
          }
          style={[styles.nameInput, nameInputColorStyle]}
          onChangeText={(name) => this.setState({name})}
          value={displayedName}
        />
      </View>
    );
  }
  render() {
    const renderedGenderButtons = this.renderGenderButtons();
    const renderedNameWidget = this.renderNames();

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {alert("Modal has been closed.")}} >
          {renderedGenderButtons}
          {renderedNameWidget}
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Icon.Button
              name='heart'
              backgroundColor={'#AAFFAA'}
              style={{borderColor: '#55AA55'}}
              onPress={() => {
                if (this.state.name !== '' && !!this.state.gender) {
                  this.props.onClose({name: this.state.name, gender: this.state.gender});}
                }
              }
            >
              <Text style={{color: '#000000'}}>Añadir bebe</Text>
            </Icon.Button>
          </View>
      </Modal>
    );
  }
}

AddChildModal.defaultProps = {
  visible: false,
  onClose: function() {}
};

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 22,
    alignItems: 'center',
    alignItems: 'baseline'
  },
  nameLabel: {
    height: 20,
    fontSize: 20
  },
  nameInput: {
    height: 22,
    fontSize: 20,
    borderColor: '#BBBBBB',
    borderWidth: 1,
    flex: 3,
    marginRight: 10,
    marginLeft: 5
  },
  nameInputBlackStyle: {
    color: '#000000'
  },
  nameInputGreyStyle: {
    color: '#AAAAAA'
  }
});
