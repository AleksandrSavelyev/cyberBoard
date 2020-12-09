import './style.less';

class View {
    constructor(){
        this.root = null;
        this.header = null;
        this.allTasks = null;
        this.taskCard = null;
        this.taskAddButton = null;
        this.boardContainer = null;
        this.addColumnbButton = null;

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
            buttonText: '+ Add another list',
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

    createTaskContainer = () => {
        this.taskCard = this.createDiv({
            className: 'Task__Card',
        });
        const label = this.createLabel({
            className: 'TaskC',
            labelText: 'TaskCard',
        });
        const textInput = this.createInput({
            id: 'card',
            className: 'Taskcard',
            placeholder: 'Input new task',
        });
        this.taskAddButton = this.createButton({
            id: 'addTask',
            className: 'Add__Task',
            buttonText: '+ Add new task',
        });

        this.taskCard.append(label);
        this.taskCard.append(textInput);
        this.taskCard.append(this.taskAddButton);
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

    createLabel = props => {
        const label = document.createElement('label');

        props.className && (label.className = props.className);
        props.labelText && (label.innerText = props.labelText);
        props.id && (lable.id = props.id);

        return label;
    }

}

export default View;