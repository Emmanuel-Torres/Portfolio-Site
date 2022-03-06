class Password {
    public password: string;

    constructor(password: string) {
        this.password = password
    }

    public toString = (): string => {
        return this.password;
    }
}

export default Password;