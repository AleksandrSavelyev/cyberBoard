class Controller {
    constructor(view, db){
        this.view = view;
        this.db = db;

        this.init();
    }
    
    init = () => {
        this.view.init();
        this.view.addColumnbButton.addEventListener("click", this.view.createListContainer);
    }

    addToDataBaseNewList = (listName) => {
        
        this.db.push(listName);
        console.log(this.db);
    }

}

export default Controller;