import Config from '../models/config';
import Name from '../models/name';
import dbService from './db-service';
import { exec, execSync } from 'child_process';
import WgKey from '../models/wgKey';

const getStatus = () => {
    return execSync(
        'systemctl status wg-quick@wg0.service',
        { uid: 1000 }
    )
}

const restartService = () => {
    execSync(
        'sudo systemctl restart wg-quick@wg0.service',
        { uid: 1000 }
    )
}

const genConfig = async (body: any) => {
    try {
        const name = new Name(body.name);
        execSync(
            `/home/github/actions-runner/_work/Portfolio-Site/Portfolio-Site/src/wireguard/server/scripts/wg-keygen.bash ${name.toString()}`,
            { uid: 1000 }
        );

        const config = new Config(
            name.toString(),
            body.ipAddress,
            body.allowedIpRange,
            getClientPublicKey(name).toString().trim(),
            getClientPrivateKey(name).toString().trim(),
            new Date(),
            "23.92.26.110:51820",
            getVmPublicKey().toString().trim()
        )

        await dbService.addConfig(config);

        return config;
    }
    catch (err) {
        throw err;
    }
}

const getVmPublicKey = () => {
    return execSync(
        'sudo cat /etc/wireguard/publickey',
        { uid: 1000 }
    )
}

const getClientPublicKey = (name: Name) => {
    return execSync(
        `cat /home/github/wireguard/clients/${name.toString()}/publickey`,
        { uid: 1000 }
    )
}

const getClientPrivateKey = (name: Name) => {
    return execSync(
        `cat /home/github/wireguard/clients/${name.toString()}/privatekey`,
        { uid: 1000 }
    )
}

const addConfig = async (body: any) => {
    const config = await genConfig(body);
    const cmd = `sudo wg set wg0 peer ${config.publicKey.toString()} allowed-ips ${config.ipAddress.toString()}`
    exec(
        cmd,
        { uid: 1000 }
    );

    return genConfigFile(config);
}

const genConfigFile = (config: Config) => {
    const path = `/home/github/wireguard/clients/${config.name.toString()}/configuration.conf`;
    const cmd = `echo "[Interface]
PrivateKey = ${config.privateKey.toString()}
Address = ${config.ipAddress.toString()}/24
DNS = 8.8.8.8

[Peer]
PublicKey = ${config.vmPublicKey.toString()}
AllowedIPs = ${config.allowedIpRange.toString()}/0
Endpoint = 23.92.26.110:51820" >  /home/github/wireguard/clients/${config.name.toString()}/configuration.conf`;

    execSync(
        cmd,
        { uid: 1000 }
    )

    return path;
}

const getPeers = () => {
    const cmd = 'sudo wg show | grep peer';
    return execSync(
        cmd,
        { uid: 1000 }
    ).toString().split('\n');
}

const removeConfig = async (publicKey: WgKey) => {
    const cmd = `sudo wg set wg0 peer ${publicKey.toString()} remove`
    exec(
        cmd,
        { uid: 1000 }
    )

    await dbService.removeConfig(publicKey);
}

const peerService = {
    getStatus,
    restartService,
    addConfig,
    removeConfig,
    getPeers
}

export default peerService;