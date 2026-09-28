const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Aljun', () => {
    expect(values.firstName).toEqual('Aljun');
  });
  test('lastName is Jimenez', () => {
    expect(values.lastName).toEqual('Jimenez');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1996', () => {
    expect(values.birthYear).toEqual(1996);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Aljun Jimenez and I am 30 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Aljun Jimenez', () => {
    expect(values.fullName).toEqual('Aljun Jimenez');
  });
  test('age is 30', () => {
    expect(values.age).toEqual(30);
  });
});
