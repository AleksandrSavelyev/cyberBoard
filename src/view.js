import './style.less';

class View {
    constructor(){
        this.root = null;
        this.header = null;
        this.taskCard = null;
        this.taskAddButton = null;
        this.taskConteiner = null;
        this.addColumnbButton = null;

        this.init();
    }
    
    init = () => {
        this.root = document.getElementById('root');
        const container = this.createDiv({
            className: 'Container',
        });
        const buttonKeeper = this.createDiv({
            className: 'Button__keeper',
        });
        const wrapperButtons = this.createDiv({
            className: 'Wrapper__buttons',
        });
        const tasks = this.createDiv({
            className: 'Tasks',
        });
        const taskCard = this.createDiv({
            className: 'Task__Card',
        });
        const addColumnbButton = this.createButton({
            id: 'addTask2',
            className: 'Add__Task',
            buttonText: '+ Add another list',
        });
        const addTask = this.createButton({
            id: 'addTask',
            className: 'Add__Task',
            buttonText: '+ Add new task',
        });
        const header = this.createHeader({
            id: 'header',
            className: 'header',
            headerText: 'CYBER BOARD',
        });

        const textInput = this.createInput({
            id: 'card',
            className: 'Taskcard',
            placeholder: 'input new task',
        });

        const label = this.createLabel({
            className: 'TaskC',
            labelText: 'TaskCard',
        });

        taskCard.append(label);
        taskCard.append(textInput);
        taskCard.append(addTask);
        tasks.append(taskCard);
        container.append(tasks);
        container.append(addColumnbButton);
        this.root.append(header);
        this.root.append(container);

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