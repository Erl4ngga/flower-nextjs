"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "@/atoms/cartState";
import Link from "next/link";
import toast from "react-hot-toast";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  const [cart, setCart] = useRecoilState(cartAtom);

  // Define a function to add a product to the cart
  const addToCart = () => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If yes, increment the quantity by one
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(newCart);
    } else {
      // If not, add the product with quantity one
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt={product.image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-white">
            <Link href={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {product.price}
        </p>
      </div>
    </div>
  );
}
