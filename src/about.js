const aboutpage = (function() {
    const content=document.querySelector("#content");
    
    const container=document.createElement("div");
    container.classList="aboutpage";
    content.appendChild(container);

    const head=document.createElement("h1");
    head.textContent="About The Restaurant";
    container.appendChild(head);

    const p1 = document.createElement("p");
    p1.textContent = "Welcome to The Restaurant, where the freshest seafood meets unforgettable dining. " +
    "Nestled by the sea, we take pride in offering an extraordinary experience that celebrates the rich flavors of the ocean. " +
    "Our commitment to quality is at the heart of everything we do—from the carefully sourced seafood to the warm, inviting atmosphere. " +
    "Whether you're here for a casual meal with family or a special night out, we promise a dining experience that is both delicious and memorable.";
    container.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "At The Restaurant, our chefs hand-select the finest, sustainably caught seafood to create dishes that are as fresh as the tides. " +
    "From juicy lobster tails to perfectly seared scallops and everything in between, our menu showcases the best the ocean has to offer. " +
    "We work closely with local fishermen and trusted suppliers to ensure every dish is made with ingredients that are as fresh as possible.";
    container.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "Our passion for great food extends beyond just the fish; we believe that every meal should be an experience. " +
    "That's why we've designed a warm and welcoming atmosphere for you to enjoy. " +
    "The sounds of the waves, the scent of the sea breeze, and the relaxed vibe create the perfect setting for any occasion.";
    container.appendChild(p3);

    const p4 = document.createElement("p");
    p4.textContent = "Whether you're a seafood connoisseur or just looking for a fresh, delicious meal, " +
    "The Restaurant has something to satisfy your cravings. Join us today and indulge in a true taste of the ocean.";
    container.appendChild(p4);

    const p5 = document.createElement("p");
    p5.textContent = "Thank you for choosing The Restaurant—where seafood is more than just a meal; it’s a celebration.";
    container.appendChild(p5);

});

export {aboutpage};