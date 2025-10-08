import "./style.css"
import renderHomeTab from "./homeTab"
import { renderMenuTab } from "./menuTab";
import renderAboutTab from "./aboutTab";

const tabRenderers = {
  home: renderHomeTab,
  menu: renderMenuTab,
  about: renderAboutTab,
};

renderHomeTab();
const homeButton = document.querySelector('[data-tab="home"]');
setActiveButton(homeButton);

function attachEventListeners() {
  document.querySelectorAll(".nav-button").forEach(button => {
    button.addEventListener("click", () => {
      setActiveButton(button);  
      const tab = button.dataset.tab;
      const render = tabRenderers[tab];
      if (render) render();
    });
  });
}

function setActiveButton(button){
    const allButtons = document.querySelectorAll(".nav-button");

    for (let i = 0; i<allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }

    button.classList.add("active");
}

attachEventListeners();