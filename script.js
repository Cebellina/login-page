const root = document.getElementById("root");

const header = document.createElement("header");

const img = document.createElement("img");
img.src = "images/img.png";
img.classList.add("img");



header.appendChild(img);
root.appendChild(header);

console.log("Scriptet har laddats och körts!");
