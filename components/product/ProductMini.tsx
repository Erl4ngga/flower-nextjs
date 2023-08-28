"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { cartAtom } from "@/atoms/cartState";
import toast from "react-hot-toast";
import { useEffect } from "react";
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
export default function ProductMiniCard({ product }: ProductCardProps) {
  const [cart, setCart] = useRecoilState(cartAtom);

  // Define a function to add a product to the cart
  const addToCart = (product: Product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If yes, increment the quantity by one
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(newCart);
      toast(`${product.name} Out of stock, you can add other products.`);
    } else {
      // If not, add the product with quantity one
      setCart([...cart, { ...product, quantity: 1 }]);
      toast(`${product.name} added to cart`);
    }
  };

  return (
    <div>
      <Card key={product.id} className="mx-5 my-5 " shadow="sm">
        <CardBody className="overflow-visible p-0 ">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt=""
            className="w-44  object-cover h-[240px] "
            src={product.image}
          />

          <Button
            color="primary"
            size="sm"
            variant="ghost"
            onClick={() => addToCart(product)}
          >
            Button
          </Button>
        </CardBody>
        <CardFooter className="text-small justify-between ">
          <b>{product.name}</b>
          <p className="text-default-500">{product.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
