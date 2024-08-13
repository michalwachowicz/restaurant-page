import createLogo from "./logo";
import createNavigation from "./navigation";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.append(
    createLogo("dark", "header-logo"),
    createNavigation("header-nav")
  );

  return header;
}
