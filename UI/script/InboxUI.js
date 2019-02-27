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

class Sender {
    constructor(id, email, name) {
        this._id = id;
        this._email = email;
        this._name = name;
    }


    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getEmail() {
        return this._email;
    }

    setEmail(value) {
        this._email = value;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getMessage() {
        return this._message;
    }

    setMessage(value) {
        this._message = value;
    }
}

class ItemViewer {
    constructor(item) {
        this._item = item;
        this._viewer = document.createElement('div');
        this._viewer.setAttribute('class', 'itemViewer');
        this._indexSpan = document.createElement('span');
        this._inboxItemDetail = document.createElement('div');
        this._dateSpan = document.createElement('span');
        this._viewButton = document.createElement('button');
        this._deleteButton = document.createElement('button');
        this.setInboxItemDetail();
        this.setDateSpan();
        this._viewButton.setAttribute('id', 'viewButton');
        this._deleteButton.setAttribute('id', 'deleteButton');
        this._viewButton.innerText = 'View';
        this._deleteButton.innerText = 'Delete';
        this._viewer.appendChild(document.createElement('br'));
        this._viewer.appendChild(this._indexSpan);
        this._viewer.appendChild(this._inboxItemDetail);
        this._viewer.appendChild(this._dateSpan);
        this._viewer.appendChild(this._viewButton);
        this._viewer.appendChild(this._deleteButton);
    }

    getItem() {
        return this._item;
    }

    setItem(value) {
        this._item = value;
    }

    getViewer() {
        return this._viewer;
    }

    setIndexSpan(value) {
        this._indexSpan.setAttribute('id', 'itemViewerIndex');
        if (typeof value === 'number')
            this._indexSpan.textContent = (parseInt(value)).toString();
    }

    getIndexSpan() {
        return this._indexSpan;
    }

    getViewButton() {
        return this._viewButton;
    }

    getDeleteButton() {
        return this._deleteButton;
    }

    setDateSpan() {
        this._dateSpan.setAttribute('id', 'dateReceived');
        this._dateSpan.innerText = this._item.getCreatedOn()
    }

    setInboxItemDetail() {
        let senderEmail = document.createTextNode(this._item.getSender().getEmail());
        let subject = document.createTextNode(this._item.getSender().getMessage().getSubject());
        let msgHeader = document.createTextNode('');
        let message = this._item.getMessage().getContent();
        if (message.length > 15) {
            message = (message.substring(0, 15)) + ' ...';
        }
        msgHeader.textContent = message;
        let details = [senderEmail, subject, msgHeader];
        details.forEach((detail, index, array) => {
            if (index > 0 && index < array.length)
                this._inboxItemDetail.appendChild(document.createElement('br'));
            this._inboxItemDetail.appendChild(detail);
        });
    }

}


const createInboxItems = () => {

    const message1 = new Message(1, "There will be conference", "Conference");
    const message2 = new Message(2, "You have been Promoted to position of Senior developer", "Promotion");
    const message3 = new Message(3, "EPIC Mail has been accepted", 'EPIC Mail Status');
    const message4 = new Message(4, "Project deadline has been Postponed", 'EPIC Mail Postponement');
    const message5 = new Message(5, "Max is now CTO", 'New CTO');
    const message6 = new Message(6, "We will be switching from AsynTask to RxAndroid", 'Framework Switch');

    const sender1 = new Sender(1, 'mark@gmail.com', 'Mark');
    const sender2 = new Sender(2, 'john@gmail.com', 'john');
    const sender3 = new Sender(3, 'mercy@rocketMail.com', 'Mercy');
    const sender4 = new Sender(4, 'paul@vk.com', 'Paul');
    const sender5 = new Sender(5, 'scott@yahoo.com', 'Scott');
    const sender6 = new Sender(6, 'beny@live.com', 'Beny');

    sender1.setMessage(message1);
    sender2.setMessage(message2);
    sender3.setMessage(message3);
    sender4.setMessage(message4);
    sender5.setMessage(message5);
    sender6.setMessage(message6);

    const item1 = new InboxItem(sender1, 'Feb 27');
    const item2 = new InboxItem(sender2, 'Feb 15');
    const item3 = new InboxItem(sender3, 'Feb 6');
    const item4 = new InboxItem(sender4, 'Jan 29');
    const item5 = new InboxItem(sender5, 'Jan 25');
    const item6 = new InboxItem(sender6, 'Jan 20');

    return [item1, item2, item3, item4, item5, item6];
};

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