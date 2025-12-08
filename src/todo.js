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

        function updateTodo(newTitle, newDescription, newDueDate, newPriority, newIsTaskFinished) {
            if(newTitle) {
                title = newTitle
            }

            if(newDescription) {
                description = newDescription;
            }

            if(newDueDate) {
                dueDate = newDueDate;
            }

            if (newPriority) {
                priority = newPriority;
            }

            if(newIsTaskFinished) {
                isTaskFinished = newIsTaskFinished;
            }
        }




        return {title, description, dueDate, priority, updatePriority, getPriority, isTaskFinished, finishTask, getIsTaskFinished, updateTodo}
       
    }






    return {createTodo}
}








export {Todo}