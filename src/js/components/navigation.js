const pages = [
  { name: "home", active: true, link: "#" },
  { name: "menu", active: false, link: "#" },
  { name: "about us", active: false, link: "#" },
];

const createLink = (page, className) => {
  const li = document.createElement("li");
  li.classList.add(`${className}-list-item`);

  if (page.active) {
    li.classList.add("active");
  }

  const a = document.createElement("a");
  a.href = page.link;
  a.textContent = page.name;
  a.classList.add(`${className}-list-item-link`);

  li.appendChild(a);
  return li;
};

export default function createNavigation(className) {
  const nav = document.createElement("nav");
  nav.classList.add(className);

  const ul = document.createElement("ul");
  ul.classList.add(`${className}-list`);

  pages.forEach((page) => {
    const link = createLink(page, className);
    ul.appendChild(link);
  });

  nav.appendChild(ul);
  return nav;
}
