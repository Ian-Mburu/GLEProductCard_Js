const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const whiteColor = document.querySelector(".white");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./images/redbenz.webp")';
});

whiteColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "white";
    cartButton.style.color = "black";
    itemTag.style.backgroundColor = "white";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url("./images/whitebenz.webp")';
});

blackColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    cartButton.style.color = "white";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url("./images/blackbenz.webp")';
});


const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};

cartButton.addEventListener("click", cart)

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = 'none';
}
feedback.addEventListener("click", feedback)