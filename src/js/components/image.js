export default function createImage(
  src,
  alt,
  width = 100,
  heigth = 100,
  lazy = false
) {
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;
  img.width = width;
  img.height = heigth;

  if (lazy) {
    img.loading = "lazy";
  }

  return img;
}
