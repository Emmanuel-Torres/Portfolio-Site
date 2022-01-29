const express = require('express');
const app = express();
const { peerService } = require("./services/peer-service")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/wgservice/status', (req, res) => {
    try {
        res.send(peerService.getStatus());
    }
    catch {
        res.send(500);
    }
})

app.get('/api/wgservice/restart', (req, res) => {
    try {
        peerService.restartService();
        res.send(200);
    }
    catch {
        res.send(500);
    }
})

app.post('/api/addconfig', async (req, res) => {
    try {
        const config = peerService.addConfig(req.body);
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