class Group {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }

    setName(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setMember(member) {
        this._member = member;
    }

    getMember() {
        return this._member;
    }

    setMembers(members) {
        this._members = members;
    }

    getMembers() {
        return this._members
    }
}
