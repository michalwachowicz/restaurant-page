import "../scss/style.scss";
import createContainer from "./layout/container";
import createFooter from "./layout/footer";
import lcpPreload from "./lcpPreload";
import { menu } from "./layout/menu";

if (process.env.NODE_ENV == "production") {
  lcpPreload("./images/sushi-plate.webp");
}

document.documentElement.lang = "en-US";
document.body.append(menu, createContainer(), createFooter());
