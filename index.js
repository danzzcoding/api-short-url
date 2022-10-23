const express = require('express');
const route = require('./routes/index');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(route);
app.use(express.static("assets"))
const port = process.env.port || 3000;

app.listen(port, () => {
    try {
        console.log(`Running on ${port}`);
    } catch (error) {
        throw error;
    }
});