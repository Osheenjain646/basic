// Question 1
const mainImage = document.querySelector("#mainImg");

mainImage.style.border = "3px solid red";

mainImage.alt = "Spider-Man Image";

// Question 2
const createdByList = document.querySelector(".box ul ul");

const newListItem = document.createElement("li");

const newLink = document.createElement("a");
newLink.href = "#";
newLink.className = "boxLink";
newLink.textContent = "Jack Kirby";

newListItem.appendChild(newLink);

createdByList.appendChild(newListItem);

