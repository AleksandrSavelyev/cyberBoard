import "./style.less";

class View {
  constructor() {
    this.root = null;
    this.header = null;
    this.allLists = null;
    this.listCard = null;
    this.addNewListButton = null;

    this.init();
  }

  init = () => {
    this.root = document.getElementById("root");
    const listsContainer = this.createDiv({
      className: "container",
    });
    this.allLists = this.createDiv({
      className: "lists",
    });
    const buttonKeeper = this.createDiv({
      className: "add__list",
    });
    this.addNewListButton = this.createButton({
      className: "add__task",
      buttonText: "+ Add new list",
    });
    this.header = this.createHeader({
      className: "header",
      headerText: "CYBER BOARD",
    });

    buttonKeeper.append(this.addNewListButton);
    listsContainer.append(this.allLists);
    listsContainer.append(buttonKeeper);
    this.root.append(this.header);
    this.root.append(listsContainer);
  };

  createListContainer = (listId, listName) => {
    //this.addColumnbButton.style.display = "none";
    this.listCard = this.createDiv({
      id: listId,
      className: "list__card",
    });
    const listInput = this.createInput({
      className: "list_input",
      placeholder: "Enter list title...",
    });
    const newlistName = this.createSpan({
      className: "list__name",
      spanText: listName,
    });
    const addListButton = this.createButton({
      className: "add__list",
      buttonText: "Add list",
    });
    const cancelButton = this.createSpan({
      className: "close",
      spanText: "❎",
    });
    const addTaskButton = this.createButton({
      className: "add__list",
      buttonText: "Add task",
    });

    this.listCard.append(listInput);
    this.listCard.append(cancelButton);
    this.listCard.append(newlistName);
    this.listCard.append(addListButton);
    this.listCard.append(addTaskButton);
    this.allLists.append(this.listCard);
    //this.addListButton.addEventListener("click", this.createNewList);
    // this.cancelAdd();
  };

  // cancelAdd = () => {
  //     const close = document.querySelectorAll(".close");

  //     for (let i = 0; i < close.length; i++) {
  //         console.log("info");
  //         close[i].addEventListener('click', function() {
  //             console.log("info2");
  //             const div = this.parentElement;
  //             div.remove();
  //         })
  //     }
  // }
  addTaskToList = (taskName, taskId) => {
    const taskDiv = this.createDiv({
      id: taskId,
      className: "task__card",
    });
    const taskInput = this.createInput({
      className: "task__input",
      placeholder: "Enter task",
    });
    const newTaskName = this.createSpan({
      className: "task__name",
      spanText: taskName,
    });
    const saveTaskButton = this.createButton({
      className: "add__list",
      buttonText: "Save",
    });
    const deleteTaskButton = this.createButton({
      className: "add__list",
      buttonText: "Delete",
    });

    taskDiv.append(newTaskName);
    taskDiv.append(taskInput);
    taskDiv.append(saveTaskButton);
    taskDiv.append(deleteTaskButton);
    this.listCard.append(taskDiv);
    //saveButton.addEventListener('click', this.addNewTask)
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
    this.cancelButton.style.display = "block";
    this.oldListName = inputText;
    this.addColumnbButton.style.display = "block";

    this.listName.addEventListener("click", this.changeListName);

    return inputText;
  };

  changeListName = () => {
    this.listInput.style.display = "block";
    this.cancelButton.style.display = "block";
    this.listName.style.display = "none";
    this.addListButton.style.display = "block";
    this.cancelButton.removeEventListener("click", this.cancelAdd);
    this.cancelButton.addEventListener("click", this.cancelChange);
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
