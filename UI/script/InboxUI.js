
function displayItemsInInbox() {

    const mainSection = document.getElementById('content');
    const lineBreak = document.createElement('br');
    const contentTitle = document.getElementById('headerTitle');
    const inboxItems = createInboxItems();
    let viewers;
    mainSection.innerHTML = '';
    contentTitle.textContent = "Inbox";
    mainSection.appendChild(lineBreak);
    viewers = displayAndGetItemViewers(inboxItems, mainSection);
    displayReceivedItem(viewers);
}

function displayReceivedItem(viewers) {
    viewers.forEach((viewer) => {
        let viewButton = viewer.getViewButton();
        viewButton.onclick = () => {
            showMessage(viewer.getItem())
        };
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