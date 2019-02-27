

function createGroupUI() {
    //create members
    const members = createMembers();
    const mainSection = document.getElementById('content');
    const title = document.getElementById('headerTitle');
    const headerSection = document.getElementById('headerSection');
    const addButton = document.createElement('button');
    const lineBreak = document.createElement('br');
    addButton.setAttribute('id', 'adminAddButton');
    addButton.innerText = "Add";
    addButton.onclick = displayDialog;
    headerSection.appendChild(addButton);
    title.textContent = 'Create Group';
    mainSection.innerHTML = '';
    mainSection.appendChild(lineBreak);
    displayEntities(members, mainSection);

}

function viewGroupUI() {
    const groups = createGroups();
    const headerSection = document.getElementById('headerSection');
    const mainSection = document.getElementById('content');
    const title = document.getElementById('headerTitle');
    const lineBreak = document.createElement('br');
    removeElementById('adminAddButton', headerSection);
    title.textContent = "Groups";
    mainSection.innerHTML = '';
    mainSection.appendChild(lineBreak);
    displayEntities(groups, mainSection)
}

function displayEntities(entities, section) {
    entities.forEach((entity, index) => {
        let entityViewer = new EntityViewer(entity);
        entityViewer.setIndex(index + 1);
        section.appendChild(entityViewer.getViewer());
    });
}

function removeElementById(id, parent) {

    if (parent.hasChildNodes()) {
        let element = document.getElementById(id);
        if (element) {
            if (element.parentNode === parent) {
                parent.removeChild(element);
            }
        }
    }
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

//create mock groups
const createGroups = () => {
    const group1 = new Group(1, 'Human Resource');
    const group2 = new Group(2, "Db Team");
    const group3 = new Group(3, 'Management');
    const group4 = new Group(4, 'Dev ops');
    const group5 = new Group(5, 'QA Team');
    let groups = [group1, group2, group3, group4, group5];
    groups.forEach(group => {
        group.setMembers(createMembers())
    });
    return groups;
};

// create required objects
class EntityViewer {
    constructor(entity) {
        this._viewer = document.createElement('div');
        this._checker = document.createElement('input');
        this._paragraph = document.createElement('p');
        this._indexSpan = document.createElement('span');
        this._entity = entity;
        if (entity instanceof Member)
            this._paragraph.textContent = this._entity.getEmail();
        else if (entity instanceof Group)
            this._paragraph.textContent = this._entity.getName();
        this._checker.setAttribute('type', 'checkbox');
        this._viewer.setAttribute("class", "EntityViewer");
        this._viewer.appendChild(this._indexSpan);
        this._viewer.appendChild(this._paragraph);
        this._viewer.appendChild(this._checker);
    }

    getEntity() {
        return this._entity;
    }

    setEntity(value) {
        this._entity = value;
    }

    getViewer() {
        return this._viewer;
    }

    setViewer(value) {
        this._viewer = value;
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