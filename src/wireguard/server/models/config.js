const IpAddress = require("./ipAddress");
const Name = require("./name");
const WgKey = require("./wgKey");

module.exports = class Config {
    constructor(
        name,
        ipAddress,
        allowedIpRange,
        publicKey,
        privateKey,
        dateAdded,
        vmIpAddress,
        vmPublicKey
    ) {
        try {
            if (!dateAdded instanceof Date) {
                throw Error("Date is not valid");
            }

            this.name = new Name(name);
            this.ipAddress = new IpAddress(ipAddress);
            this.allowedIpRange = new IpAddress(allowedIpRange);
            this.publicKey = new WgKey(publicKey);
            this.privateKey = new WgKey(privateKey);
            this.dateAdded = dateAdded;
            this.vmIpAddress = new IpAddress(vmIpAddress);
            this.vmPublicKey = new WgKey(vmPublicKey);
        }
        catch (err) {
            throw err;
        }
    }
}