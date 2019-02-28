class InboxItem {

    constructor(sender, createdOn) {
        this._sender = sender;
        this._message = sender.getMessage();
        this._createdOn = createdOn;
    }


    getSender() {
        return this._sender;
    }

    setSender(value) {
        this._sender = value;
    }

    getMessage() {
        return this._message;
    }

    setMessage(value) {
        this._message = value;
    }

    getCreatedOn() {
        return this._createdOn;
    }

    setCreatedOn(value) {
        this._createdOn = value;
    }
}