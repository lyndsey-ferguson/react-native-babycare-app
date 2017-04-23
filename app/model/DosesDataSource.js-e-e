import { AsyncStorage } from 'react-native';

export default DosesDataSource = {
  async getBabyRecords() {
    try {
      const babyRecords = await AsyncStorage.getItem('#Babycare:babyRecords') || '[]';

      return JSON.parse(babyRecords);
    } catch (error) {
      // Error retrieving data
    }
  },
  async addBabyRecord(record) {
    try {
      console.log('about to get the babyRecords');
      this.getBabyRecords().then((babyRecords) =>
        {
          console.log('got baby records' + JSON.stringify(babyRecords));
          babyRecords.push(record);
          console.log('saving babyrecords: ' + JSON.stringify(babyRecords));
          AsyncStorage.setItem('#Babycare:babyRecords', JSON.stringify(babyRecords));

          return babyRecords;
        }
      );
    } catch (error) {
      // Error saving data
      console.log("error adding baby: " + error);
    }
  }
}
