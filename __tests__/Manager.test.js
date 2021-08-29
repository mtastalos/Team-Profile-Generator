const Manager = require('../lib/Manager');

test('Set officeNumber data test', () =>{
    const officeNumber = 'testData'; 
    const testManager = new Manager('mike', 1, 'fdsa@fdsa.com', officeNumber);
    expect(testManager.officeNumber).toBe(officeNumber);
});

test('getOfficeNumber() test', () => {
    const testManager = new Manager('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testManager.getOfficeNumber()).toBe('testData');
});

test('getRole() test', () => {
    const testManager = new Manager('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testManager.getRole()).toBe('Manager');
});

