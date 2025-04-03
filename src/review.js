const reviewpage = (function() {
    const content=document.querySelector("#content");

    const container=document.createElement("div");
    container.classList="leavereview";
    content.appendChild(container);

    const review = document.createElement("h1");
    review.textContent = "Leave a review!";
    container.appendChild(review);

    const reviewbox = document.createElement("textarea");
    reviewbox.textContent = "Please note that at this time your review will not be submitted or displayed."
    container.appendChild(reviewbox);

    const submit = document.createElement("button");
    submit.classList = "submit";
    submit.textContent = "Submit";
    container.appendChild(submit);
});

export {reviewpage};