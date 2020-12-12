import "./style.less";

class View {
  constructor() {
    this.root = null;
    this.header = null;
    this.allTasks = null;
    this.taskCard = null;
    this.listName = null;
    this.delButton = null;
    this.listInput = null;
    this.saveButton = null;
    this.oldListName = null;
    this.cancelButton = null;
    this.addListButton = null;
    this.boardContainer = null;
    this.addToListButton = null;
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
    this.addColumnbButton.style.display = "none";
    this.taskCard = this.createDiv({
      className: "Task__Card",
    });
    this.taskCard1 = this.createDiv({
      className: "task__card1",
    });
    this.taskCard2 = this.createDiv({
      className: "task__card2",
    });
    this.buttonCard3 = this.createDiv({
      className: "btn__card3",
    });
    this.listInput = this.createInput({
      id: "card",
      className: "Taskcard",
      placeholder: "Enter list title...",
    });
    this.listName = this.createSpan({
      id: "list_name",
      className: "List__Name",
    });
    this.addListButton = this.createButton({
      id: "addTask",
      className: "Add__Task",
      buttonText: "Add list",
    });
    this.cancelButton = this.createSpan({
      id: "close",
      className: "close",
      spanText: "❎",
    });
    this.addToListButton = this.createButton({
      id: "addTolist",
      className: "Add__Task",
      buttonText: "Add=To-list",
    });

    this.addListButton.addEventListener("click", this.createNewList);
    this.cancelButton.addEventListener("click", this.cancelAdd);
    this.addToListButton.addEventListener("click", this.addToList);

    // this.taskCard.append(this.listInput);
    // this.taskCard.append(this.cancelButton);
    // this.taskCard.append(this.listName);
    // this.taskCard.append(this.addListButton);
    this.taskCard1.append(this.listInput);
    this.taskCard1.append(this.cancelButton);
    this.taskCard2.append(this.listName);
    this.taskCard2.append(this.addListButton);
    this.taskCard.append(this.taskCard1);
    this.taskCard.append(this.taskCard2);
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
    this.addListButton.style.display = "none";
    let inputText = this.listInput.value;
    this.listInput.style.display = "none";
    this.listName.innerHTML = inputText;
    this.listName.style.display = "block";
    this.cancelButton.style.display = "none";
    this.oldListName = inputText;
    this.addColumnbButton.style.display = "block";
    this.taskCard.append(this.addToListButton);

    this.listName.addEventListener("click", this.changeListName);
  };

  addToList = () => {
    const taskDiv = this.createDiv({
      className: "Task__Card",
    });
    const tasks = this.createInput({
      id: "tasktolist",
      className: "Taskcard",
      placeholder: "Enter task",
    });
    const taskHolder = this.createSpan({
      id: "task_sum",
      className: "List__Name",
    });
    const btnSaveDel = this.createDiv({
      className: "btn__save__del",
    });

    const saveButton = this.createButton({
      id: "save",
      className: "Add__Task",
      buttonText: "Save",
    });
    const delButton = this.createButton({
      id: "delete",
      className: "Add__Task",
      buttonText: "Delete",
    });
    this.taskCard.append(taskDiv);
    taskDiv.append(tasks);
    taskDiv.append(taskHolder);
    // taskDiv.append(saveButton);
    // taskDiv.append(delButton);
    btnSaveDel.append(saveButton);
    btnSaveDel.append(delButton);
    taskDiv.append(btnSaveDel);
    let tasktext = this.tasks.value;
    taskHolder.innerHTML = tasktext;

    this.saveButton.addEventListener("click", this.saveButton1);
  };




  changeListName = () => {
    this.listInput.style.display = "block";
    let inputText = this.listInput.value;
    this.cancelButton.style.display = "block";
    this.listName.style.display = "none";
    this.addListButton.style.display = "block";

    this.cancelButton.removeEventListener("click", this.cancelAdd);
    this.cancelButton.addEventListener("click", this.cancelChange);
  };

  cancelAdd = () => {
    this.taskCard.style.display = "none";
    this.addColumnbButton.style.display = "block";
  };

  cancelChange = () => {
    this.listInput.style.display = "none";
    this.listName.innerHTML = this.oldListName;
    this.listName.style.display = "block";
    this.addListButton.style.display = "none";
    this.cancelButton.style.display = "none";
  };
}

export default View;
