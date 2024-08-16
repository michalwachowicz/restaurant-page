import createButton from "../components/button";
import createAddToCartBtn from "../components/add-to-cart-btn";
import createCard from "../components/card";
import createSection from "./section";
import createImage from "../components/image";

import ArrowRight from "../../assets/icons/arrow-right.svg";
import SalmonUramaki from "../../assets/img/sushi-1.png?as=webp";
import TunaUramaki from "../../assets/img/sushi-2.png?as=webp";
import SalmonNigiri from "../../assets/img/sushi-3.png?as=webp";

const labels = [
  { name: "All Sushi", active: true },
  { name: "Sashimi", active: false },
  { name: "Nigiri", active: false },
  { name: "Uramaki", active: false },
  { name: "Temaki", active: false },
  { name: "Futomaki", active: false },
];

const SUSHI_DESCRIPTION =
  "Delicately crafted with fresh ingredients, perfect for every sushi lover.";

const sushiSamples = [
  {
    name: "Salmon Uramaki",
    description: SUSHI_DESCRIPTION,
    src: SalmonUramaki,
    alt: "A sushi piece of salmon uramaki",
  },
  {
    name: "Tuna Uramaki",
    description: SUSHI_DESCRIPTION,
    src: TunaUramaki,
    alt: "A sushi piece of tuna uramaki",
  },
  {
    name: "Salmon Nigiri",
    description: SUSHI_DESCRIPTION,
    src: SalmonNigiri,
    alt: "A sushi piece of salmon nigiri",
  },
];

export default function createMenuSamplesSection() {
  const section = createSection(
    "Savor the Art of Sushi Perfection",
    "Embark on a culinary journey where every bite is a masterpiece. For <strong>JUST $30</strong>, enjoy unlimited sushi, expertly crafted with the freshest ingredients to delight your senses."
  );
  section.classList.add("menu-section");

  const labelContainer = document.createElement("div");
  labelContainer.classList = "menu-section-label-container";

  labels.forEach((label) => {
    const btn = createButton(
      label.name,
      `btn btn-label ${label.active ? "active" : ""}`
    );
    labelContainer.appendChild(btn);
  });

  const cardContainer = document.createElement("div");
  cardContainer.classList = "menu-section-card-container";

  sushiSamples.forEach((sushi) =>
    cardContainer.appendChild(
      createCard(
        "card-menu",
        sushi.name,
        sushi.description,
        createImage(sushi.src, sushi.alt, 150, 150, true),
        createAddToCartBtn()
      )
    )
  );

  const viewAllBtn = createButton("View All", "btn btn-view-all");
  viewAllBtn.appendChild(createImage(ArrowRight, "Right arrow icon", 48, 48));

  section.append(labelContainer, cardContainer, viewAllBtn);

  return section;
}
