import createButton from "./button";
import createImage from "./image";

import SushiPlate from "../../assets/img/sushi-plate.png";

export default function createMain() {
  const main = document.createElement("section");
  main.classList = "main";

  const info = document.createElement("div");
  info.classList = "main-info";

  const h1 = document.createElement("h1");
  h1.classList = "main-heading";
  h1.innerHTML = 'Taste of <span class="main-heading-highlight">Japan</span>';

  const p = document.createElement("p");
  p.classList = "main-description";
  p.textContent =
    "Fall in love with the most authentic and delicious sushi in the city!";

  const btn = createButton("View Menu", "btn btn-func btn-func-l btn-gradient");
  const imgContainer = document.createElement("div");

  imgContainer.classList = "main-img";
  imgContainer.appendChild(
    createImage(
      SushiPlate,
      "A plate with sushi and a cup of soy sauce with chopsticks on it"
    )
  );

  info.append(h1, p, btn);
  main.append(info, imgContainer);

  return main;
}
