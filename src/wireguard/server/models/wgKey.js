module.exports = class WgKey {
    constructor(key) {
        if (!isKeyValid()) {
            throw Error("Key was not valid");
        }

        this.key = key;
    }

    isKeyValid = (key) => {
        return (
            key &&
            typeof key === 'string' &&
            key.trim().length === 44 &&
            /^[a-z0-9\/\+]+=$/i.test(key)
        )
    }

    toString = () => {
        return this.key;
    }
}