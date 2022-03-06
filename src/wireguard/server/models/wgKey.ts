class WgKey {
  public key: string;

  constructor(key: string) {
    if (!this.isKeyValid(key)) {
      throw Error("Key was not valid");
    }

    this.key = key.trim();
  }

  private isKeyValid = (key: string): boolean => {
    return (
      key &&
      typeof key === "string" &&
      key.trim().length === 44 &&
      /^[a-z0-9\/\+]+=$/i.test(key)
    );
  };

  public toString = (): string => {
    return this.key;
  };
}

export default WgKey;