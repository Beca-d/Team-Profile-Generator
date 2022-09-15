const Manager = require("../lib/manager");

test('create manager object', () => {
    const manager = new Manager('George', 1 , 'BossGeorge@gmail.com', A01);

    expect(manager.name).toBe('George');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('BossGeorge@gmail.com');
    expect(manager.officeNo).toBe(A01);
});

test('get manager Name', () => {
    const manager = new Manager('George', 1 , 'BossGeorge@gmail.com', A01);

    expect(manager.getName()).toBe('George');
});

test('get manager ID', () => {
    const manager = new Manager('George', 1 , 'BossGeorge@gmail.com', A01);
    
    expect(manager.getId()).toBe(1);
});

test('get manager email', () => {
    const manager = new Manager('George', 1 , 'BossGeorge@gmail.com', A01);

    expect(manager.getEmail()).toBe('BossGeorge@gmail.com');
});

test('get manager role', () => {
    const manager = new Manager('George', 1 , 'BossGeorge@gmail.com', A01);

    expect(manager.getRole()).toBe('Manager');
})