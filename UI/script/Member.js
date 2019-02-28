class Member {
    constructor(memberId, name, email) {
        this._memberId = memberId;
        this._name = name;
        this._email = email;
    }

    getGroupId() {
        return this._groupId;
    }

    setGroupId(value) {
        this._groupId = value;
    }

    getMemberId() {
        return this._memberId;
    }

    setMemberId(value) {
        this._memberId = value;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    setEmail(value) {
        this._email = value;
    }

    getEmail() {
        return this._email;
    }
}
