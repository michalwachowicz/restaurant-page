import createHeader from "./header";
import createMain from "./main";
import createNewsletterSection from "./newsletter";
import createMenuSamplesSection from "./samples";

export default function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.append(
    createHeader(),
    createMain(),
    createMenuSamplesSection(),
    createNewsletterSection()
  );

  return container;
}
