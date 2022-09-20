const Engineer = require("../lib/engineer");

test('create Engineer object', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');

    expect(engineer.name).toBe('Hans');
    expect(engineer.id).toBe(7);
    expect(engineer.email).toBe('HansTheMans@yahoo.com');
    expect(engineer.github).toBe('Han-ze-coder');
});

test('get Engineer Name', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');

    expect(engineer.getName()).toBe('Hans');
});

test('get Engineer ID', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');
    
    expect(engineer.getId()).toBe(7);
});

test('get Engineer email', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');

    expect(engineer.getEmail()).toBe('HansTheMans@yahoo.com');
});

test('get Engineer github', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');

    expect(engineer.getGithub()).toBe('Han-ze-coder');
});

test('get Engineer role', () => {
    const engineer = new Engineer('Hans', 7, 'HansTheMans@yahoo.com', 'Han-ze-coder');

    expect(engineer.getRole()).toBe('Engineer');
});