const express = require('express');
const app = require('../src/app');
const port = normalizePort(process.env.PORT || '3000');

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}