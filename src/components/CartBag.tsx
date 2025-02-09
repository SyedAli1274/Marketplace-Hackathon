'use client';

import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartBag() {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDecrease = (id: string, quantity: number) => {
    if (quantity > 1) {
      updateCartQuantity(id, quantity - 1);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-12 lg:px-28 bg-gray-100 h-auto flex flex-col lg:flex-row gap-12 justify-between items-start py-12 lg:py-24">
        <div className="md:w-[65%] w-full">
          <h1 className="text-[#111111] text-left font-medium text-md my-4 sm:text-[22px]">
            Bag
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-start items-center gap-4 sm:gap-8 relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="sm:w-[150px] sm:h-[150px]"
                  />
                  <div className="flex flex-col justify-between items-start gap-2 sm:gap-4 text-left w-full">
                    <div className="flex justify-between items-center w-full">
                      <h1 className="text-[14px] sm:text-[16px] text-[#272343] font-inter mb-0 sm:mb-2">
                        {item.title}
                      </h1>
                      <div className="text-right text-sm text-[#757575]">
                        <p>
                          MRP: <span>${item.price}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-4 sm:gap-12">
                      <p className="text-[12px] sm:text-[15px] text-[#757575]">
                        {`Quantity: `}
                        <span>{item.quantity}</span>
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-2 sm:gap-4">
                      <button
                        className="w-8 h-8 flex items-center justify-center p-2 bg-transparent hover:text-[#029FAE] font-medium hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]"
                        onClick={() => handleDecrease(item.id, item.quantity)}
                      >
                        -
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center p-2 bg-transparent hover:text-[#029FAE] font-medium hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="p-2 bg-transparent hover:bg-gray-200 border-transparent border-2 hover:border-[#029FAE] rounded-full"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash size={12} className="text-[#757575] hover:text-[#029FAE]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full lg:w-[40%] gap-4">
          <h1 className="text-[#111111] font-medium text-md my-4 sm:text-[22px] mb-6">
            Summary
          </h1>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-[#111111]">Subtotal</p>
            <p className="text-sm text-[#111111]">${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-[#111111]">Estimated Delivery & Handling</p>
            <p className="text-sm text-[#111111]">Free</p>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between items-center mb-8">
            <p className="text-base font-medium text-[#111111]">Total</p>
            <p className="text-base font-medium text-[#111111]">${calculateTotal().toFixed(2)}</p>
          </div>

          <div className="flex justify-center ">
          {cartItems.length ? (
            <Link href="/pages/checkout" passHref>
              <button className=" bg-[#00A9A9] text-white text-center font-medium text-sm py-2 w-[330px] h-[64px] rounded-full hover:bg-[#008f8f] transition mt-8">
                Member Checkout
              </button>
            </Link>
          ) : (
            <Link href="/pages/product" passHref>
              <button className=" bg-[#00A9A9] text-white text-center font-medium text-sm py-2 w-[330px] h-[62px] rounded-full hover:bg-[#008f8f] transition mt-8">
                Shop Now
              </button>
            </Link>
          )}
          </div>
        </div>
      </div>
    </>
  );
}