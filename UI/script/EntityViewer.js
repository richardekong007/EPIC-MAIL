
class EntityViewer {
    constructor(entity) {
        this._viewer = document.createElement('div');
        this._checker = document.createElement('input');
        this._paragraph = document.createElement('p');
        this._indexSpan = document.createElement('span');
        this._entity = entity;
        if (entity instanceof Member) {
            this._paragraph.textContent = this._entity.getEmail();
        } else if (entity instanceof Group) {
            this._paragraph.textContent = this._entity.getName();
        }
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
            this._indexSpan.textContent =
                (parseInt(index)).toString();
    }
}