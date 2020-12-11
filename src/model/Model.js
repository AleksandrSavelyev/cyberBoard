class Model {
    constructor () {
        this._colomnDb = [];
        this._taskDb = [];

        this.init();
    }

    init = () => {

    }

    addDB = (curentColomn) => {
        this._colomnDb.push(curentColomn);
    }
}

export default Model;