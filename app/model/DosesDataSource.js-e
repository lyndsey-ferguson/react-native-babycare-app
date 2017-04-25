import { AsyncStorage } from 'react-native';

export default DosesDataSource = {
  babyRecords : undefined,

  async getBabyRecords() {
    if (this.babyRecords) {
      return this.babyRecords;
    }
    try {
      this.babyRecords = await AsyncStorage.getItem('#Babycare:babyRecords') || [];

      return JSON.parse(this.babyRecords);
    } catch (error) {
      // Error retrieving data
    }
  },
  async addBabyRecord(record) {
    try {
      this.babyRecords.push(record);
      AsyncStorage.setItem('#Babycare:babyRecords', JSON.stringify(this.babyRecords));

      return this.babyRecords;
    } catch (error) {
      // Error saving data
      console.error("error adding baby: " + error);
    }
  },
  async updateBabyRecord(record) {
    try {
      const index = this.babyRecords.findIndex((br) => {
        return br.name === record.name;
      });
      if (index !== -1) {
        this.babyRecords[index] = record;
      }
      AsyncStorage.setItem('#Babycare:babyRecords', JSON.stringify(this.babyRecords));
    } catch (error) {
      // Error saving data
      console.error("error adding baby: " + error);
    }
  }
}
