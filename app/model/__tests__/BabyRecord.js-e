import BabyRecord from '../BabyRecord';

describe('BabyRecord', () => {
  test('object creation', () => {
    expect(new BabyRecord()).toBeInstanceOf(BabyRecord);
  });
  test('initial name is empty', () => {
    const record = new BabyRecord();
    expect(record.name).toBe('');
  });
  test('initial gender is undefined', () => {
    const record = new BabyRecord();
    expect(record.gender).not.toBeDefined();
  });
  describe('setting name', () => {
    test('name changes', () => {
      const record = new BabyRecord();
      record.name = 'Lyndsey';
      expect(record.name).toBe('Lyndsey');
    });
    test('listeners called', () => {
      const record = new BabyRecord();
      const observer1 = jest.fn();
      const observer2 = jest.fn();

      record.subscribe(observer1);
      record.subscribe(observer2);
      record.name = 'Lyndsey';
      expect(observer1).toHaveBeenCalledWith(record, { change: 'name', oldValue: '', newValue: 'Lyndsey'} );
      expect(observer2).toHaveBeenCalledWith(record, { change: 'name', oldValue: '', newValue: 'Lyndsey'} );
    });
  });
  describe('setting gender', () => {
    test('gender changes to male', () => {
      const record = new BabyRecord();
      record.gender = BabyRecord.MALE;
      expect(record.gender).toBe(BabyRecord.MALE);
    });
    test('gender changes to female', () => {
      const record = new BabyRecord();
      record.gender = BabyRecord.FEMALE;
      expect(record.gender).toBe(BabyRecord.FEMALE);
    });
    test('gender throws when set incorrectly', () => {
      const record = new BabyRecord();
      expect(() => {
        record.name = 'Asynchronous';
      }).toThrow('Error: only BabyRecord.MALE and BabyRecord.FEMALE are valid genders');
    });
    // test('listeners called', () => {
    //   const record = new BabyRecord();
    //   const observer1 = jest.fn();
    //   const observer2 = jest.fn();
    //
    //   record.subscribe(observer1);
    //   record.subscribe(observer2);
    //   record.name = 'Lyndsey';
    //   expect(observer1).toHaveBeenCalledWith(record, { change: 'name', oldValue: '', newValue: 'Lyndsey'} );
    //   expect(observer2).toHaveBeenCalledWith(record, { change: 'name', oldValue: '', newValue: 'Lyndsey'} );
    // });
  });
});
