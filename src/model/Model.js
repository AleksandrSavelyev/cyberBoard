class Model{
    constructor(){
        this.db = [];

        this.init();
    }

    init = () => {
        this.db =  [
            {
                listName: "hello",
                listId: "list_1",
                tasks: [ { taskName: "world", taskId: "task_1" }, { taskName: "user", taskId: "task_2" } ]
            },
            {
                listName: "bye",
                listId: "list_2",
                tasks: [ { taskName: "uuuu", taskId: "task_3" }, { taskName: "aaaaaa", taskId: "task_4" } ]
            }
        ];
    }

    addNewListToDataBase = newList => {   
       return this.db.push(newList);
    }

    deleteListFromDataBase = listId => {
        this.db = this.db.filter(cb => {return cb.listId != listId});
    }

    addNewTaskToDataBase = (task, listId) => {
        this.db.forEach(element => {
            if(element.listId === listId)
            element.tasks.push(task);
        });
    }

    deleteTaskFromDataBase = taskId => {
        this.db.forEach(element => {
            element.tasks = element.tasks.filter(obj => {return obj.taskId != taskId});
        });
    }
}

export default Model;