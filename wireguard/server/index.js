const express = require('express');
const app = express();
const exec = require('child_process').exec;
const { dbService } = require("./services/db-service")
const { peerService } = require("./services/peer-service")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('pages/AddClient.html'))

app.get('/', async (req, res) => {
    res.send("hello world");
})

app.get('/api/wgservice/status', (req, res) => {
    exec(
        'systemctl status wg-quick@wg0.service',
        { uid: 1000 },
        (error, stdout, stderr) => {
            res.send(stdout);
        }
    )
})

app.get('/api/wgservice/restart', (req, res) => {
    exec(
        'sudo systemctl restart wg-quick@wg0.service',
        { uid: 1000 },
        (error, stdout, stderr) => {
            if (error) {
                res.send(500);
            } else if (stderr) {
                res.send(stderr);
            } else {
                res.send(200);
            }
        }
    )
})

app.post('/api/addconfig', async (req, res) => {
    const newConfig = {
        name: req.body.name,
        ipAddress: req.body.ipAddress,
        allowedIpRange: req.body.allowedIpRange,
        publicKey: undefined,
        privateKey: undefined,
        dateAdded: new Date()
    }

    const keys = peerService.genKeys(newConfig)
    newConfig.publicKey = keys.publicKey;
    newConfig.privateKey = keys.privateKey;

    try {
        const config = await dbService.addConfig(newConfig);
        res.send(200);
    }
    catch (ex) {
        console.error(ex);
        res.send(500);
    }
})

app.listen(process.env.API_PORT, () => {
    console.log(`Running at wireguard:3000`)
})