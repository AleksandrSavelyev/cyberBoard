import Controller from "./Controller";
import "./style.less";

class View {
  constructor() {
    this.root = document.getElementById("root");
    this.header = null;
    this.allLists = null;
    this.listCard = null;
    this.newTaskId = null;
    this.newListId = null;
    this.newTaskName = null;
    this.newListName = null;
    this.newTaskInput = null;
    this.newListInput = null;
    this.saveListButton = null;
    this.addNewListButton = null;
  }

  init = () => {
    const listsContainer = this.createDiv({
      className: "lists-container__all-lists",
    });
    this.allLists = this.createDiv({
      className: "lists-container",
    });
    const buttonKeeper = this.createDiv({
      className: "add-list__add-form",
    });
    this.addNewListButton = this.createButton({
      id: "addlist",
      className: "button-container__add-button",
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
    this.listCard = this.createUl({
      id: listId,
      className: "list__card",
    });
    const newlistName = this.createSpan({
      className: "list-container__list-name",
      spanText: listName, //hello
    });
    const listInput = this.createInput({
      className: "list_input",
      placeholder: "Enter list title...",
    });
    const saveListButton = this.createButton({
      id: "savelist",
      className: "add-list__save-button",
      buttonText: "Save list",
    });
    const cancelButton = this.createSpan({
      id: "deletelist",
      className: "list-container__delete-button",
      spanText: "❎",
    });
    const addTaskButton = this.createButton({
      id: "addtask",
      className: "list-container__add-task-button",
      buttonText: "Add task",
    });

    this.listCard.append(listInput);
    this.listCard.append(cancelButton);
    this.listCard.append(newlistName);
    this.listCard.append(saveListButton);
    this.listCard.append(addTaskButton);
    this.allLists.append(this.listCard);

    listInput.style.display = "none";
    saveListButton.style.display = "none";
    this.activateAddTaskButton();
  };

  addNewListContainer = () => {
    this.addNewListButton.style.display = "none";
    let id = 3;
    this.newListId = "List_" + id;
    this.listCard = this.createUl({
      id: this.newListId,
      className: "task-container__tasks-list",
    });
    this.newListName = this.createSpan({
      className: "list__name",
    });
    this.newListInput = this.createInput({
      className: "add-list__list-input",
      placeholder: "Enter list title...",
    });
    this.saveListButton = this.createButton({
      id: "savelist",
      className: "add-list__save-button",
      buttonText: "Save list",
    });
    const cancelButton = this.createSpan({
      id: this.newListId,
      className: "close",
      spanText: "❎",
    });
    const addTaskButton = this.createButton({
      id: this.newListId,
      className: "add__task",
      buttonText: "Add task",
    });

    this.listCard.append(this.newListInput);
    this.listCard.append(cancelButton);
    this.listCard.append(this.newListName);
    this.listCard.append(this.saveListButton);
    this.listCard.append(addTaskButton);
    this.allLists.append(this.listCard);

    addTaskButton.style.display = "none";
  };

  activateSaveButton = (cb) => {
    this.saveListButton.addEventListener("click", () => {
      cb();
    });
  };

  activateCloseButton = (cb) => {
    const closeButtons = document.querySelectorAll(".close");
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", () => {
        this.listCard.id = closeButtons[i].id;
        cb();
      });
    }
  };

  activateAddTaskButton = () => {
    const addTaskButtons = document.querySelectorAll(".add__task");
    for (let i = 0; i < addTaskButtons.length; i++) {
      addTaskButtons[i].addEventListener("click", this.addNewTaskToList, false);
    }
  };

  activateSaveTaskButton = (cb) => {
    const saveTaskButtons = document.querySelectorAll(".list__card");
    for (let i = 0; i < saveTaskButtons.length; i++) {
      saveTaskButtons[i].addEventListener(
        "click",
        () => {
          cb();
        },
        false
      );
    }
  };

  addTaskToList = (taskName, taskId) => {
    const taskLi = this.createLi({
      id: "task_1",
      className: "task__card",
    });
    this.newTaskInput = this.createInput({
      className: "task__input",
      placeholder: "Enter task",
    });
    this.newTaskName = this.createSpan({
      className: "task__name",
      spanText: taskName,
    });
    const saveTaskButton = this.createButton({
      id: taskId,
      className: "save__button",
      buttonText: "Save",
    });
    const deleteTaskButton = this.createButton({
      id: "deletetask",
      className: "task-card__delete-task",
      buttonText: "x",
    });

    taskLi.append(this.newTaskName);
    taskLi.append(this.newTaskInput);
    taskLi.append(saveTaskButton);
    taskLi.append(deleteTaskButton);
    this.listCard.append(taskLi);

    if (taskName) {
      this.newTaskInput.style.display = "none";
      saveTaskButton.style.display = "none";
    }

    this.activateAddTaskButton();
    //saveButton.addEventListener('click', this.addNewTask)
  };

  addNewTaskToList = (e) => {
    let id = 5;
    let taskId = "Task_" + id;
    const taskLi = this.createLi({
      id: "task__2",
      className: "task__card",
    });
    const newTaskInput = this.createInput({
      id: taskId,
      className: "task__input",
      placeholder: "Enter task",
    });
    this.newTaskName = this.createSpan({
      className: "task__name",
    });
    const saveTaskButton = this.createButton({
      id: taskId,
      className: "save__button",
      buttonText: "Save",
    });
    const deleteTaskButton = this.createButton({
      id: "deletetask",
      className: "task-card__delete-task",
      buttonText: "x",
    });

    taskLi.append(this.newTaskName);
    taskLi.append(newTaskInput);
    taskLi.append(saveTaskButton);
    taskLi.append(deleteTaskButton);
    e.currentTarget.append(taskLi);
    e.stopPropagation();
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

  createUl = (props) => {
    const ul = document.createElement("ul");

    props.className && (ul.className = props.className);
    props.ulText && (ul.innerText = props.ulText);
    props.id && (ul.id = props.id);

    return ul;
  };

  createLi = (props) => {
    const li = document.createElement("li");

    props.className && (li.className = props.className);
    props.liText && (ul.innerText = props.liText);
    props.id && (li.id = props.id);

    return li;
  };
  // changeListName = () => {
  //     this.listInput.style.display = "block";
  //     this.cancelButton.style.display = "block";
  //     this.listName.style.display = "none";
  //     this.addListButton.style.display = "block";
  //     this.cancelButton.removeEventListener('click', this.cancelAdd)
  //     this.cancelButton.addEventListener('click', this.cancelChange);
  // }

  onDrogStart = (cb) => {
    document.addEventListener("dragstart", (event) => {
      const taskInfo = { colId };
      cb(taskInfo);
    });
  };

  onDrogOver = (cb) => {};

  onDrop = (cb) => {};

  drawColumn = (column) => {
    const { tasks, columnName } = column;

    const columnTasks = document.createElement("div");
    columnTasks.innerText = columnName;
    columnTasks.setAttribute("class", "column__wrapper");

    tasks.forEach((task) => {
      const taskElement = this.drawTask(task);
      columnTasks.append(taskElement);
    });

    this.wrapperColumn.append(columnTasks);
    this.root.append(this.wrapperColumn);
  };

  drawTask = (task) => {
    const { listName } = task;

    const taskElement = document.createElement("span");
    taskElement.innerText - taskName;
    taskElement.setAttribute("class", "task__element");
    taskElement.setAttribute("draggable", "true");

    return taskElement;
  };
}

export default View;
