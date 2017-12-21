const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return Hello World reponse', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect({
            error: 'Page not found.',
            name: 'Todo App v1.0'
        })
        .end(done);
});

// combination of supertest and expect
it('should return Hello World reponse 2', (done) => {
    request(app)
        .get('/')
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});

// Make a new test
// assert 200
// Assert that you exist in users array
it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Fred',
                age: 24
            });
        })
        .end(done);
});