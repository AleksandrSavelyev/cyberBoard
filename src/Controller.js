import Model from "./Model";
import View from "./view";

class Controller {
    constructor(){
        this.model = new Model();
        this.view = new View();
        
        this.createBoard();
    }

    createBoard = () => {
        this.model.db.forEach(Element => {
            let listName = Element.listName;
            let listId = Element.listId;
            let tasks = Element.tasks;
            console.log(listId);
            console.log(listName);
            this.view.createListContainer(listId, listName);
            tasks.forEach(Element => {
                let taskName = Element.taskName;
                let taskId = Element.taskId;
                console.log(taskId);
                console.log(taskName);
                this.view.addTaskToList(taskName, taskId);
            });
        }); 
    }
    // addToDataBaseNewList = (listName) => {
        
    //     this.db.push(listName);
    //     console.log(this.db);
    // }

}

export default Controller;