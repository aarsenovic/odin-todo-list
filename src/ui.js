import { createElement } from "./helper"



function createHeader() {
  return createElement("header", { classes: ["header"] })
}



function createMainContent() {
  const sidebar = createElement("aside", { classes: ["sidebar"] })
  const main = createElement("main", { classes: ["main-content"] })

  return createElement("div", { classes: ["container"], children: [sidebar, main] })
}

function createAddProjectButton() {
  const buttonText = "+";
  return createElement("button", { text: buttonText, classes: ["add-new-project-button"] });

}

function createModalForAddNewProject() {
  const closeButton = createElement("button", { text: "X", classes: ["close-button"] })
  const heading = createElement("h2", { text: "Create a new project", classes: ["add-new-project-heading"] });
  const header = createElement("div", { classes: ["add-new-project-header"], children: [heading, closeButton] });
  const label = createElement("label", { text: "Title", classes: ["add-new-project-label"], attrs: { "for": "project-name" } })
  const addNewProjectInput = createElement("input", { classes: ["input-new-project"], attrs: { "type": "text", "name": "project-name", "id": "project-name" } });
  const addNewProjectSubmit = createElement("button", { text: "CREATE PROJECT", classes: ["submit-project-button"], attrs: { "type": "submit" } });
  const form = createElement("form", { classes: ["add-new-project-form"], children: [label, addNewProjectInput, addNewProjectSubmit] });

  return createElement("dialog", { classes: ["add-new-project-modal"], children: [header, form] });
}


function connectModalToButtons() {
  const addNewProjectButton = document.querySelector(".add-new-project-button");
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector(".close-button");

  addNewProjectButton.addEventListener("click", () => { dialog.showModal() })
  closeButton.addEventListener("click", () => { dialog.close() })

  const root = document.querySelector("#root");

  root.addEventListener("click", (event) => {

    const addTodoBtn = event.target.closest(".add-todo");

    if (addTodoBtn) {

      const todoDialog = document.querySelector(".add-new-todo-modal");
      todoDialog.showModal();
    }


    const closeTodoBtn = event.target.closest(".close-button-todo");
    if (closeTodoBtn) {
      const todoDialog = document.querySelector(".add-new-todo-modal");
      todoDialog.close();
    }
  });
}




// Verovatno rename u add project to sidebar
// Napravi pravi render project koji ce  da isprazni main content renderuje dugme za dodavanje todo-a i sve todo-e koji se nalaze u tom projectu.
function renderProject(project, projectslenght) {
  const sidebar = document.querySelector(".sidebar");
  const projectDiv = createElement("div", { text: project.name, classes: ["project"], attrs:{"data-index-number":`${projectslenght}`} })
  sidebar.appendChild(projectDiv);

  const mainContent = document.querySelector(".main-content");
  const existingAddTodoButton = document.querySelector(".add-todo");

  if(!existingAddTodoButton) {
      const addTodoButton = createElement("button", { text: "Add-todo", classes: ["add-todo"] });
      mainContent.appendChild(addTodoButton);
  }


  // const todoModal = createModalForAddingTodo();
  // mainContent.appendChild(todoModal); 
  // addTodoButton.addEventListener("click", ()=>todoModal.showModal());
  // if(project.getTodoList().length() !== 0) {
  //   renderProjectContent(project);
  // }
  
}


