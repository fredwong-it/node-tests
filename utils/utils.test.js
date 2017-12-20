const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

// async test case
it('should async add two numbers', (done) => {
    utils.asyncAdd(33, 11, (res) => {
        expect(res).toBe(44).toBeA('number');
        done();
    }); 
});

it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

// async test case
it('should async square a numbers', (done) => {
    utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
    }); 
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(5);
    expect({
        name: 'Fred',
        age: 28,
        location: 'Macau'
    }).toInclude({
        age: 28
    }).toExclude({
        age: 30
    });
});

// should verify first and last names are set
// asset it includes firstName and last Name with proper values
// asset the type is object
it('should set firstName and lastName', () => {
    var user = {
        age: 28,
        location: 'Macau'
    };

    res = utils.setName(user, 'Fred Wong');

    expect(res).toInclude({
        firstName: 'Fred',
        lastName: 'Wong'
    }).toBeA('object');
});