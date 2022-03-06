class IpAddress {
  public ipAddress: string;

  constructor(ipAddress: string) {
    if (!this.isIpAddressValid(ipAddress)) {
      throw Error("Ip Address was not valid");
    }

    this.ipAddress = ipAddress.trim();
  }

  private isIpAddressValid(ipAddress: string): boolean {
    return (
      ipAddress &&
      typeof ipAddress === "string" &&
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
        ipAddress
      )
    );
  }

  public toString = (): string => {
    return this.ipAddress;
  };
}

export default IpAddress;
