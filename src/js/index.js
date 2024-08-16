import "../scss/style.scss";
import createContainer from "./layout/container";
import createFooter from "./layout/footer";
import { menu } from "./layout/menu";

document.documentElement.lang = "en-US";
document.body.append(menu, createContainer(), createFooter());
