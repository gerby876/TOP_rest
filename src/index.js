import "./style.css";

import {main} from "./mainpage.js";
import {menupage} from "./menu.js";




const remove = (function() {
   const clear = document.querySelector("#content");
   while (clear.firstChild) {
    clear.removeChild(clear.firstChild);
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
        menupage();
    });

    about.addEventListener("click", () => {
        remove();
    });

    review.addEventListener("click", () => {
        remove();
    });
})();