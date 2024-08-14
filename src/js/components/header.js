import createButton from "./button";
import createImage from "./image";
import createLogo from "./logo";
import createNavigation from "./navigation";

import BasketIcon from "../../assets/icons/basket.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import { showMenu } from "./menu";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.append(
    createLogo("dark", "header-logo"),
    createNavigation("header-nav"),
    createButton(
      createImage(BasketIcon, "Basket/cart icon", 36, 36),
      "btn btn-icon btn-icon-s btn-header-basket"
    ),
    createButton(
      createImage(MenuIcon, "Menu icon", 36, 36),
      "btn btn-icon btn-icon-s btn-header-menu",
      showMenu
    )
  );

  return header;
}
