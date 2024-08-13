import createButton from "./button";
import createImage from "./image";
import createLogo from "./logo";
import createNavigation from "./navigation";

import BasketIcon from "../../assets/icons/basket-dark.svg";
import MenuIcon from "../../assets/icons/menu.svg";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.append(
    createLogo("dark", "header-logo"),
    createNavigation("header-nav"),
    createButton(
      createImage(BasketIcon, "Basket/cart icon", 100, 100),
      "btn-header"
    ),
    createButton(createImage(MenuIcon, "Menu icon", 100, 100), "btn-header")
  );

  return header;
}
