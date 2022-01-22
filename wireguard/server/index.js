const express = require('express');
const app = express();
const path = require('path');
const { dbService } = require("./services/db-service")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('pages/AddClient.html'))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/AddClient.html'))
})

app.post('/addconfig', async (req, res) => {
    const config = {
        name: req.body.name,
        ipAddress: req.body.ipAddress,
        allowedIpRange: req.body.allowedIpRange,
        publicKey: req.body.publicKey,
        privateKey: req.body.privateKey,
        dateAdded: new Date()
    }

    try {
        res.json(await dbService.addConfig(config))
    }
    catch (ex) {
        console.error(ex);
    }
})

app.listen(3000, () => {
    console.log(`Running at wireguard:3000`)
})