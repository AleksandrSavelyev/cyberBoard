  
import Controller from './Controller';
import './style.less';

class View {
    constructor(){
        this.root = document.getElementById('root');
        this.header = null;
        this.allLists = null;
        this.listCard = null;
        this.newTaskId = null;
        this.newListId = null;
        this.newTaskNAme = null;
        this.newListName = null;
        this.newTaskInput = null;
        this.newListInput = null;
        this.saveListButton = null;
        this.addNewListButton = null;
    }
    
    init = () => {
        const listsContainer = this.createDiv({
            className: 'container',
        });
        this.allLists = this.createDiv({
            className: 'lists',
        });
        const buttonKeeper = this.createDiv({
            className: 'add__list',
        });
        this.addNewListButton = this.createButton({
            className: 'add__list__button',
            buttonText: '+ Add new list',
        });
        this.header = this.createHeader({
            className: 'header',
            headerText: 'CYBER BOARD',
        });
     
        buttonKeeper.append(this.addNewListButton);
        listsContainer.append(this.allLists);
        listsContainer.append(buttonKeeper);
        this.root.append(this.header);
        this.root.append(listsContainer);

    }

    createListContainer = (listId, listName) => {
        //this.addColumnbButton.style.display = "none";
        this.listCard = this.createDiv({
            id: listId,
            className: 'list__card',
        });
        const newlistName = this.createSpan({
            className: 'list__name',
            spanText: listName,
        });
        const listInput = this.createInput({
            className: 'list_input',
            placeholder: 'Enter list title...',
        });
        const saveListButton = this.createButton({
            className: 'save__list',
            buttonText: 'Save list',
        });
        const cancelButton  = this.createSpan({
          id: listId,
          className: 'close',
          spanText: '❎',
        });
        const addTaskButton = this.createButton({
            id: listId,
            className: 'add__task',
            buttonText: 'Add task',
        });

        this.listCard.append(listInput);
        this.listCard.append(cancelButton);
        this.listCard.append(newlistName);
        this.listCard.append(saveListButton);
        this.listCard.append(addTaskButton);
        this.allLists.append(this.listCard);

        listInput.style.display = "none";
        saveListButton.style.display = "none";
        //this.addListButton.addEventListener("click", this.createNewList);
        // this.cancelAdd();
        this.activateAddTaskButton();
    }

    addNewListContainer = () => {
        this.addNewListButton.style.display = "none";
        let id = 3;
        this.newListId = "List_" + id;
        this.listCard = this.createDiv({
            id: this.newListId,
            className: 'list__card',
        });
        this.newListName = this.createSpan({
            className: 'list__name',
        });
        this.newListInput = this.createInput({
            className: 'list_input',
            placeholder: 'Enter list title...',
        });
        this.saveListButton = this.createButton({
            className: 'save__list',
            buttonText: 'Save list',
        });
        const cancelButton  = this.createSpan({
            id: this.newListId,
            className: 'close',
            spanText: '❎',
        });
        const addTaskButton = this.createButton({
            id: this.newListId,
            className: 'add__task',
            buttonText: 'Add task',
        }); 
        
        this.listCard.append(this.newListInput);
        this.listCard.append(cancelButton);
        this.listCard.append(this.newListName);
        this.listCard.append(this.saveListButton);
        this.listCard.append(addTaskButton);
        this.allLists.append(this.listCard);

        addTaskButton.style.display = "none";
        // this.cancelAdd();
    }

    activateSaveButton = cb => {
        this.saveListButton.addEventListener('click', () => {
            cb();
        });
    }

    activateCloseButton = cb => {
        const closeButtons = document.querySelectorAll(".close");
        for (let i = 0; i < closeButtons.length; i++) {

            closeButtons[i].addEventListener('click', () => {
                this.listCard.id = closeButtons[i].id;
                cb();
            });
        }  
    }

    activateAddTaskButton = cb => {
        const addTaskButtons = document.querySelectorAll(".add__task");
        for (let i = 0; i < addTaskButtons.length; i++) {

            addTaskButtons[i].addEventListener('click', () => {
                this.listCard.id = addTaskButtons[i].id;
                cb();
            });
        } 
    } 
    
    activateSaveTaskButton = cb => {
        const saveTaskButtons = document.querySelectorAll(".save__button");
        for (let i = 0; i < saveTaskButtons.length; i++) {

            saveTaskButtons[i].addEventListener('click', () => {
                this.listCard.id = saveTaskButtons[i].id;
                cb();
            });
        } 
    }

    addTaskToList = (taskName, taskId) => {
        const taskDiv = this.createDiv({
            id: taskId,
            className: 'task__card',
        });
        this.newTaskInput = this.createInput({
            className: 'task__input',
            placeholder: 'Enter task',
        });
        const newTaskName = this.createSpan({
            className: 'task__name',
            spanText: taskName,
        });
        const saveTaskButton = this.createButton({
            className: 'save__button',
            buttonText: 'Save',
        });
        const deleteTaskButton = this.createButton({
            className: 'delete__task',
            buttonText: 'x',
        });

        taskDiv.append(newTaskName);
        taskDiv.append(this.newTaskInput);
        taskDiv.append(saveTaskButton);
        taskDiv.append(deleteTaskButton);
        this.listCard.append(taskDiv);

        if(taskName){ this.newTaskInput.style.display = "none"; saveTaskButton.style.display = "none"; };
        

        this.activateAddTaskButton();
        //saveButton.addEventListener('click', this.addNewTask)
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

    // createNewList = () => {
    //     this.addListButton.style.display = "none";
    //     let inputText = this.listInput.value;
    //     this.listInput.style.display = "none";
    //     this.listName.innerHTML = inputText;
    //     this.listName.style.display = "block";
    //     this.cancelButton.style.display = "block";
    //     this.oldListName = inputText;
    //     this.addColumnbButton.style.display = "block";

    //     this.listName.addEventListener("click", this.changeListName);

    //     return inputText;
    // }

    // changeListName = () => {
    //     this.listInput.style.display = "block";
    //     this.cancelButton.style.display = "block";
    //     this.listName.style.display = "none";
    //     this.addListButton.style.display = "block";
    //     this.cancelButton.removeEventListener('click', this.cancelAdd)
    //     this.cancelButton.addEventListener('click', this.cancelChange);  
    // }
    
    // cancelChange = () => {
    //   this.listInput.style.display = "none";
    //   this.listName.innerHTML = this.oldListName;
    //   this.listName.style.display = "block";
    //   this.addListButton.style.display = "none";
    //   this.cancelButton.style.display = 'none';                 
    // }
}

export default View;