const express = require('express');
const PORT = process.env.PORT || 9000;
const { resolve } = require('path');
const cors = require('cors');

const app = express();

app.post('/api/login', (req, res) => {
    console.log('POST DATA:', req.body);

    res.send({
        success: true,
        message: 'You are now logged in!',
        receivedData: req.body
    });
});

app.use(cors() );
app.use(express.static(resolve(__dirname, 'client', 'dist', )));
app.use(express.json() );

app.get('/api/test', (req, res) => {
    res.send({
        success: true,
        message: 'The API is working',
        date: new Date().toDateString(),
    });
});

app.get('/api/user', (req, res) => {
    res.send({
        name: 'Kathy Simmons',
        age: 39,
        email: 'theRealKathy@gmail.com',
    });
});

// call resolve to make sure it's the correct file path every time.

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on Port:' + PORT);
});