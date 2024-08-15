import "../scss/style.scss";
import createContainer from "./layout/container";
import { menu } from "./layout/menu";

document.body.append(createContainer(), menu);
