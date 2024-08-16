import createCard from "../components/card";
import createImage from "../components/image";
import createButton from "../components/button";

import NewsletterImg from "../../assets/img/newsletter.png?as=webp";

export default function createNewsletterSection() {
  return createCard(
    "section card-newsletter",
    "Join Our Sushi Lovers Club!",
    "Stay updated with our latest sushi creations, special offers, and exclusive events. Subscribe now and be the first to know what's fresh on our menu!",
    createImage(NewsletterImg, "", 480, 327, true),
    createButton("Subscribe Now", "btn btn-func btn-func-s")
  );
}
