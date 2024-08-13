import createImage from "./image";
import LogoDark from "../../assets/img/logo-dark.svg";
import LogoWhite from "../../assets/img/logo-white.svg";

export default function createLogo(color, className) {
  const a = document.createElement("a");
  a.href = "#";
  a.classList.add(className);

  const img = createImage(
    color == "white" ? LogoWhite : LogoDark,
    "The sushi bar logo",
    60,
    87
  );
  img.classList.add(`${className}-img`);

  a.appendChild(img);
  return a;
}
