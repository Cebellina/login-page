const root = document.getElementById("root");

const header = document.createElement("header");

const logo = document.createElement("h1");
logo.innerText = "img.png";
logo.classList.add("img");



header.appendChild(logo);
root.appendChild(header);