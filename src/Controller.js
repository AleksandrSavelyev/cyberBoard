
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

        this.view.activateSaveListButton(this.addListToDataBase.bind(this));
        this.view.activateDeleteListButton(this.deleteList.bind(this));
        this.view.activateDeleteTaskButton(this.deleteTask.bind(this));
        this.view.activateAddTaskButton(this.addTaskForm.bind(this));
        this.view.activateSaveTaskButton(this.addTaskToDataBase.bind(this));
        this.view.activateCloseTaskButton(this.cancelTaskForm.bind(this));
    }

    addListToDataBase = (listName, listId) => {
        let newListInfo = {listName: listName, listId: listId, tasks: [] };
        this.model.addNewListToDataBase(newListInfo);
        this.createBoard();
    };

    addTaskToDataBase = (taskId, event) => {
        if (event.target.className === 'add-task__save-button'){
            event.stopPropagation();
            //console.log(event.path);
            //console.log(event.path[1].children[0]);
            const taskName = event.path[1].children[0].value;
            const newTask = {taskName: taskName, taskId: taskId};
            const listId = event.path[3].id;
            this.model.addNewTaskToDataBase(newTask, listId);
            this.createBoard();
        }
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

    addTaskForm = event => {
        if (event.target.className === 'list-container__add-task-button') {
            event.path[1].lastChild.style.display = 'block';
            event.stopPropagation();
        }
    };

    cancelTaskForm = event => {
        if (event.target.className === 'add-task__cancel-button') {
            event.path[1].style.display = 'none';
            event.path[1].children[0].value = '';
        }
    };
}

export default Controller;