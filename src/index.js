import "./style.css"


import {main} from "./mainpage.js"


const remove = (function() {
   const container = document.querySelector(".home");
   while (container.firstChild) {
    container.removeChild(container.firstChild);
   };
});

const buttons = (function() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");
    const review = document.querySelector("#review");

    home.addEventListener("click", () => {
        remove();
        main();
    });

    menu.addEventListener("click", () => {
        remove();
    });

    about.addEventListener("click", () => {
        remove();
    });

    review.addEventListener("click", () => {
        remove();
    });
})();