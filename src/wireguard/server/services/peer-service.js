const { execSync, exec } = require('child_process');
const { dbService } = require("./db-service")

const getStatus = () => {
    return execSync(
        'systemctl status wg-quick@wg0.service',
        { uid: 1000 }
    )
}

const restartService = () => {
    execSync(
        'sudo systemctl restart wg-quick@wg0.service',
        { uid: 1000 },
        (error, stdout, stderr) => {
            if (error) {
                console.error(error);
            } else if (stderr) {
                console.error(error);
            } else {
                console.log(stdout);
            }
        }
    )
}

const genConfig = async (body) => {
    execSync(
        `/home/github/actions-runner/_work/Portfolio-Site/Portfolio-Site/wireguard/server/scripts/wg-keygen.bash ${body.name}`,
        { uid: 1000 }
    );

    const config = await dbService.addConfig({
        name: body.name,
        ipAddress: body.ipAddress,
        allowedIpRange: body.allowedIpRange,
        publicKey: getClientPublicKey(body.name).toString().trim(),
        privateKey: getClientPrivateKey(body.name).toString().trim(),
        dateAdded: new Date()
    });

    config['vmIpAddress'] = "23.92.26.110:51820"
    config['vmPublicKey'] = getVmPublicKey().toString().trim();
    return config;
}

const getVmPublicKey = () => {
    return execSync(
        'sudo cat /etc/wireguard/publickey',
        { uid: 1000 }
    )
}

const getClientPublicKey = (clientName) => {
    return execSync(
        `cat /home/github/wireguard/clients/${clientName}/publickey`,
        { uid: 1000 }
    )
}

const getClientPrivateKey = (clientName) => {
    return execSync(
        `cat /home/github/wireguard/clients/${clientName}/privatekey`,
        { uid: 1000 }
    )
}

const addConfig = async (body) => {
    const config = await genConfig(body);
    const cmd = `sudo wg set wg0 peer ${config.publicKey} allowed-ips ${config.ipAddress}`
    exec(
        cmd,
        { uid: 1000 }
    );

    return genConfigFile(config);
}

const genConfigFile = (config) => {
    const path = `/home/github/wireguard/clients/${config.name}/configuration.conf`;
    const cmd = `echo "[Interface]
    PrivateKey = ${config.privateKey}
    Address = ${config.ipAddress}/24
    DNS = 8.8.8.8
    
    [Peer]
    PublicKey = ${config.vmPublicKey}
    AllowedIPs = ${config.allowedIpRange}/0
    Endpoint = 23.92.26.110:51820" >  /home/github/wireguard/clients/${config.name}/configuration.conf`;

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

const removeConfig = async (publicKey) => {
    const cmd = `sudo wg set wg0 peer ${publicKey.trim()} remove`
    exec(
        cmd,
        { uid: 1000 }
    )
    
    await dbService.removeConfig(publicKey);
}

module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
    removeConfig,
    getPeers
}