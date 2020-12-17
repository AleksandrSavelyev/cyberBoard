
class View {
    constructor(){
        this.root = null;
        this.allLists = null;
        this.taskCard = null; 
        this.tasksList = null; 
        this.newTaskId = null; 
        this.newListId = null; 
        this.addListForm = null; 
        this.saveListButton = null; 
        this.inputForNewTask = null; 
        this.inputForNewList = null; 
        this.addNewListButton = null; 
        this.addNewTaskButton = null; 
        this.saveNewTaskButton = null;
        this.cancelListButton =null;
    }
    
    init = () => {
        this.root = document.getElementById('root');
        const header = this.createHeader({className: 'header', headerText: 'CYBER BOARD', });
        const addList = this.createDiv({className: 'lists-container__add-list'});
        this.allLists = this.createDiv({className: 'lists-container__all-lists'});
        this.addListForm = this.createDiv({className: 'add-list__add-form'});
        this.saveListButton = this.createButton({className: 'add-list__save-button', buttonText: 'Save list', id: 'savelist'});
        const listsContainer = this.createDiv({className: 'lists-container'});
        this.inputForNewList = this.createInput({className: 'add-list__list-input', placeholder: 'Enter list name...'});
        this.addNewListButton = this.createButton({className: 'button-container__add-button', buttonText: '+ Add new list', id: 'addlist'});
        this.cancelListButton = this.createButton({className: 'add-list__cancel-button', buttonText: 'x', id: 'cancelList'});
        const addListButtonContainer = this.createDiv({className: 'add-list__button-container'});

        addListButtonContainer.append(this.addNewListButton);
        this.addListForm.append(this.inputForNewList);
        this.addListForm.append(this.saveListButton);
        this.addListForm.append(this.cancelListButton);
        addList.append(addListButtonContainer);
        addList.append(this.addListForm);
        listsContainer.append(this.allLists);
        listsContainer.append(addList);
        this.root.append(header);
        this.root.append(listsContainer);

        this.addListForm.style.display = 'none';
        this.addNewListButton.addEventListener('click', this.showAddListForm);
    }
    
    createListContainer = (id, name) => {
        this.tasksList = this.createUl({className: 'task-container__tasks-list'});
        const listName = this.createSpan({className: 'list-container__list-name', spanText: name});
        const listColumn = this.createDiv({id: id, className: 'all-lists__list-column'});
        const addTaskForm = this.createDiv({className: 'task-container__add-task'});
        const addTaskInput = this.createInput({className: 'add-task__input', placeholder: 'Enter task'});
        const listContainer = this.createDiv({className: 'list__container'});
        this.taskContainer = this.createDiv({className: 'task__container'});
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
        this.taskContainer.append(this.tasksList);
        this.taskContainer.append(addTaskForm);
        listColumn.append(listContainer);
        listColumn.append(this.taskContainer);
        this.allLists.append(listColumn);
        addTaskForm.style.display = 'none';
    }
    
    addTaskToList = (name, id) => {
        this.taskLi = this.createLi({id: id, className: 'task__card', draggable: 'true', });
        const taskName = this.createSpan({className: 'task-card__task-name', spanText: name});
        const deleteTaskButton = this.createButton({id: 'deletetask', className: 'task-card__delete-task', buttonText: 'x'});
        
        this.taskLi.append(taskName);
        this.taskLi.append(deleteTaskButton);
        this.drag();
        this.tasksList.append(this.taskLi);
        //saveButton.addEventListener('click', this.addNewTask)
    }
        
    showAddListForm = () => {
        this.addListForm.style.display = 'block';
        this.cancelListButton.addEventListener('click', this.closeAddListForm);
    }
    
    closeAddListForm = () => {
        this.addListForm.style.display = 'none';
        this.inputForNewList.value = '';
    }

    createNewListId = () => {
        this.newListId++;
    }
    
    activateSaveListButton = cb => {
        this.saveListButton.addEventListener('click', () => {
            const newListName = this.inputForNewList.value;
            this.createNewListId();
            let newId = 'List_' + this.newListId;
            cb(newListName, newId);
         });
    }

    activateDeleteListButton = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }

    activateDeleteTaskButton = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }

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

    drag = () => {
        this.taskLi.addEventListener('dragstart', ev => {ev.dataTransfer.setData("text", ev.target.id) });
        this.taskContainer.addEventListener('drop', ev => {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            console.log(ev.target)
            ev.target.appendChild(document.getElementById(data));
        });

        this.taskContainer.addEventListener('dragover', ev => {ev.preventDefault()})
      }

    createLi = props => {
        const li = document.createElement('li');

        props.className && (li.className = props.className);
        props.liText && (ul.innerText = props.liText);
        props.id && (li.id = props.id);
        props.draggable && (li.draggable = props.draggable);
        return li;
    }
}

export default View;