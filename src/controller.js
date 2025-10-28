import { Project } from "./projects";
import { renderProject } from "./ui";
import { Todo } from "./todo";

function todoController() {
    const projects = [];
    const project = Project();
    const todo = Todo(); 
    function attachListenerForProjectCreation() {
        const formForCreatingProject = document.querySelector(".add-new-project-form");
        formForCreatingProject.addEventListener("submit", function(event){
            event.preventDefault();
            const projectTitle = document.querySelector('[name="project-name"]').value;

            const newProject = project.createProject(projectTitle);

            renderProject(newProject)
            projects.push(newProject);

            console.log(newProject);
            console.log("ARRAY", projects)

            document.querySelector('[name="project-name"]').value = "";
        })
    }
    function attachListenerForTodoCreation() {
        const formForCreatingTodo = document.querySelector(".add-new-todo-form");
        formForCreatingTodo.addEventListener("submit",function(event){
            event.preventDefault();
            const todoTitleInput = document.querySelector('[name="todo-name"]').value;
            const todoDescriptionInput = document.querySelector('[name="todo-description"]').value;
            const todoDateInput = document.querySelector('[name="todo-due-date"]').value;
            const todoPriorityInput = document.querySelector('[name="priority"]').value;

            project.addNewTask(todo.createTodo(todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput));

            document.querySelector('[name="todo-name"]').value = "";
            document.querySelector('[name="todo-description"]').value="";
            document.querySelector('[name="todo-due-date"]').value="";
            document.querySelector('[name="priority"]').value="";

            console.log("Lista todova",project.getTodoList())

        })
    }

    attachListenerForProjectCreation();
    attachListenerForTodoCreation();

}


export {todoController};