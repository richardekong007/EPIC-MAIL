function displayInbox() {

    const mainSection = document.getElementById('content');
    const lineBreak = document.createElement('br');
    const contentTitle = document.getElementById('headerTitle');
    const inboxItems = createInboxItems();
    let viewers;
    mainSection.innerHTML = '';
    contentTitle.textContent = "Inbox";
    mainSection.appendChild(lineBreak);
    viewers = displayAndGetItemViewers(inboxItems, mainSection);
    viewers.forEach((viewer) => {
        let viewButton = viewer.getViewButton();
        viewButton.onclick = () => showMessage(viewer.getItem());
    });
}

function displaySentItems() {

    const mainSection = document.getElementById('content');
    const lineBreak = document.createElement('br');
    const contentTitle = document.getElementById('headerTitle');
    const sentItems = createSentItems();
    let viewers;
    mainSection.innerHTML = '';
    contentTitle.textContent = "Sent Messages";
    mainSection.appendChild(lineBreak);
    viewers = displayAndGetItemViewers(sentItems, mainSection);
    viewers.forEach((viewer) => {
        let viewButton = viewer.getViewButton();
        viewButton.onclick = () => {
            showMessage(viewer.getItem());
        }
    });

}

function displayDraft() {

    const mainSection = document.getElementById('content');
    const lineBreak = document.createElement('br');
    const contentTitle = document.getElementById('headerTitle');
    const draftItems = createInboxItems(); //createDraftItem();
    let viewers;
    mainSection.innerHTML = '';
    contentTitle.textContent = "Draft";
    mainSection.appendChild(lineBreak);
    viewers = displayAndGetItemViewers(draftItems, mainSection);
    viewers.forEach((viewer) => {
        let viewButton = viewer.getViewButton();
        viewButton.onclick = () => {
            showMessagesInDraft(viewer.getItem());
        }
    });
}

function displayAndGetItemViewers(items, section) {
    let viewers = [];
    items.forEach((item, index) => {
        let viewer = new ItemViewer(item);
        viewer.setIndexSpan(index + 1);
        section.appendChild(viewer.getViewer());
        viewers.push(viewer);
    });
    return viewers;
}

function showMessage(viewerItem) {

    const mainSection = document.getElementById('content');
    const receivedMailView = document.createElement('div');
    const subjectView = document.createElement('div');
    const senderEmailView = document.createElement('div');
    const dateView = document.createElement('div');
    const messageView = document.createElement('div');

    subjectView.textContent = viewerItem.getSender().getMessage().getSubject();
    senderEmailView.textContent = viewerItem.getSender().getEmail();
    dateView.textContent = viewerItem.getCreatedOn();
    messageView.textContent = viewerItem.getSender().getMessage().getContent();

    let elements = [subjectView, senderEmailView, dateView, messageView];
    receivedMailView.setAttribute('id', 'receivedMailView');
    subjectView.setAttribute('id', 'subjectView');
    senderEmailView.setAttribute('id', 'senderEmailView');
    dateView.setAttribute('id', 'dateView');
    messageView.setAttribute('id', 'messageView');

    if (mainSection.hasChildNodes()) {
        mainSection.innerHTML = '';
        receivedMailView.appendChild(document.createElement('br'));
        elements.forEach(element => {
            receivedMailView.appendChild(element);
        });
        mainSection.appendChild(receivedMailView);
    }

}

function showMessagesInDraft(viewerItem) {
    const mainSection = document.getElementById('content');
    const draftContents = document.createElement('div');
    const toLabel = document.createElement('label');
    const ccBccLabel = document.createElement('label');
    const subjectLabel = document.createElement('label');

    const emailInput = document.createElement('input');
    const ccBccInput = document.createElement('input');
    const subjectInput = document.createElement('input');
    const draftMessage = document.createElement('textarea');

    const sendButton = document.createElement('button');
    const attachButton = document.createElement('button');
    const actionSection = document.createElement('div');

    draftContents.setAttribute('id', 'expandedDraftContent');
    toLabel.innerText = "To:";
    ccBccLabel.innerText = "ccBcc:";
    subjectLabel.innerText = "Subject:";

    subjectInput.value = viewerItem.getSender().getMessage().getSubject();
    emailInput.textContent = viewerItem.getSender().getEmail();
    draftMessage.value = viewerItem.getSender().getMessage().getContent();

    sendButton.innerText = 'Send';
    attachButton.innerText = 'Attach';

    mainSection.innerHTML = '';
    actionSection.appendChild(sendButton);
    actionSection.appendChild(attachButton);

    [toLabel, emailInput, ccBccLabel, ccBccInput,
        subjectLabel, subjectInput, draftMessage,actionSection]
        .forEach((element) => {
            draftContents.appendChild(element)
        });
    mainSection.appendChild(draftContents);

}