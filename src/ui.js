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
  const closeButton = createElement("button",{text:"X", classes:["close-button"]})
  const heading = createElement("h2",{text:"Create a new project",classes:["add-new-project-heading"]});
  const header = createElement("div", {classes:["add-new-project-header"], children:[heading, closeButton]});
  const label = createElement("label", {text:"Title",classes: ["add-new-project-label"], attrs:{"for":"project-name"}})
  const addNewProjectInput = createElement("input", {classes:["input-new-project"], attrs:{"type":"text", "name":"project-name", "id":"project-name"}});
  const addNewProjectSubmit = createElement("button", {text:"CREATE PROJECT", classes: ["submit-project-button"], attrs:{"type":"submit"}});
  const form = createElement("form", {classes:["add-new-project-form"], children:[label, addNewProjectInput, addNewProjectSubmit]});

  return createElement("dialog",{classes:["add-new-project-modal"], children:[header, form]});
}


function connectModalToButtons() {
  const addNewProjectButton = document.querySelector(".add-new-project-button");
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector(".close-button");
  
  addNewProjectButton.addEventListener("click", ()=>{dialog.showModal()})
   closeButton.addEventListener("click", ()=>{dialog.close()})
}




function renderProject(project) {
  const sidebar = document.querySelector(".sidebar");
  const projectDiv = createElement("div", {text:project.name, classes:["project"]})
  sidebar.appendChild(projectDiv);
  
  const mainContent = document.querySelector(".main-content");
  const addTodoButton = createElement("button", {text:"Add-todo", classes:["add-todo"]});
  mainContent.appendChild(addTodoButton);
  
  const todoModal = createModalForAddingTodo();
  mainContent.appendChild(todoModal); 
  addTodoButton.addEventListener("click", ()=>todoModal.showModal());
}



function createModalForAddingTodo(){
  // const todoCreationDialog = createElement("dialog", {classes:["todo-creation-dialog"]});
  const closeButton = createElement("button",{text:"X", classes:["close-button-todo"]});
  const heading = createElement("h2",{text:"Create a new todo",classes:["add-new-project-heading"]});
  const header = createElement("div", {classes:["add-new-project-header"], children:[heading, closeButton]});
  const labelForTitle = createElement("label", {text:"Title",classes: ["add-new-todo-label"], attrs:{"for":"todo-name"}});
  const todoTitleInput = createElement("input", {classes:["input-todo-title"], attrs:{"type":"text", "name":"todo-name", "id":"todo-name"}});
  const labelForDescription = createElement("label", {text:"Description",classes: ["todo-description-label"], attrs:{"for":"todo-description"}});
  const todoDescriptionInput = createElement("input", {classes:["input-todo-description"], attrs:{"type":"text", "name":"todo-description", "id":"todo-description"}});
  const labelForDate = createElement("label", {text:"Due Date",classes: ["todo-due-date"], attrs:{"for":"todo-due-date"}});
  const todoDateInput = createElement("input", {classes:["input-todo-date"], attrs:{"type":"date", "name":"todo-due-date", "id":"todo-due-date"}});
  const labelForPriority = createElement("label", {text:"Priority",classes: ["todo-priority-label"], attrs:{"for":"priority"}});
  const priorityOptionLow = createElement("option", {text:"low", attrs:{"value":"low"}});
  const priorityOptionMedium = createElement("option", {text:"medium", attrs:{"value":"medium"}});
  const priorityOptionHigh = createElement("option", {text:"high", attrs:{"value":"high"}});
  const todoPrioritySelect = createElement("select", {classes:["input-todo-priority"], attrs:{"name":"priority", "id":"priority"}, children: [priorityOptionLow, priorityOptionMedium, priorityOptionHigh]});
  const addNewTodoSubmit = createElement("button", {text:"CREATE TODO", classes: ["submit-todo-button"], attrs:{"type":"submit"}});

  const form = createElement("form", {classes:["add-new-todo-form"], children:[labelForTitle, todoTitleInput, labelForDescription, todoDescriptionInput, labelForDate, todoDateInput, labelForPriority, todoPrioritySelect, addNewTodoSubmit]});




  return createElement("dialog", {classes:"add-new-todo-modal", children:[header, form]})

}



function createMainPage() {
  const root = document.querySelector("#root");
  root.appendChild(createHeader());
  root.appendChild(createMainContent());
  const sidebar = document.querySelector(".sidebar");
  sidebar.appendChild(createAddProjectButton());
  sidebar.appendChild(createModalForAddNewProject());
  connectModalToButtons();

}



export {createMainPage, renderProject}