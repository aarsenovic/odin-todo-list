function createElement(tag, { text, classes = [], children = [],  attrs = {}} = {}) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (classes.length) el.classList.add(...classes);
  children.forEach(child => el.appendChild(child));

    if (attrs && typeof attrs === "object") {
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }

  return el;
}




function createHeader() {
    return createElement("header", {classes:["header"]})
}



function createMainContent () {
    const sidebar = createElement("aside", {classes:["sidebar"]})
    const main = createElement("main", {classes:["main-content"]})

    return createElement("div", {classes:["container"], children:[sidebar,main]})
}


function createMainPage() {
  const root = document.querySelector("#root");
  root.appendChild(createHeader());
  root.appendChild(createMainContent());
}


export {createMainPage}