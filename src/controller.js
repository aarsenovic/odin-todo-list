import { Project } from "./projects";
import { renderProject } from "./ui";
import { Todo } from "./todo";
import { renderProjectContent } from "./ui";

function todoController() {

    const projects = [];
    const project = Project();
    //Dodaj default projekte
    const storageItems = { ...localStorage };
    console.log("Ovo imamo u storage-u", storageItems);

    if (storageItems) {
        for (const [key, value] of Object.entries(storageItems)) {
            //projects.push(JSON.parse(value));
            const storageValue = JSON.parse(value);
            console.log("DA LI POSTOJI", storageValue.name);
            const storagedProject = project.createProject(storageValue.name);
            storageValue.todoList.forEach((todo) => { storagedProject.addNewTask(todo) });
            projects.push(storagedProject);
            renderProject(storagedProject, projects.indexOf(storagedProject));
        }
    }

    console.log("prvi", projects[0]);

    if (projects.length > 0) {
        renderProjectContent(projects[0]);
    }



    // const gym = project.createProject("Gym");
    // const house = project.createProject("House");
    // const skills = project.createProject("Skills");
    // const defaultProjects = [gym,house,skills];
    // projects.push(...defaultProjects);
    // projects.forEach((item)=>renderProject(item));
    const todo = Todo();
    let currentProjectState = null;
    let currentTodoState = null;
    function attachListenerForProjectCreation() {
        const formForCreatingProject = document.querySelector(".add-new-project-form");
        formForCreatingProject.addEventListener("submit", function (event) {
            event.preventDefault();
            const projectTitle = document.querySelector('[name="project-name"]').value;

            const newProject = project.createProject(projectTitle);
            console.log("NOVI PROJEKAT", newProject)


            projects.push(newProject);
            renderProject(newProject, projects.indexOf(newProject));
            currentProjectState = projects.indexOf(newProject);
            // renderProjectContent(newProject);

            console.log(newProject);
            console.log("ARRAY", projects)

            document.querySelector('[name="project-name"]').value = "";
        })
    }
    function attachListenerForTodoCreation() {
        const formForCreatingTodo = document.querySelector(".add-new-todo-form");
        formForCreatingTodo.addEventListener("submit", function (event) {
            event.preventDefault();
            const todoTitleInput = document.querySelector('[name="todo-name"]').value;
            const todoDescriptionInput = document.querySelector('[name="todo-description"]').value;
            const todoDateInput = document.querySelector('[name="todo-due-date"]').value;
            const todoPriorityInput = document.querySelector('[name="priority"]').value;

            const newTodo = todo.createTodo(todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput);
            projects[currentProjectState].addNewTask(newTodo);

            document.querySelector('[name="todo-name"]').value = "";
            document.querySelector('[name="todo-description"]').value = "";
            document.querySelector('[name="todo-due-date"]').value = "";
            document.querySelector('[name="priority"]').value = "";

            // console.log("Lista todova",project.getTodoList(), project.name)
            // renderProjectContent(project);
            renderProjectContent(projects[currentProjectState]);

        })
    }

    function attachListenerToSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.addEventListener("click", (e) => {
            if (e.target.className === "project") {
                currentProjectState = Number(e.target.dataset.indexNumber);
                console.log("trenutni state bajo", currentProjectState);
                renderProjectContent(projects[currentProjectState]);
            }
        })
    }

    function attachListenerForTodoUpdate() {
        //ADD THIS FOR UPDATE
        //Dodaj state za kliknut todo
        //Ovde apdejtuj  taj todo iz tog todolista
        //verovatno ces morati da poradis na indexima od dugmica ili kartica posto na update dugmicima krecu od 1 umesto 0
        //vidi da resetujes todo state svaki put kad korisnik klikne na novi projekat
        const updateTodoForm = document.querySelector(".update-todo-form");
        updateTodoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const todoUpdateTitleInput = document.querySelector('[name="update-todo-name"]').value;
            const todoUpdateDescriptionInput = document.querySelector('[name="update-todo-description"]').value;
            const todoUpdateDateInput = document.querySelector('[name="update-todo-due-date"]').value;
            const todoUpdatePriorityInput = document.querySelector('[name="update-priority"]').value;



            document.querySelector('[name="update-todo-name"]').value = "";
            document.querySelector('[name="update-todo-description"]').value = "";
            document.querySelector('[name="update-todo-due-date"]').value = "";
            document.querySelector('[name="update-priority"]').value = "";

        })
    }

    function attachListenerForCurrentTodoState() {
        const container = document.querySelector(".container");
        container.addEventListener("click", (e) => {
            if (e.target.className === "todo") {
                currentTodoState = Number(e.target.dataset.indexNumber);
                console.log("trenutni state todo-a bajo!", currentTodoState);

            }
        })
    }

    attachListenerForProjectCreation();
    attachListenerForTodoCreation();
    attachListenerToSidebar();
    attachListenerForCurrentTodoState();
}


export { todoController };