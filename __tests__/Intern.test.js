const Intern = require('../lib/Intern');

test('Set school data test', () =>{
    const school = 'testData'; 
    const testIntern = new Intern('mike', 1, 'fdsa@fdsa.com', school);
    expect(testIntern.school).toBe(school);
});

test('getSchool() test', () => {
    const testIntern = new Intern('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testIntern.getSchool()).toBe('testData');
});

test('getRole() test', () => {
    const testIntern = new Intern('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testIntern.getRole()).toBe('Intern');
});


