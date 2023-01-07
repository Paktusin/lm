import greek from "./assets/greek_salad.jpg";
import bruchettaImg from "./assets/greek_salad.jpg";

export interface Dish {
  name: string;
  price: number;
  descr: string;
  img: string;
}

export const menu: Dish[] = [
  {
    img: greek,
    name: "Greek salad",
    price: 12.99,
    descr:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruchettaImg,
    name: "Bruchetta",
    price: 5.99,
    descr:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: "preview.jpg",
    name: "Lemon Dessert",
    price: 5.0,
    descr:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
