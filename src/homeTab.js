import { 
  restaurantDescriptionText,
  workHoursMondayToFridayText,
  workHoursSaturdayText 
} from "./descriptor";

import { createElement } from "./helperFunction";

import logoImage from "./images/logo.jpg"


function createHeader() {
  return createElement("h1", { text: "ZenBites" });
}

function createDescription() {
  const descriptionText = createElement("p", { text: restaurantDescriptionText, classes:["description-text"] });
  return createElement("div", { classes: ["description-container"], children: [descriptionText] });
}

function createWorkHours() {
  const headerTwo = createElement("h2", { text: "Hours" });
  const workHoursMondayToFriday = createElement("p", { 
    text: workHoursMondayToFridayText, 
    classes: ["work-hours"] 
  });
  const workHoursSaturday = createElement("p", { 
    text: workHoursSaturdayText, 
    classes: ["work-hours"] 
  });

  const workingHoursMiniContainer = createElement("div", { 
    classes: ["working-hours-mini-container"], 
    children: [workHoursMondayToFriday, workHoursSaturday] 
  });

  return createElement("div", { 
    classes: ["working-hours-container"], 
    children: [headerTwo, workingHoursMiniContainer] 
  });
}

function createLocation() {
    const headerTwo = createElement("h2", {text: "Location"})
    const locationText = createElement("p", {text: "Masarikova 10, Sabac", classes:["location-text"]})

    return createElement ("div", {
        classes: ["location-container"],
        children: [headerTwo, locationText]
    })
}

function createImageContainer() {
  const image = createElement("img", {attrs:{src: logoImage}})

  return createElement ("div", {classes: ["image-container"], children:[image]})
}




function renderHomeTab() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(createHeader());
  content.appendChild(createDescription());
  content.appendChild(createWorkHours());
  content.appendChild(createLocation());
  content.appendChild(createImageContainer());
}

export default renderHomeTab;
