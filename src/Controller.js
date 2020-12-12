import Model from "./Model";
import View from "./view";

class Controller {
    constructor(view, model){
        this.model = model;
        this.view = view;

        this.createBoard();
    }                  

    createBoard = () => {
        this.view.root.innerHTML = "";
        this.view.init();
        this.model.db.forEach(Element => {
            let listName = Element.listName;
            let listId = Element.listId;
            let tasks = Element.tasks;
            //console.log(listId);
            //console.log(listName);
            this.view.createListContainer(listId, listName);
            tasks.forEach(Element => {
                let taskName = Element.taskName;
                let taskId = Element.taskId;
                //console.log(taskId);
                //console.log(taskName);
                this.view.addTaskToList(taskName, taskId);
            });
        });

        this.activateAddListButton();
        this.getEmptyTask();
        this.closeList();
        this.getNewTask();
    }

    activateAddListButton = () => {
        this.view.addNewListButton.addEventListener("click", this.startAddNewList);   
    }
    
    startAddNewList = () => {
        this.view.addNewListContainer();
        this.getNewList();
        this.closeList();
    }

    closeList = () => {
        this.view.activateCloseButton(this.deleteListFromDataBase.bind(this));
    }

    deleteListFromDataBase = () => {

        this.model.deleteListFromDataBase(this.view.listCard.id);
        this.createBoard();
    }
    
    getNewList = () => {
        this.view.activateSaveButton(this.saveNewListInfo.bind(this));
    }

    addInfoFromViewToDataBase = (newListInfo) => {
        this.model.addNewListToDataBase(newListInfo);
         
         this.createBoard();
    }

    saveNewListInfo = () => {
        //console.log("salam");
        this.view.newListName.innerHTML = this.view.newListInput.value;
        this.view.newListInput.style.display = "block";
        let newListInfo = {listName: this.view.newListInput.value, listId: this.view.newListId, tasks: [] };
        
        this.addInfoFromViewToDataBase(newListInfo);
    }

    getEmptyTask = () => {
        this.view.activateAddTaskButton(this.createEmptyTask.bind(this));
    }

    getNewTask = () => {
        this.view.activateSaveTaskButton(this.saveNewTaskInfo.bind(this));
    }
    
    createEmptyTask = () => {
        let newTaskInfo = { taskId: this.view.newTaskId }; 
      
        this.model.addNewTask(newTaskInfo, this.view.listCard.id);

        this.createBoard();

    }

    saveNewTaskInfo = () => {

        let newTaskInfo = {taskName: this.view.newTaskInput.value, taskId: this.view.newTaskId};
        
        this.model.addNewTask(newTaskInfo, this.view.listCard.id);

        this.createBoard();
    }
}

export default Controller;