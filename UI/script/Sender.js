class Sender {
    constructor(id, email, name) {
        this._id = id;
        this._email = email;
        this._name = name;
    }


    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getEmail() {
        return this._email;
    }

    setEmail(value) {
        this._email = value;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getMessage() {
        return this._message;
    }

    setMessage(value) {
        this._message = value;
    }
}