import "../scss/style.scss";
import createContainer from "./layout/container";
import createFooter from "./layout/footer";
import { menu } from "./layout/menu";

document.body.append(menu, createContainer(), createFooter());
