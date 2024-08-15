import createHeader from "./header";
import createMain from "./main";

export default function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.append(createHeader(), createMain());

  return container;
}
