import Name from "./name";
import Password from "./password";

class User {
    name: Name;
    password: Password;

    constructor(name: string, password: string) {
        this.name = new Name(name);
        this.password = new Password(password);
    }
}

export default User;