import IpAddress from "./ipAddress";
import Name from "./name";
import WgKey from "./wgKey";

class Config {
  public name: Name;
  public ipAddress: IpAddress;
  public allowedIpRange: IpAddress;
  public publicKey: WgKey;
  public privateKey: WgKey;
  public dateAdded: Date;
  public vmIpAddress: IpAddress;
  public vmPublicKey: WgKey;

  constructor(
    name: string,
    ipAddress: string,
    allowedIpRange: string,
    publicKey: string,
    privateKey: string,
    dateAdded: Date,
    vmIpAddress: string,
    vmPublicKey: string
  ) {
    try {
      if (!(dateAdded instanceof Date)) {
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
    } catch (err) {
      throw err;
    }
  }
};

export default Config;