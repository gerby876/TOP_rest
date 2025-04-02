const menu = (function() {
    const content=document.querySelector("#content");
    
    const left=document.createElement("div");
    left.classList="sidebar";
    content.appendChild(left);

    const container=document.createElement("div");
    container.classList="menu";
    content.appendChild(container);

    const right=document.createElement("div");
    right.classList="sidebar";
    content.appendChild(right);
});

export {menu};