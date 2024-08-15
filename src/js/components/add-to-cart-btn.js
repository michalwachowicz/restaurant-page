import createImage from "./image";
import createButton from "./button";

import Basket from "../../assets/icons/basket-white.svg";

const CLASS_NAME = "btn-add-to-cart";

export default function createAddToCartBtn() {
  const container = document.createElement("div");
  container.classList = `${CLASS_NAME}-container`;

  const img = createImage(Basket, "Basket icon", 24, 24);
  container.appendChild(img);
  container.innerHTML += "Add to Cart";

  return createButton(container, `btn btn-func btn-func-s ${CLASS_NAME}`);
}
