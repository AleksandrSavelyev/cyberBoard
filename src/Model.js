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
}

export default Model;
