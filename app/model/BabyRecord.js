
export default class BabyRecord {
  constructor() {
    this._name = ''
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  get name() {
    return this._name;
  }
  set name(name) {
    const oldName = this.name;
    this._name = name;
    const thisBabyRecord = this;
    this.observers.forEach(function(observer) {
      observer.call(observer, thisBabyRecord, { change: 'name', oldValue: oldName, newValue: name });
    });
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    console.log(`${gender} !== ${_MALE} || ${gender} !== ${_FEMALE} ? ${(gender !== _MALE || gender !== _FEMALE)}`);

    if (gender !== _MALE || gender !== _FEMALE) {
      throw 'Error: only BabyRecord.MALE and BabyRecord.FEMALE are valid genders';
    }
    this._gender = gender;
  }
  static get MALE() {
    return _MALE;
  }

  static get FEMALE() {
    return _FEMALE;
  }
}
const _MALE = 'male';
const _FEMALE = 'female';
