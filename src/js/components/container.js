import createHeader from "./header";

export default function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(createHeader());

  return container;
}
