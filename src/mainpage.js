import dish from "./images/maindish.jpg"

const main = (function() {
    const content=document.querySelector("#content");
    
    const left=document.createElement("div");
    left.classList="sidebar";
    content.appendChild(left);

    const container=document.createElement("div");
    container.classList="home";
    content.appendChild(container);

    const head=document.createElement("h1");
    head.textContent="A Culinary Journey to the Sea";
    container.appendChild(head);

    const maindish=document.createElement("img");
    maindish.src=dish;
    maindish.alt="An excelant looking dish.";
    maindish.classList = "maindish";
    container.appendChild(maindish);

    const reviews=document.createElement("h2");
    reviews.textContent="Reviews";
    container.appendChild(reviews);

    const review1=document.createElement("ul");
    const user1=document.createElement("div");
    const comment1=document.createElement("div")
    review1.appendChild(user1);
    user1.textContent="User1";
    comment1.textContent="The Restaurant is exceptional. From the breathtaking waterfront view to the impeccable service, every aspect of our dining experience was perfect. The seafood tower was fresh and beautiful, and the grilled salmon was cooked to perfection. A true gem for seafood lovers!";
    user1.appendChild(comment1);
    container.appendChild(review1);

    const review2=document.createElement("ul");
    const user2=document.createElement("div");
    const comment2=document.createElement("div")
    review2.appendChild(user2);
    user2.textContent="User2";
    comment2.textContent="Dining at The Restaurant was a fantastic experience. The ambiance is chic and relaxing, with stunning ocean views. " +
    "We started with the calamari, which was crispy and flavorful, followed by the seared tuna, which melted in my mouth. " +
    "The staff was attentive and knowledgeable, making our evening unforgettable";
    user2.appendChild(comment2);
    container.appendChild(review2);

    const review3=document.createElement("ul");
    const user3=document.createElement("div");
    const comment3=document.createElement("div")
    review3.appendChild(user3);
    user3.textContent="User3";
    comment3.textContent="The Restaurant never disappoints. The seafood is always fresh, and the service is top-notch. " +
    "I had the lobster tail, which was perfectly tender and rich, and paired it with a refreshing white wine recommended by the sommelier. " +
    "The atmosphere is cozy yet sophisticated, making it a perfect spot for any occasion."
    user3.appendChild(comment3);
    container.appendChild(review3);

    const right=document.createElement("div");
    right.classList="sidebar";
    content.appendChild(right);
});

export {main};
