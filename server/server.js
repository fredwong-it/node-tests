const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// Get /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
    res.send([{
        name: 'Fred',
        age: 24
    }, {
        name: 'Ben',
        age: 22
    }, {
        name: 'Allen',
        age: 40
    }]);
});

app.listen(3000);

module.exports.app = app;