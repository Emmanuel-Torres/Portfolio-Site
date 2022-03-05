module.exports = class IpAddress {
    constructor(ipAddress) {
        if (!isIpAddressValid(ipAddress)) {
            throw Error("Ip Address was not valid");
        }

        this.ipAddress = ipAddress;
    }

    isIpAddressValid = (ipAddress) => {
        return (
            ipAddress &&
            typeof ipAddress === 'string' &&
            /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(ipAddress)
        )
    }

    toString = () => {
        return this.ipAddress;
    }
}