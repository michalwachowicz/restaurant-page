import "../scss/style.scss";

const content = document.createElement("div");
content.id = "content";

const h1 = document.createElement("h1");
h1.textContent = "Hello World!";

content.appendChild(h1);
document.body.appendChild(content);

alert("Everything works!");
