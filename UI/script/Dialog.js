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
