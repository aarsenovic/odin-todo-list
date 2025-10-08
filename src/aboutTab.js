import { createElement } from "./helperFunction";
import {
    aboutUsText
} from "./descriptor";

function createHeader() {
    return createElement("h1", { text: "About us" });
}

function createAboutUsSection() {
    const aboutUs = createElement("p",{
        text: aboutUsText,
    })

    return createElement ("div", {
        children: [aboutUs],
        classes: ["about-us-container"]
    })
}

function renderAboutTab() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createAboutUsSection());
}

export default renderAboutTab