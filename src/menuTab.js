import { createElement } from "./helperFunction";
import {
    breakfastOne,
    breakFastOneDescription,
    breakfastTwo,
    breakFastTwoDescription,
    breakfastThree,
    breakFastThreeDescription
} from "./descriptor";

function createHeader() {
    return createElement("h1", { text: "Menu" });
}

function createSecondaryHeader() {
    return createElement("h2", { text: "Breakfast" });
}

function createBreakfastSection() {
    const mealOne = createElement("p", {
        text: breakfastOne,
        classes: ["breakfast-meal"],
    })
    const mealTwo = createElement("p", {
        text: breakfastTwo,
        classes: ["breakfast-meal"],
    })
    const mealThree = createElement("p", {
        text: breakfastThree,
        classes: ["breakfast-meal"],
    })

    const mealOneDescription = createElement("p", {
        text: breakFastOneDescription,
        classes: ["breakfast-meal-description"],
    })
    const mealTwoDescription = createElement("p", {
        text: breakFastTwoDescription,
        classes: ["breakfast-meal-description"],
    })
    const mealThreeDescription = createElement("p", {
        text: breakFastThreeDescription,
        classes: ["breakfast-meal-description"],
    })

    const mealOneContainer = createElement("div", {
        children: [mealOne, mealOneDescription],
        classes: ["breakfast-meal-container"],
    })
    const mealTwoContainer = createElement("div", {
        children: [mealTwo, mealTwoDescription],
        classes: ["breakfast-meal-container"],
    })
    const mealThreeContainer = createElement("div", {
        children: [mealThree, mealThreeDescription],
        classes: ["breakfast-meal-container"],
    })

    return createElement("div", {
        children: [mealOneContainer, mealTwoContainer, mealThreeContainer],
        classes: ["breakfast-container"],
    })
}

function renderMenuTab() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createSecondaryHeader());
    content.appendChild(createBreakfastSection());
}


export {renderMenuTab};