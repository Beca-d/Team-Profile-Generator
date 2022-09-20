const Employee = require("../lib/employee");

test('creates a new Employee object', () => {
    const employee = new Employee('Harold', 1, 'Harry.Finch@email.com');

    expect(employee.name).toBe('Harold');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('Harry.Finch@email.com');
});

test('get employee name', () => {
    const employee = new Employee('Harold', 1, 'Harry.Finch@email.com');
    
    expect(employee.getName()).toBe('Harold');
});

test('get employee id', () => {
    const employee = new Employee('Harold', 1, 'Harry.Finch@email.com');

    expect(employee.getId()).toBe(1);
});

test('get employee email', () => {
    const employee = new Employee('Harold', 1, 'Harry.Finch@email.com');

    expect(employee.getEmail()).toBe('Harry.Finch@email.com');
});

test('get employee', () => {
    const employee = new Employee('Harold', 1, 'Harry.Finch@email.com');

    expect(employee.getRole()).toBe('Employee');
});