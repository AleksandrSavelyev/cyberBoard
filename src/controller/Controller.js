class Controller {
    constructor(view, model){
        this.model = model;
        this.view = view;
        
        this.init();
    }     
    
    init = () => {
        this.view.init();
        this.createBoard();
    }

    createBoard = () => {
        this.view.root.innerHTML = "";
        this.view.init();
        this.model.db.forEach(Element => {
            let listName = Element.listName;
            let listId = Element.listId;
            let tasks = Element.tasks;
            this.view.createListContainer(listId, listName);
            tasks.forEach(Element => {
                let taskName = Element.taskName;
                let taskId = Element.taskId;
                this.view.addTaskToList(taskName, taskId);
            });
        });

        this.view.activateSaveListButton(this.addList.bind(this));
        this.view.activateDeleteListButton(this.deleteList.bind(this));
        this.view.activateDeleteTaskButton(this.deleteTask.bind(this));
    }

    addList = (listName, listId) => {
        let newListInfo = {listName: listName, listId: listId, tasks: [] };
        this.model.addNewListToDataBase(newListInfo);
        this.createBoard();
    };

    deleteList = event => {
        if (event.target.className === 'list-container__delete-button') {
        //console.log(event.path);
           this.model.deleteListFromDataBase(event.path[2].id);
           this.createBoard();
        }
     };
    
    deleteTask = event => {
        if (event.target.className === 'task-card__delete-task') {
        //console.log(event.path);
           this.model.deleteTaskFromDataBase(event.path[1].id);
           this.createBoard();
        }
     };
}

export default Controller;