class Controller {
    constructor (model, view) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
        this._view.addColumnbButton.addEventListener('click', this._view.createListContainer);
    }
}

export default Controller;