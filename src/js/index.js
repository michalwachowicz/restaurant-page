import "../scss/style.scss";
import createContainer from "./components/container";
import { menu } from "./components/menu";

document.body.append(createContainer(), menu);
