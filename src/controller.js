import { Project } from "./projects";
import { renderProject } from "./ui";


function todoController() {
    
    const project = Project()
    function attachListenerForProjectCreation() {
        const formForCreatingProject = document.querySelector(".add-new-project-form");
        formForCreatingProject.addEventListener("submit", function(event){
            event.preventDefault();
            const projectTitle = document.querySelector('[name="project-name"]').value;

            const newProject = project.createProject(projectTitle);

            renderProject(newProject)

            console.log(newProject);

            document.querySelector('[name="project-name"]').value = "";
        })
    }
    attachListenerForProjectCreation();

}


export {todoController};