const exec = require('child_process').exec;
const { dbService } = require("./services/db-service")

const getStatus = () => {
    return exec(
        'systemctl status wg-quick@wg0.service',
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )
}

const restartService = () => {
    return exec(
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
    const config = {
        name: body.name,
        ipAddress: body.ipAddress,
        allowedIpRange: body.allowedIpRange,
        publicKey: undefined,
        privateKey: undefined,
        dateAdded: new Date()
    }

    exec(
        `/home/github/actions-runner/_work/Portfolio-Site/Portfolio-Site/wireguard/server/scripts/wg-keygen.bash ${config.name}`,
        { uid: 1000 }
    );

    config.publicKey = getPublicKey(config.name);
    config.privateKey = getPrivateKey(config.name);

    return await dbService.addConfig(config);
}

const getPublicKey = (clientName) => {
    return exec(
        `cat /home/github/wireguard/clients/${clientName}/publickey`,
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )
}

const getPrivateKey = (clientName) => {
    return exec(
        `cat /home/github/wireguard/clients/${clientName}/privatekey`,
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )
}

const addConfig = async (body) => {
    const config = await genConfig(body);

}

module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
}