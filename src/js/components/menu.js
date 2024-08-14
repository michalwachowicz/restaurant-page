import createButton from "./button";
import createImage from "./image";
import createLogo from "./logo";

import CloseIcon from "../../assets/icons/close.svg";
import createNavigation from "./navigation";

const menu = (() => {
  const menu = document.createElement("div");
  menu.classList = "menu hidden";

  const header = document.createElement("div");
  header.classList.add("menu-header");

  const hideMenu = () => {
    menu.classList.add("hidden");
  };

  header.append(
    createLogo("white", "menu-header-logo"),
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
};

export { menu, showMenu };
