export default function createButton(content, classList, onClick = null) {
  const button = document.createElement("button");

  button.type = "button";
  button.classList = classList;

  if (content instanceof HTMLElement) {
    button.appendChild(content);
  } else if (typeof content === "string" || content instanceof String) {
    button.textContent = content;
  }

  if (onClick != null && onClick instanceof Function) {
    button.addEventListener("click", onClick);
  }

  return button;
}
