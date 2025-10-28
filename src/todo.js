function Todo () {

    function createTodo(titleParameter,descriptionParameter,dueDateParameter,priorityParameter) {
        let title = titleParameter;
        let description = descriptionParameter;
        let dueDate = dueDateParameter;
        let priority = priorityParameter;
        let isTaskFinished = false;

        function updatePriority(newPriority) {
            priority = newPriority;
        }


        function getPriority() {
            return priority
        };
        

        function finishTask() {
            isTaskFinished = true;
        }

        function getIsTaskFinished() {
            return isTaskFinished
        }

        return {title, description, dueDate, priority, updatePriority, getPriority, isTaskFinished, finishTask, getIsTaskFinished}
       
    }






    return {createTodo}
}








export {Todo}