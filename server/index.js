const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello')
});

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`Running at ${process.env.API_HOST}:${process.env.API_PORT}`);
})