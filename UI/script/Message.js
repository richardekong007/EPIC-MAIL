

class Message {
    constructor(id, content, subject) {
        this._id = id;
        this._content = content;
        this._subject = subject;

    }

    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getContent() {
        return this._content;
    }

    setContent(value) {
        this._content = value;
    }

    getSubject() {
        return this._subject;
    }

    setSubject(value) {
        this._subject = value;
    }

    getCreatedOn() {
        return this._createdOn;
    }

    setCreatedOn(value) {
        this._createdOn = value;
    }

}