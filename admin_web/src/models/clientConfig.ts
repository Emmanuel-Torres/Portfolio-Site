export default class ClientConfig {
    name: string;
    ipAddress: string;
    dateAdded: Date;
    allowedIpRange: string;
    publicKey: string;
    privateKey: string;

    constructor(
        name: string,
        ipAddress: string,
        dateAdded: Date,
        allowedIpRange: string,
        publicKey: string,
        privateKey: string
    ) {
        this.name = name;
        this.ipAddress = ipAddress;
        this.dateAdded = dateAdded;
        this.allowedIpRange = allowedIpRange;
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
}