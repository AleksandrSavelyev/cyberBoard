import "./style.less";

class View {
    constructor(){
        this.root = null;
        this.header = null;
        this.allTasks = null;
        this.taskCard = null;
        this.listName = null;
        this.listInput = null;
        this.addListButton = null;
        this.boardContainer = null;
        this.addColumnbButton = null;
        this.inputText = null; 
        this.canselBut = null;  
        this.text = null;     
    }
    
    init = () => {
        this.root = document.getElementById('root');
        this.boardContainer = this.createDiv({
            className: 'Container',
        });
        this.allTasks = this.createDiv({
            className: 'Tasks',
        });
        const buttonKeeper = this.createDiv({
            className: 'Button__keeper',
        });
        this.addColumnbButton = this.createButton({
            id: 'addTask2',
            className: 'Add__Task',
            buttonText: '+ Add new list',
        });
        this.header = this.createHeader({
            id: 'header',
            className: 'header',
            headerText: 'CYBER BOARD',
        });

        buttonKeeper.append(this.addColumnbButton);
        this.boardContainer.append(this.allTasks);
        this.boardContainer.append(buttonKeeper);
        this.root.append(this.header);
        this.root.append(this.boardContainer);
    }

    createListContainer = () => {
        this.taskCard = this.createDiv({
            className: 'Task__Card',
        });
        this.listInput = this.createInput({
            id: 'card',
            className: 'Taskcard',
            placeholder: 'Enter list title...',
        });
        this.listName = this.createSpan({
            id: 'list_name',
            className: 'List__Name',
        });
        this.addListButton = this.createButton({
            id: 'addTask',
            className: 'Add__Task',
            buttonText: 'Add list',
        });

        this.canselBut = this.createCloseBut({
            id: 'close',
            className: 'close',
            buttonText: ' ❌ ',
        });
        
        this.canselBut.addEventListener("click", this.canselAdd);
        this.addListButton.addEventListener("click", this.createNewList);
        this.cancelButton.addEventListener("click", this.cancelAdd);
        this.addColumnbButton.style.display = "none";

        this.taskCard.append(this.listInput);
        this.taskCard.append(this.listName);
        this.taskCard.append(this.addListButton);
        this.taskCard.append(this.canselBut);
        this.allTasks.append(this.taskCard);
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

    createButton = props => {
        const button = document.createElement('button');

        props.className && (button.className = props.className);
        props.buttonText && (button.innerText = props.buttonText);
        props.id && (button.id = props.id);

        return button;
    }

    createCloseBut = props => {
        const close = document.createElement('span');

        props.className && (close.className = props.className);
        props.buttonText && (close.innerText = props.buttonText);
        props.id && (close.id = props.id);

        return close;
    }

    createNewList = () => {
        this.addColumnbButton.style.display = "block";
        this.addListButton.style.display = "none";
        let inputText = this.listInput.value;
        this.text = inputText;
        this.listInput.style.display = "none";
        this.listName.innerHTML = inputText;
        this.listName.style.display = "block";
        this.cancelButton.style.display = "block";
        this.oldListName = inputText;

        this.listName.addEventListener("click", this.changeListName)
        
    }

    changeListName = () => {
      this.addColumnbButton.style.display = "none";
        this.listInput.style.display = "block";
        this.addListButton.style.display = "block";
        this.canselBut.style.display = 'block';
        this.listName.style.display = "none";

        this.canselBut.removeEventListener('click', this.canselAdd)
        this.canselBut.addEventListener('click', this.canselChange);  
    }
    
    cancelAdd = () => {
      this.taskCard.remove();
      this.addColumnbButton.style.display = "block";
    }

    addTaskCard = () => {
        const list = document.createElement('ul');
        this.taskCard.append(list);
    }
}

export default View;
