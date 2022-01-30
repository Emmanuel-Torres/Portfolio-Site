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
        publicKey: getClientPublicKey(body.name).trim(),
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
    console.log(config);
    const cmd = `sudo wg set wg0 peer ${config.publicKey} allowed-ips ${config.ipAddress}`
    console.log(cmd);
    exec(
        cmd,
        { uid: 1000 }
    );
}

module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
}