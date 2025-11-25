function Project() {




    function createProject(nameParameter) {
        let name = nameParameter;
        let todoList = [];
        const storageItem = {name, todoList};
        function addNewTask(task) {
            todoList.push(task);
            localStorage.setItem(name, JSON.stringify(storageItem));
        }

        function getTodoList() {
            return todoList
        }


        

        localStorage.setItem(name, JSON.stringify(storageItem));

        return { name, todoList, addNewTask, getTodoList }
    }





    return { createProject }
}





export { Project }