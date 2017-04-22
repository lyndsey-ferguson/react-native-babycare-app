

export default DosesDataSource = {
  async getBabyRecordCount(component) {
    try {
      const babyRecordCount = await AsyncStorage.getItem('#Babycare:babyRecordCount');
      if (babyRecordCount !== null){
        // We have data!!
        component.setState({babyRecordCount: babyRecordCount});
        console.log('retrieved babyRecordCount:' + babyRecordCount);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
}
