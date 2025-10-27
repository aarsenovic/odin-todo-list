import { Project } from "./projects";
import { renderProject } from "./ui";


function todoController() {
    const projects = [];
    const project = Project()
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
    attachListenerForProjectCreation();

}


export {todoController};