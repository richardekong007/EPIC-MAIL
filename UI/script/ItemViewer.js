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
