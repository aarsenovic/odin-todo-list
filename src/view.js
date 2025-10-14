import { createElement } from "./helper";


function renderProjectAsButton(project) {
    const projectName = project.name
    const button = createElement("button",{projectName, classes:["project"]})
    return createElement("div", {classes:["project-name-container"], children:[button]})
}


function renderAllProjects(arrayOfProjects) {
    const sidebar = document.querySelector(".sidebar");
    arrayOfProjects.forEach(renderProjectAsButton)
}