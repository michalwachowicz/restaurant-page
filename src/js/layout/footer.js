import createLogo from "../components/logo";
import createNavigation from "./navigation";

export default function createFooter() {
  const footer = document.createElement("footer");
  footer.classList = "footer section";

  const container = document.createElement("div");
  container.classList = "container";

  const wrapper = document.createElement("div");
  wrapper.classList = "footer-wrapper";
  wrapper.append(createLogo("dark"), createNavigation("footer-nav"));

  const copyright = document.createElement("div");
  copyright.classList = "footer-copyright";
  copyright.textContent = `${new Date().getFullYear()} © Copyright by Michał Wachowicz`;

  container.append(wrapper, copyright);
  footer.append(container);

  return footer;
}
