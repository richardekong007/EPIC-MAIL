function buildComposeMailUI() {
    const headerTitle = document.getElementById('headerTitle');
    const mainSection = document.getElementById('content');
    const lineBreak = document.createElement('br');
    const form = document.createElement('form');
    headerTitle.innerHTML = "Compose Mail";
    form.setAttribute("class", "composeMailForm");
    form.setAttribute('action', '#');
    //clear the content as long as the form is empty
    if (form.childNodes.length < 1) {
        clearContent(mainSection);
    }
    //create label for input components
    const recipientLabel = document.createElement('label');
    const copyToLabel = document.createElement('label');
    const groupLabel = document.createElement('label');
    const subjectLabel = document.createElement('label');
    recipientLabel.innerHTML = 'To:';
    copyToLabel.innerHTML = 'cc/Bcc:';
    groupLabel.innerHTML = 'Group:';
    subjectLabel.innerHTML = 'Subject:';

    //create input UI component
    const recipientInput = document.createElement('input');
    const emailHint = "Please enter correct email";
    const copyToInput = document.createElement('input');
    const subjectInput = document.createElement('input');
    const messageTextArea = document.createElement('textarea');
    recipientInput.placeholder = emailHint;
    recipientInput.setAttribute('id', 'recipientInput');
    copyToInput.placeholder = emailHint;
    copyToInput.setAttribute('id', 'copyTo');
    subjectInput.placeholder = "Please email subject";
    subjectInput.setAttribute('id', 'subjectInput');
    messageTextArea.placeholder = "Type message here";
    messageTextArea.setAttribute('id', 'composeMailTextArea');

    //create section to place action buttons
    const actionSection = document.createElement('div');
    const sendButton = document.createElement('button');
    const attachButton = document.createElement('button');
    const draft = document.createElement('button');
    actionSection.setAttribute('id', 'actionSection');
    sendButton.setAttribute('id', 'sendButton');
    sendButton.innerText = 'Send';
    attachButton.setAttribute('id', 'attachButton');
    attachButton.innerText = 'Attach';
    draft.setAttribute('id', 'draft');
    draft.innerText = 'Save to Draft';

    //add elements to content when form contains no element
    if (form.childNodes.length < 1) {
        appendAllChildren(actionSection, [sendButton, attachButton, draft]);
        appendAllChildren(form, [lineBreak, recipientLabel, recipientInput, copyToLabel, copyToInput,
            subjectLabel, subjectInput, messageTextArea, actionSection]);
        //add the form to content div
        mainSection.appendChild(form);
    }
}

function appendAllChildren(parentNode, nodes) {
    if (parentNode !== null && nodes !== null) {
        if (nodes.length > 0) {
            nodes.forEach((node) => {
                parentNode.appendChild(node);
            });
        }
    }
}

function clearContent(node) {
    if (node.hasChildNodes()) {
        node.innerHTML = '';
    }
}