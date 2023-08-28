import { atom } from "recoil";
import products from "@/data.json"; // import your JSON data

// Define an interface for the product data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Create an atom to store an array of products
export const cartAtom = atom<Product[]>({
  key: "cartAtom", // unique ID
  default: [], // use your JSON data as initial value
});
