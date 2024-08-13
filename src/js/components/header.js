import createImage from "./image";
import LogoDark from "../../assets/img/logo-dark.svg";
import LogoWhite from "../../assets/img/logo-white.svg";

const createLogo = (color) => {
  const a = document.createElement("a");
  a.href = "#";
  a.classList.add("header-logo");

  const img = createImage(
    color == "white" ? LogoWhite : LogoDark,
    "The sushi bar logo",
    60,
    87
  );

  a.appendChild(img);
  return a;
};

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(createLogo("dark"));

  return header;
}
