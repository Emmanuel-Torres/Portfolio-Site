const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello')
});

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})