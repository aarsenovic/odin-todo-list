import { createElement } from "./helper"



function createHeader() {
    return createElement("header", {classes:["header"]})
}



function createMainContent () {
    const sidebar = createElement("aside", {classes:["sidebar"]})
    const main = createElement("main", {classes:["main-content"]})

    return createElement("div", {classes:["container"], children:[sidebar,main]})
}

function createAddProjectButton() {
   const buttonText = "+";
   return createElement("button", {text:buttonText, classes:["add-new-project-button"]});

}

function createModalForAddNewProject() {
  const heading = createElement("h2",{text:"Create a new project",classes:["add-new-project-heading"]});
  const header = createElement("div", {classes:["add-new-project-header"], children:[heading]});
  return createElement("dialog",{classes:["add-new-project-modal"], children:[header,]});
}


function connectModalToAddNewProjectButton() {
  const addNewProjectButton = document.querySelector(".add-new-project-button");
  const dialog = document.querySelector("dialog")
  
  addNewProjectButton.addEventListener("click", ()=>{dialog.showModal()})
}


function createMainPage() {
  const root = document.querySelector("#root");
  root.appendChild(createHeader());
  root.appendChild(createMainContent());
  const sidebar = document.querySelector(".sidebar");
  sidebar.appendChild(createAddProjectButton());
  sidebar.appendChild(createModalForAddNewProject());
  connectModalToAddNewProjectButton();

}



export {createMainPage}