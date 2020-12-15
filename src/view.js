import './style.less';

class View {
    constructor(){
        this.root = null;
        this.allLists = null;
        this.taskCard = null; //id model
        this.tasksList = null; //id model
        this.newTaskId = null; //funk
        this.newListId = null; //funk
        this.inputForNewTask = null; //value
        this.inputForNewList = null; 
        this.addNewListButton = null; 
        this.addNewTaskButton = null; //1
        this.saveNewTaskButton = null; //1
        this.saveNewListButton = null; 
    }
    
    init = () => {
        this.root = document.getElementById('root');
        const header = this.createHeader({className: 'header', headerText: 'CYBER BOARD', });
        const addList = this.createDiv({className: 'add__list'});
        this.allLists = this.createDiv({className: 'all__lists'});
        const listsContainer = this.createDiv({className: 'container'});
        this.inputForNewList = this.createInput({className: 'add-list__list-input', placeholder: 'Enter list name...'});
        this.addNewListButton = this.createButton({className: 'add-list__add-button', buttonText: '+ Add new list', id: 'addlist'});
        const saveListButton = this.createButton({className: 'add-list__save-button', buttonText: 'Save list', id: 'savelist'});
        const cancelListButton = this.createButton({className: 'add-list__cancel-button', buttonText: 'x', id: 'cancelList'});
        
        addList.append(this.inputForNewList);
        addList.append(this.addNewListButton);
        addList.append(saveListButton);
        addList.append(cancelListButton);
        listsContainer.append(this.allLists);
        listsContainer.append(addList);
        this.root.append(header);
        this.root.append(listsContainer);
    }

    createListContainer = (id, name) => {
        this.tasksList = this.createUl({id: id, className: 'task-container__tasks-list'});
        const listName = this.createSpan({className: 'list-container__list-name', spanText: name});
        const listColumn = this.createDiv({className: 'all-lists__list-column'});
        const addTaskForm = this.createDiv({className: 'task-container__add-task'});
        const addTaskInput = this.createInput({className: 'add-task__input', placeholder: 'Enter task'});
        const listContainer = this.createDiv({className: 'list__container'});
        const taskContainer = this.createDiv({className: 'task__container'});
        const addTaskButton = this.createButton({id: 'addtask', className: 'list-container__add-task-button', buttonText: 'Add task'});
        const saveTaskButton = this.createButton({id: 'savetask', className: 'add-task__save-button', buttonText: 'Save'});
        const cancelTaskButton = this.createButton({id: 'canceltask', className: 'add-task__cncel-button', buttonText: 'x'});
        const deleteListButton  = this.createSpan({id: 'deletelist', className: 'list-container__delete-button', spanText: '❎'});
        
        listContainer.append(listName);
        listContainer.append(deleteListButton);
        listContainer.append(addTaskButton);
        addTaskForm.append(addTaskInput);
        addTaskForm.append(saveTaskButton);
        addTaskForm.append(cancelTaskButton);
        taskContainer.append(this.tasksList);
        taskContainer.append(addTaskForm);
        listColumn.append(listContainer);
        listColumn.append(taskContainer);
        this.allLists.append(listColumn);
    }

    // addNewListContainer = () => {
    //     this.addNewListButton.style.display = "none";
    //     let id = 3;
    //     this.newListId = "List_" + id;
    //     this.listCard = this.createUl({
    //         id: this.newListId,
    //         className: 'list__card',
    //     });
    //     this.newListName = this.createSpan({
    //         className: 'list__name',
    //     });
    //     this.newListInput = this.createInput({
    //         className: 'list_input',
    //         placeholder: 'Enter list title...',
    //     });
    //     this.saveListButton = this.createButton({
    //         className: 'save__list',
    //         buttonText: 'Save list',
    //     });
    //     const cancelButton  = this.createSpan({
    //         id: this.newListId,
    //         className: 'close',
    //         spanText: '❎',
    //     });
    //     const addTaskButton = this.createButton({
    //         id: this.newListId,
    //         className: 'add__task',
    //         buttonText: 'Add task',
    //     }); 
    //     const newTaskInput = this.createInput({
    //         className: 'task__input',
    //         placeholder: 'Enter task',
    //     });
    //     const saveTaskButton = this.createButton({
    //         id: taskId,
    //         className: 'save__button',
    //         buttonText: 'Save',
    //     });
    //     const deleteTaskButton = this.createButton({
    //         className: 'delete__task',
    //         buttonText: 'x',
    //     });
        
    //     this.listCard.append(this.newListInput);
    //     this.listCard.append(cancelButton);
    //     this.listCard.append(this.newListName);
    //     this.listCard.append(this.saveListButton);
    //     this.listCard.append(addTaskButton);
    //     this.listCard.append(newTaskInput);
    //     this.listCard.append(saveTaskButton);
    //     this.listCard.append(deleteTaskButton);
    //     this.allLists.append(this.listCard);

    //     addTaskButton.style.display = "none";
    //     saveTaskButton.style.display = "none";
    // }

    // addTaskToList = (taskName, taskId) => {
    //     const taskLi = this.createLi({
    //         id: taskId,
    //         className: 'task__card',
    //     });
    //     this.newTaskName = this.createSpan({
    //         className: 'task__name',
    //         spanText: taskName,
    //     });

    //     taskLi.append(this.newTaskName);
    //     this.listCard.append(taskLi);
    //     //saveButton.addEventListener('click', this.addNewTask)
    // }

    createDiv = props => {
        const div = document.createElement('div');

        props.className && (div.className = props.className);
        props.divText && (div.innerText = props.divText);
        props.id && (div.id = props.id);

        return div;
    }

    createButton = props => {
        const button = document.createElement('button');

        props.className && (button.className = props.className);
        props.buttonText && (button.innerText = props.buttonText);
        props.id && (button.id = props.id);

        return button;
    }

    createHeader = props => {
        const h1 = document.createElement('h1');

        props.className && (h1.className = props.className);
        props.headerText && (h1.innerText = props.headerText);
        props.id && (h1.id = props.id);

        return h1;
    }

    createInput = props => {
        const input = document.createElement('input');

        props.className && (input.className = props.className);
        props.placeholder && (input.placeholder = props.placeholder);
        props.id && (input.id = props.id);

        return input;
    }

    createSpan = props => {
        const span = document.createElement('span');

        props.className && (span.className = props.className);
        props.spanText && (span.innerText = props.spanText);
        props.id && (span.id = props.id);

        return span;
    }

    createUl = props => {
        const ul = document.createElement('ul');

        props.className && (ul.className = props.className);
        props.ulText && (ul.innerText = props.ulText);
        props.id && (ul.id = props.id);

        return ul;
    }

    createLi = props => {
        const li = document.createElement('li');

        props.className && (li.className = props.className);
        props.liText && (ul.innerText = props.liText);
        props.id && (li.id = props.id);

        return li;
    }
    // changeListName = () => {
    //     this.listInput.style.display = "block";
    //     this.cancelButton.style.display = "block";
    //     this.listName.style.display = "none";
    //     this.addListButton.style.display = "block";
    //     this.cancelButton.removeEventListener('click', this.cancelAdd)
    //     this.cancelButton.addEventListener('click', this.cancelChange);  
    // }

}

export default View;