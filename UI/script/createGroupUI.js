
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