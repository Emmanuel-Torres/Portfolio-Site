const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('pages/AddClient.html'))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/AddClient.html'))
})

app.post('/addconfig', async (req, res) => {
    
})

app.listen(80, () => {
    console.log(`Running at wireguard:3000`)
})