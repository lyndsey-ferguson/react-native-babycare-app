
import { StyleSheet, Platform } from 'react-native';

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;

export default StyleSheet.create({
  listView: {
    alignSelf: "stretch",
    padding: 5
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    textAlign: 'auto'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    padding: 5
  }
});
