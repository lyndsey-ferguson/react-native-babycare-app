import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './InfoBarStyleSheet';

export default class InfoBar extends Component {
  getChildPhoto() {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    if (this.props.babyRecord.imageSource) {
      options.customButtons = [
        { name: 'remove-photo', title: 'Remove Photo' },
      ];
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // nothing
      }
      else if (response.error) {
        console.error("Error: unable to get child's photo: ", response.error);
      }
      else if (response.customButton && response.customButton == 'remove-photo') {
        this.props.imageChanged(undefined);
      }
      else {
        this.props.changeImage({ uri: response.uri });
      }
    });
  }
  imageSource() {
    const { babyRecord } = this.props;
    if (babyRecord && babyRecord.imageSource) {
      return babyRecord.imageSource;
    }
    if (!babyRecord || !babyRecord.gender) {
      return require(`../../res/unknown-profile.png`);
    }
    else if (babyRecord.gender === 'male') {
      return require(`../../res/boy-profile.png`);
    }
    else if (babyRecord.gender === 'girl') {
      return require(`../../res/girl-profile.png`);
    }
    else {
      console.error(`unknown gender, ${babyRecord.gender}, associated with baby record`);
      return undefined;
    }
  }
  render() {
    const { babyRecord } = this.props;
    if (!babyRecord) {
      return undefined;
    }

    const isBoy = babyRecord.gender == 'male';

    return (
      <View style={styles.infobar}>
        <TouchableHighlight
          style={[styles.imageContainer, isBoy ? styles.avatarBackgroundColorBoy : styles.avatarBackgroundColorGirl]}
          onPress={this.getChildPhoto.bind(this)}
          >
          <Image
            source={this.imageSource()}
            style={styles.image} >
          </Image>
        </TouchableHighlight>
        <Text style={styles.name}>{babyRecord.name}</Text>
      </View>
    );
  }
}

InfoBar.propTypes = {
  babyRecord: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    uuid: PropTypes.string,
    imageSource: PropTypes.object
  }),
  imageChanged: (imageSource) => {}
};

InfoBar.defaultProps = {
  babyRecord: {
    name: 'unknown',
    gender: undefined,
    id: '',
    imageSource: undefined,
  },
  imageChanged: PropTypes.func
};
