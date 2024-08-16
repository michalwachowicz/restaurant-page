export default function lcpPreload(imgLink) {
  const link = document.createElement("link");

  link.rel = "preload";
  link.as = "image";
  link.href = imgLink;

  document.head.appendChild(link);
}
