export default class ClientConfig {
    name: string;
    ipAddress: string;
    dateAdded: Date;
    allowedIpRange: string;

    constructor(
        name: string,
        ipAddress: string,
        dateAdded: Date,
        allowedIpRange: string,
    ) {
        this.name = name;
        this.ipAddress = ipAddress;
        this.dateAdded = dateAdded;
        this.allowedIpRange = allowedIpRange;
    }
}