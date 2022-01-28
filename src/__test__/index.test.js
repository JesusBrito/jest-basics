const randomString = require('../index');
describe('Test function randomString', () => {
    test('Test a function to return an item from array', () => {
        expect(typeof randomString()).toBe('string');
    });    

    test('Test if City don´t exist', () => {
      expect(randomString()).not.toBe(/GDL/);
    });
    
});

