class Name {
  public name: string;

  constructor(name: string) {
    if (!this.isNameValid(name)) {
      throw Error("Name was not valid");
    }

    this.name = name.trim();
  }

  private isNameValid = (name: string) => {
    return (
      name &&
      typeof name === "string" &&
      name.trim().length >= 5 &&
      name.trim().length <= 12 &&
      /^[a-z]+$/i.test(name)
    );
  };

  public toString = (): string => {
    return this.name;
  };
}

export default Name;
