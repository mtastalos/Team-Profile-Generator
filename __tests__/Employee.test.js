const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('getName() test', () => {
    const dataTest = 'mike';
    const testEmployee = new Employee(dataTest);
    expect(testEmployee.getName()).toBe(dataTest);
});

test('getId() test', () => {
    const dataTest = 1;
    const testEmployee = new Employee('mike', dataTest);
    expect(testEmployee.getId()).toBe(dataTest);
});

test('getEmail() test', () => {
    const dataTest = 'fdsa@fdsa.com';
    const testEmployee = new Employee('mike', 1, dataTest);
    expect(testEmployee.getEmail()).toBe(dataTest);
});

test('new employee instance', () => {
    const testEmployee = new Employee();
    expect(typeof(testEmployee)).toBe('object');
});

test('set name', () => {
    const testEmployee = new Employee('mike');
    expect(testEmployee.name).toBe('mike')
});

test('set id', ()=> {
    const testEmployee = new Employee('mike', 1);
    expect(testEmployee.id).toBe(1);
});

test('set email', () =>{
    const testEmployee = new Employee('mike', 1, 'fdsa@fdsa.com');
    expect(testEmployee.email).toBe('fdsa@fdsa.com');
});

test('getRole()',() => {
    const testEmployee = new Employee('mike');
    expect(testEmployee.getRole()).toBe('Employee');
});