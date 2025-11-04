import { Project } from "./projects";
import { renderProject } from "./ui";
import { Todo } from "./todo";
import { renderProjectContent } from "./ui";

function todoController() {
    //Dodaj default projekte
    const projects = [];
    const project = Project();
    // const gym = project.createProject("Gym");
    // const house = project.createProject("House");
    // const skills = project.createProject("Skills");
    // const defaultProjects = [gym,house,skills];
    // projects.push(...defaultProjects);
    // projects.forEach((item)=>renderProject(item));
    const todo = Todo();
    let currentProjectState = null;
    function attachListenerForProjectCreation() {
        const formForCreatingProject = document.querySelector(".add-new-project-form");
        formForCreatingProject.addEventListener("submit", function(event){
            event.preventDefault();
            const projectTitle = document.querySelector('[name="project-name"]').value;

            const newProject = project.createProject(projectTitle);
            console.log("NOVI PROJEKAT", newProject)

            renderProject(newProject, projects.length)
            projects.push(newProject);
            // renderProjectContent(newProject);

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
            // renderProjectContent(project);

        })
    }
    
    function attachListenerToSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.addEventListener("click", (e)=>{
            if(e.target.tagName === "DIV") {
                console.log("data-index",e.target.dataset.indexNumber);
            }
        })
    }

    attachListenerForProjectCreation();
    attachListenerForTodoCreation();
    attachListenerToSidebar();
}


export {todoController};