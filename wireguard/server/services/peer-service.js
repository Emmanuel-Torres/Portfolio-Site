const exec = require('child_process').exec;
const { dbService } = require("./db-service")

const getStatus = () => {
    const proc = exec(
        'systemctl status wg-quick@wg0.service',
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )

    proc.stdout.on('data', (data) => {
        return data;
    })
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
    exec(
        `/home/github/actions-runner/_work/Portfolio-Site/Portfolio-Site/wireguard/server/scripts/wg-keygen.bash ${body.name}`,
        { uid: 1000 }
    );

    const config = await dbService.addConfig({
        name: body.name,
        ipAddress: body.ipAddress,
        allowedIpRange: body.allowedIpRange,
        publicKey: getClientPublicKey(body.name),
        privateKey: getClientPrivateKey(body.name),
        dateAdded: new Date()
    });

    config['vmIpAddress'] = "23.92.26.110:51820"
    config['vmPublicKey'] = getVmPublicKey();
    return config;
}

const getVmPublicKey = () => {
    return exec(
        'cat /etc/wireguard/publickey',
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )
}

const getClientPublicKey = (clientName) => {
    return exec(
        `cat /home/github/wireguard/clients/${clientName}/publickey`,
        { uid: 1000 },
        (error, stdout, stderr) => {
            return stdout;
        }
    )
}

const getClientPrivateKey = (clientName) => {
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
    exec (
        `sudo wg set wg0 peer ${config.publicKey} allowed-ips ${config.ipAddress}/24`,
        { uid: 1000 }
    );
}

module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
}