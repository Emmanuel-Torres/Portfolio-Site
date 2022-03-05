module.exports = class Name {
    constructor(name) {
        if (!isNameValid(name)) {
            throw Error("Name was not valid");
        }

        this.name = name;
    }

    isNameValid = (name) => {
        return (
            name &&
            typeof name === 'string' &&
            name.trim().length >= 5 &&
            name.trim().length <= 12 &&
            /^[a-z]+$/i.test(name)
        )
    }

    toString = () => {
        return this.name;
    }
}