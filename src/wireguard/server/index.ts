import express, { Request, Response } from "express";
import peerService from "./services/peer-service";
import userService from "./services/user-service";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/api/wgservice/status", (req: Request, res: Response) => {
  try {
    res.send(peerService.getStatus());
  } catch (ex) {
    // console.error(ex);
    res.sendStatus(500);
  }
});

app.get("/api/wgservice/restart", (req: Request, res: Response) => {
  try {
    peerService.restartService();
    res.sendStatus(200);
  } catch (ex) {
    // console.error(ex);
    res.sendStatus(500);
  }
});

app.get("/api/wgservice/peers", (req: Request, res: Response) => {
  try {
    res.send(peerService.getPeers());
  } catch (ex) {
    // console.error(ex);
    res.sendStatus(500);
  }
});

app.post("/api/wgservice/addconfig", async (req: Request, res: Response) => {
  try {
    const configPath = await peerService.addConfig(req.body);
    res.download(configPath);
  } catch (ex) {
    // console.error(ex);
    res.sendStatus(500);
  }
});

app.post("/api/wgservice/removeconfig", async (req: Request, res: Response) => {
  try {
    // console.log(req.body)
    peerService.removeConfig(req.body.publicKey);
  } catch (ex) {
    // console.error(ex);
    res.sendStatus(500);
  }
});

app.post("/api/user/adduser", async (req: Request, res: Response) => {
  try {
    await userService.addUser(req.body.user);
    res.sendStatus(200);
  } catch (ex) {
    // console.error(ex);
    if (ex === 400) {
      res.sendStatus(400);
    }
    res.sendStatus(500);
  }
});

app.listen(process.env.API_PORT || 3000, () => {
  // console.log(`Running at wireguard:3000`)
});
