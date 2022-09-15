const Employee = require("../lib/employee");

test('creates a new Employee object', () => {
    const employee = new Employee('Harold', 012, 'Harry.Finch@email.com');

    expect(employee.name()).toBe('Harold');
    expect(employee.id()).toEqual(0);
    expect(employee.email()).toBe('Harry.Finch@email.com');
});

test('get employee name', () => {
    const empoylee = new Employee('Harold', 012, 'Harry.Finch@email.com');
    
    expect(empoylee.getName()).toBe('Harold');
});

test('get employee id', () => {
    const empoylee = new Employee('Harold', 012, 'Harry.Finch@email.com');

    expect(empoylee.getId()).toBe(012);
});

test('get employee email', () => {
    const employee = new Employee('Harold', 012, 'Harry.Finch@email.com');

    expect(employee.getEmail()).toBe('Harry.Finch@email.com');
});

test('get employee', () => {
    const employee = new Employee('Harold', 012, 'Harry.Finch@email.com');

    expect(employee.getRole()).toBe('Employee');
});