
class Controller {
    constructor(view, model){
        this.model = model;
        this.view = view;
        
        this.init();
    }     
    
    init = () => {
        this.view.init();
        this.createBoard();
        this.view.activateAddListButton(this.showAddListForm.bind(this));
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
    }

    showAddListForm = () => {
        this.view.addListForm.style.display = 'block';
        this.view.activateSaveListButton(this.addList.bind(this));
    }

    addList = (listName, listId) => {
        let newListInfo = {listName: listName, listId: listId, tasks: [] };
        this.model.addNewListToDataBase(newListInfo);
        this.createBoard();
    };

    // activateAddListButton = () => {
    //     this.view.addNewListButton.addEventListener("click", this.startAddNewList);   
    // }
    
    // startAddNewList = () => {
    //     this.view.addNewListContainer();
    //     this.getNewList();
    //     this.closeList();
    // }

    // closeList = () => {
    //     this.view.activateCloseButton(this.deleteListFromDataBase.bind(this));
    // }

    // deleteListFromDataBase = () => {

    //     this.model.deleteListFromDataBase(this.view.listCard.id);
    //     this.createBoard();
    // }
    
    // getNewList = () => {
    //     this.view.activateSaveButton(this.saveNewListInfo.bind(this));
    // }

    // saveNewListInfo = () => {
    //     //console.log("salam");
    //     this.view.newListName.innerHTML = this.view.newListInput.value;
    //     this.view.newListInput.style.display = "block";
    //     let newListInfo = {listName: this.view.newListInput.value, listId: this.view.newListId, tasks: [] };
        
    //     this.model.addNewListToDataBase(newListInfo);
         
    //     this.createBoard();
    // }

    // getNewTask = () => {
    //     this.view.activateSaveTaskButton(this.saveNewTaskInfo.bind(this));
    // }

    // createNewTask = () => {
    //     this.view.activateAddTaskButton(this.createEmptyTask.bind(this));
    // }

    // createEmptyTask = () => {
    //     let newTaskInfo = {};
    //     console.log(this.view.listCard.id);
    //     this.model.addNewTask(newTaskInfo, this.view.listCard.id);

    //     this.createBoard();
    //     this.getNewTask();

    // }
    // saveNewTaskInfo = () => {
    //     let newTaskInfo = {taskName: this.view.newTaskInput.value, taskId: this.view.newTaskInput.id};
    //     this.model.addNewTask(newTaskInfo, this.view.listCard.id);

    //     this.createBoard();
    // }
}

export default Controller;