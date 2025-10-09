function Todo () {

    function createTodo(titleParameter,descriptionParameter,dueDateParameter,priorityParameter) {
        let title = titleParameter;
        let description = descriptionParameter;
        let dueDate = dueDateParameter;
        let priority = priorityParameter;

        function updatePriority(newPriority) {
            priority = newPriority;
        }


        function getPriority() {
            return priority
        };

        return {title, description, dueDate, priority, updatePriority, getPriority}
       
    }






    return {createTodo}
}








export {Todo}