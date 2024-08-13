export default function createImage(src, alt, width = 100, heigth = 100) {
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;
  img.width = width;
  img.height = heigth;

  return img;
}
