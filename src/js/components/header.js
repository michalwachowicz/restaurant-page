import createLogo from "./logo";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(createLogo("dark", "header-logo"));

  return header;
}
