import createButton from "../components/button";
import createImage from "../components/image";
import createLogo from "../components/logo";

import CloseIcon from "../../assets/icons/close.svg";
import createNavigation from "./navigation";

const menu = (() => {
  const menu = document.createElement("div");
  menu.classList = "menu hidden";

  const header = document.createElement("div");
  header.classList.add("menu-header");

  const hideMenu = () => {
    menu.classList.add("hidden");
    document.body.classList.remove("block-mobile-scroll");
  };

  header.append(
    createLogo("white", true),
    createButton(
      createImage(CloseIcon, "Close icon", 36, 36),
      "btn btn-icon btn-icon-s",
      hideMenu
    )
  );
  menu.append(header, createNavigation("menu-nav"));

  return menu;
})();

const showMenu = () => {
  menu.classList.remove("hidden");
  document.body.classList.add("block-mobile-scroll");
};

export { menu, showMenu };
