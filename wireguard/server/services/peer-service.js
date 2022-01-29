const exec = require('child_process').exec;

const genKeys = (clientName) => {
    exec(
        `/home/github/actions-runner/_work/Portfolio-Site/Portfolio-Site/wireguard/server/scripts/wg-keygen.bash ${clientName}`,
        { uid: 1000 }
    );

    const publicKey = getPublicKey(clientName);
    const privateKey = getPrivateKey(clientName);

    return { publicKey, privateKey };
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

const addClient = (clientConfig) => {

}

module.exports.peerService = {
    genKeys,
    getPublicKey,
    getPrivateKey,
}