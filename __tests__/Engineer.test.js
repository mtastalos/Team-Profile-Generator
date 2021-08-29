const Engineer = require('../lib/Engineer');

test('Set github data test', () =>{
    const github = 'testData'; 
    const testEngineer = new Engineer('mike', 1, 'fdsa@fdsa.com', github);
    expect(testEngineer.github).toBe(github);
});

test('getGithub() test', () => {
    const testEngineer = new Engineer('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testEngineer.getGithub()).toBe('testData');
});

test('getRole() test', () => {
    const testEngineer = new Engineer('mike', 1, 'fdsa@fdsa.com', 'testData');
    expect(testEngineer.getRole()).toBe('Engineer');
});

