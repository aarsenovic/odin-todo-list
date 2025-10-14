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


function createMainPage() {
  const root = document.querySelector("#root");
  root.appendChild(createHeader());
  root.appendChild(createMainContent());
  const sidebar = document.querySelector(".sidebar");
  sidebar.appendChild(createAddProjectButton());
}



export {createMainPage}