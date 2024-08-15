export default function creteSection(title, description) {
  const section = document.createElement("section");
  section.classList = "section";

  const h2 = document.createElement("h2");
  h2.classList = "section-heading";
  h2.textContent = title;

  const p = document.createElement("p");
  p.classList = "section-description";
  p.innerHTML = description;

  section.append(h2, p);
  return section;
}
