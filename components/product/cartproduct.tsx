"use client";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartAtom } from "@/atoms/cartState";
import toast from "react-hot-toast";
export default function CartProduct() {
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }
  const cart = useRecoilValue(cartAtom);
  const [addcart, setCart] = useRecoilState(cartAtom);
  const Price = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    return total;
  };
  const removeFromCart = (item: { id: number }) => {
    // Filter item yang tidak sama dengan item yang ingin dihapus
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    toast.success(` remove to cart`);
  };
  const reduceFromCart = (item: { id: number }) => {
    // Cek apakah item ada di dalam cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Cek apakah quantity item lebih dari 1
      if (existingItem.quantity > 1) {
        // Jika ya, kurangi quantity-nya
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCart(updatedCart);
      } else {
        // Jika tidak, hapus item dari cart
        removeFromCart(item);
      }
    }
  };
  const addToCart = (item: Product) => {
    // Cek apakah item sudah ada di dalam cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Jika ya, tambahkan quantity-nya
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Jika tidak, masukkan item ke dalam cart dengan quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  return (
    <div className="h-screen ">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((product, index) => (
            <div
              key={product.id}
              className="justify-between mb-6 rounded-lg bg-white  shadow-md sm:flex sm:justify-start"
            >
              <img
                src={product.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      <button onClick={() => reduceFromCart(product)}>-</button>
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={product.quantity}
                      min="1"
                      readOnly
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      <button onClick={() => addToCart(product)}>+</button>
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{product.price}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeLinejoin="inherit"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => removeFromCart(product)}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${Price()}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