//Treba napraviti ovo da cisti main content svaki put kad se aktivira
//Treba da ima event listener koji ce na click ovo prokovati
function renderProjectContent(project) {
    const mainContent  = document.querySelector(".main-content");
    const todoDetailsModal = createElement("dialog", {classes: ["todo-details-modal"]});
   
    const addTodoButton = createElement("button", {text: "Add-todo", classes: ["add-todo"]});
    mainContent.replaceChildren();
    mainContent.appendChild(todoDetailsModal);
    mainContent.appendChild(addTodoButton);
    const projectTodoList = project.getTodoList();
    let i = 1;
    projectTodoList.forEach(todo => {
      const detailsButton = createElement("button", {text: "Details", classes:["todo-details-button"], attrs:{"data-index-number":`${i}`}});
      mainContent.appendChild(createElement("div", {text:todo.title, classes: ["todo"], children:[detailsButton]}));

   
    
    detailsButton.addEventListener("click",()=>{
        todoDetailsModal.showModal();
        const todoHeader = createElement("h2", {text: todo.title, classes: ["todo-title"]});
        const description = createElement("p", {text: todo.description, classes: ["todo-description"]});
        const dueDate = createElement("p", {text: todo.dueDate, classes: ["todo-due-date"]});
        const priority = createElement("p", {text: todo.priority, classes: ["todo-priority"]});
        const closeButton = createElement("button", {text:"X", classes:["close-todo-modal"]});
        const todoDialongHeadingSection = createElement("div", {classes:["todo-modal-heading"],children:[todoHeader,closeButton]})
        const todoDialogContainer = createElement("div", {classes:"todo-dialog-container", children: [todoDialongHeadingSection,description,dueDate,priority]});


        // const closeButtonReference = document.querySelector(".close-todo-modal");
        closeButton.addEventListener("click", ()=>{
          todoDetailsModal.close();
          todoDetailsModal.replaceChildren();
        })

        todoDetailsModal.appendChild(todoDialogContainer);
      })
      i++ 
    });
}




function createModalForAddingTodo() {
  // const todoCreationDialog = createElement("dialog", {classes:["todo-creation-dialog"]});
  const closeButton = createElement("button", { text: "X", classes: ["close-button-todo"] });
  const heading = createElement("h2", { text: "Create a new todo", classes: ["add-new-project-heading"] });
  const header = createElement("div", { classes: ["add-new-project-header"], children: [heading, closeButton] });
  const labelForTitle = createElement("label", { text: "Title", classes: ["add-new-todo-label"], attrs: { "for": "todo-name" } });
  const todoTitleInput = createElement("input", { classes: ["input-todo-title"], attrs: { "type": "text", "name": "todo-name", "id": "todo-name" } });
  const labelForDescription = createElement("label", { text: "Description", classes: ["todo-description-label"], attrs: { "for": "todo-description" } });
  const todoDescriptionInput = createElement("textarea", { classes: ["input-todo-description"], attrs: { "rows": "4", "cols": "50", "name": "todo-description", "id": "todo-description" } });
  const labelForDate = createElement("label", { text: "Due Date", classes: ["todo-due-date"], attrs: { "for": "todo-due-date" } });
  const todoDateInput = createElement("input", { classes: ["input-todo-date"], attrs: { "type": "date", "name": "todo-due-date", "id": "todo-due-date" } });
  const labelForPriority = createElement("label", { text: "Priority", classes: ["todo-priority-label"], attrs: { "for": "priority" } });
  const priorityOptionLow = createElement("option", { text: "low", attrs: { "value": "low" } });
  const priorityOptionMedium = createElement("option", { text: "medium", attrs: { "value": "medium" } });
  const priorityOptionHigh = createElement("option", { text: "high", attrs: { "value": "high" } });
  const todoPrioritySelect = createElement("select", { classes: ["input-todo-priority"], attrs: { "name": "priority", "id": "priority" }, children: [priorityOptionLow, priorityOptionMedium, priorityOptionHigh] });
  const addNewTodoSubmit = createElement("button", { text: "CREATE TODO", classes: ["submit-todo-button"], attrs: { "type": "submit" } });

  const form = createElement("form", { classes: ["add-new-todo-form"], children: [labelForTitle, todoTitleInput, labelForDescription, todoDescriptionInput, labelForDate, todoDateInput, labelForPriority, todoPrioritySelect, addNewTodoSubmit] });




  return createElement("dialog", { classes: ["add-new-todo-modal"], children: [header, form] })

}



function createMainPage() {
  const root = document.querySelector("#root");
  root.appendChild(createHeader());
  root.appendChild(createMainContent());
  const sidebar = document.querySelector(".sidebar");
  sidebar.appendChild(createAddProjectButton());
  sidebar.appendChild(createModalForAddNewProject());
  root.appendChild(createModalForAddingTodo());
  connectModalToButtons();

}



export { createMainPage, renderProject, renderProjectContent }