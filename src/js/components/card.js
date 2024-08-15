export default function createCard(
  classList,
  heading,
  description,
  img,
  elements
) {
  const card = document.createElement("div");
  card.classList = `card ${classList}`;

  const imgContainer = document.createElement("div");
  imgContainer.classList = "card-img-container";
  imgContainer.appendChild(img);

  const info = document.createElement("div");
  info.classList = "card-info";

  const h2 = document.createElement("h2");
  h2.classList = "card-heading";
  h2.textContent = heading;

  const p = document.createElement("p");
  p.classList = "card-description";
  p.textContent = description;

  info.append(h2, p, elements);
  card.append(imgContainer, info);

  return card;
}
