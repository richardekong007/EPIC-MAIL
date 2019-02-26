function createGroupUI() {
    //create members
    const members = createMembers();
    const mainSection = document.getElementById('content');
    const title = document.getElementById('headerTitle');
    const headerSection = document.getElementById('headerSection');
    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'adminAddButton');
    addButton.innerText = "Add";
    addButton.onclick = displayDialog;
    headerSection.appendChild(addButton);
    title.textContent = 'Create Group';
    if (mainSection.childNodes.length < 1) {
        let lineBreak = document.createElement('br');
        mainSection.appendChild(lineBreak);
        members.forEach((member, index) => {
            let memberView = new MemberContainerView(member);
            memberView.setIndex(index + 1);
            mainSection.appendChild(memberView.getContainer())
        });
    }
}

function viewGroupUI(){

}

//create mock members
const createMembers = () => {
    const member1 = new Member(1, 'Mark', 'mark@gmail.com');
    const member2 = new Member(2, 'John', 'john@gmail.com');
    const member3 = new Member(3, 'Mercy', 'mercy@rocketMail.com');
    const member4 = new Member(4, 'Scott', 'scott@yahoo.com');
    const member5 = new Member(5, 'Benedict', 'beny@live.com');
    const member6 = new Member(6, 'Paul', 'paul@vk.com');
    return [member1, member2, member3, member4, member5, member6];
};

// create required objects
class MemberContainerView {
    constructor(member) {
        this._container = document.createElement('div');
        this._checker = document.createElement('input');
        this._paragraph = document.createElement('p');
        this._indexSpan = document.createElement('span');
        this._member = member;
        this._paragraph.textContent = this._member.getEmail();
        this._checker.setAttribute('type', 'checkbox');
        this._container.setAttribute("class", "memberContainerView");
        this._container.appendChild(this._indexSpan);
        this._container.appendChild(this._paragraph);
        this._container.appendChild(this._checker);
    }

    getMember() {
        return this._member;
    }

    setMember(value) {
        this._member = value;
    }

    getContainer() {
        return this._container;
    }

    setContainer(value) {
        this._container = value;
    }

    getChecker() {
        return this._checker;
    }

    setChecker(value) {
        this._checker = value;
    }

    isChecked() {
        return this._checker.checked;
    }

    setIndex(index) {
        if (typeof index === 'number')
            this._indexSpan.textContent = (parseInt(index)).toString();
    }
}

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

class Dialog {
    constructor(node) {
        this._node = node;
        this._id = node.getAttribute('id');
        this.setOverlay();
        document.body.appendChild(this._node);

    }

    setOverlay() {
        this._overlay = document.createElement('div');
        this._overlay.setAttribute('id', 'overlay');
        this._overlay.setAttribute('class', 'overlay');
        document.body.appendChild(this._overlay);
    }

    restore() {
        document.body.removeChild(document.getElementById('overlay'));
        document.body.removeChild(document.getElementById(this._id));

    }
}

function displayDialog() {
    const addGroupPopUp = document.createElement('div');
    addGroupPopUp.setAttribute('id', 'createGroupDialog');
    const title = document.createElement('p');
    const groupLabel = document.createTextNode("Group:");
    const groupTextInput = document.createElement('input');
    const createGroupButton = document.createElement('button');
    title.textContent = "Create Group";
    groupTextInput.placeholder = "Provide Group Name";
    createGroupButton.innerText = "Done";
    const elements = [title, groupLabel, groupTextInput, createGroupButton];
    elements.forEach((element) => {
        addGroupPopUp.appendChild(element);
    });
    const dialog = new Dialog(addGroupPopUp);
    createGroupButton.onclick = () => {
        if (groupTextInput.value) {
            dialog.restore();
        }
    }
}