const express = require('express');
const app = express();

const routes = require('./src/routes');

const port = 3333;

app.use(express.json());

app.use("/", routes);

app.listen(port, function () {
    console.log(`Server running: http://localhost:${port}/`);
});