import "./style.less";

class View {
  constructor() {
    this.root = null;
    this.header = null;
    this.allTasks = null;
    this.taskCard = null;
    this.ListName = null;
    this.listInput = null;
    this.addListButton = null;
    this.boardContainer = null;
    this.addColumnbButton = null;
  }

  init = () => {
    this.root = document.getElementById("root");
    this.boardContainer = this.createDiv({
      className: "Container",
    });
    this.allTasks = this.createDiv({
      className: "Tasks",
    });
    const buttonKeeper = this.createDiv({
      className: "Button__keeper",
    });
    this.addColumnbButton = this.createButton({
      id: "addTask2",
      className: "Add__Task",
      buttonText: "+ Add another list",
    });
    this.header = this.createHeader({
      id: "header",
      className: "header",
      headerText: "CYBER BOARD",
    });

    buttonKeeper.append(this.addColumnbButton);
    this.boardContainer.append(this.allTasks);
    this.boardContainer.append(buttonKeeper);
    this.root.append(this.header);
    this.root.append(this.boardContainer);
  };

  createListContainer = () => {
    this.taskCard = this.createDiv({
      className: "Task__Card",
    });
    this.listInput = this.createInput({
      id: "card",
      className: "Taskcard",
      placeholder: "Enter list title...",
    });
    this.addListButton = this.createButton({
      id: "addTask",
      className: "Add__Task",
      buttonText: "Add list",
    });

    this.addListButton.addEventListener("click", this.createNewList);

    this.taskCard.append(this.listInput);
    this.taskCard.append(this.addListButton);
    this.allTasks.append(this.taskCard);
  };

  createDiv = (props) => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);
    props.divText && (div.innerText = props.divText);
    props.id && (div.id = props.id);

    return div;
  };

  createButton = (props) => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);
    props.id && (button.id = props.id);

    return button;
  };

  createHeader = (props) => {
    const h1 = document.createElement("h1");

    props.className && (h1.className = props.className);
    props.headerText && (h1.innerText = props.headerText);
    props.id && (h1.id = props.id);

    return h1;
  };

  createInput = (props) => {
    const input = document.createElement("input");

    props.className && (input.className = props.className);
    props.placeholder && (input.placeholder = props.placeholder);
    props.id && (input.id = props.id);

    return input;
  };

  createSpan = (props) => {
    const span = document.createElement("span");

    props.className && (span.className = props.className);
    props.spanText && (span.innerText = props.spanText);
    props.id && (span.id = props.id);

    return span;
  };

  createNewList = () => {
    let inputText = this.listInput.value;
    this.ListName = this.createSpan({
      id: "list_name",
      className: "List__Name",
      spanText: inputText,
    });

    this.taskCard.append(this.ListName);
    this.listInput.style.display = "none";
  };
}

export default View;
