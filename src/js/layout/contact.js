import createSection from "./section";

const createContactInfo = (heading, description) => {
  const section = document.createElement("section");
  section.classList = "contact-info";

  const h3 = document.createElement("h3");
  h3.classList = "contact-info-heading";
  h3.textContent = heading;

  const content = document.createElement("div");
  content.classList = "contact-info-content";
  content.innerHTML = description;

  section.append(h3, content);
  return section;
};

export default function createContactSection() {
  const section = createSection(
    "Get in Touch with Us",
    "Whether you have a question, need directions, or want to make a reservation, we’re here to help. Visit us at our location or give us a call for more information.<br />We look forward to serving you!"
  );
  section.classList.add("contact");

  const container = document.createElement("div");
  container.classList = "contant-container";

  const info = document.createElement("div");
  info.classList = "contact-info-section";
  info.append(
    createContactInfo(
      "Address:",
      "Sushi Bar<br />1234 Sushi Avenue<br />New York, NY 10011"
    ),
    createContactInfo("Contact Number:", "+1 (123) 456-7890")
  );

  // <iframe style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183949017381!2d-73.98811752414316!3d40.757978734799835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1spl!2sit!4v1723810252855!5m2!1spl!2sit";
  map.width = 480;
  map.height = 300;
  map.loading = "lazy";
  map.allowFullscreen = "";
  map.referrerPolicy = "no-referrer-when-downgrade";
  map.classList.add("contact-map");

  container.append(info, map);
  section.appendChild(container);

  return section;
}
