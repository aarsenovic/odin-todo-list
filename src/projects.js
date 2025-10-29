function Project() {

    let todoList = [];


    function createProject(nameParameter) {
       let name = nameParameter;
        return { name, todoList, addNewTask, getTodoList }
    }

    function addNewTask(task) {
        todoList.push(task);
    }

    function getTodoList() {
        return todoList
    }

    return { createProject, addNewTask, getTodoList }
}





export { Project }