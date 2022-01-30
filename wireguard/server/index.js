const express = require('express');
const { peerService } = require("./services/peer-service")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/wgservice/status', (req, res) => {
    try {
        res.send(peerService.getStatus());
    }
    catch {
        res.sendStatus(500);
    }
})

app.get('/api/wgservice/restart', (req, res) => {
    try {
        peerService.restartService();
        res.sendStatus(200);
    }
    catch {
        res.sendStatus(500);
    }
})

app.get('/api/wgservice/peers', (req, res) => {
    try {
        res.send(peerService.getPeers());
    }
    catch {
        res.sendStatus(500);
    }
})

app.post('/api/addconfig', async (req, res) => {
    try {
        const configPath = await peerService.addConfig(req.body);
        res.download(configPath);
    }
    catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
})

app.post('/api/wgservice/removeconfig', async (req, res) => {
    try {
        peerService.removeConfig(req.body.publicKey)
    }
    catch {
        res.sendStatus(500);
    }
});

app.listen(process.env.API_PORT, () => {
    console.log(`Running at wireguard:3000`)
})