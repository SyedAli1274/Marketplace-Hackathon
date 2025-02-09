"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import sanityClient from "../sanity/lib/sanityClient";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl?: string;
  description: string;
  inventory: number;
  tags: string[];
}

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const query = `*[_type == "products"]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        description,
        inventory,
        tags
      }`;
      const result = await sanityClient.fetch(query);
      setProducts(result);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-12 lg:px-28">
        <h1 className="text-center md:text-left font-bold mb-4 mt-6 text-[#272343] font-inter text-xl lg:text-[32px]">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto py-8">
          {products.map((product) => (
            <Link href={`/pages/product-page/${product._id}`} key={product._id}>
              <div className="relative bg-white shadow-md hover:shadow-2xl overflow-hidden cursor-pointer">
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded ${
                      product.badge === "New"
                        ? "bg-green-500"
                        : product.badge === "Sales"
                          ? "bg-orange-500"
                          : ""
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Image */}
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="responsive"
                    width={250}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                )}

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-[16px] font-medium text-[#272343] hover:text-[#007580] mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </p>
                    {product.priceWithoutDiscount && (
                      <p className="text-sm line-through text-[#272343]">
                        {product.priceWithoutDiscount}
                      </p>
                    )}
                  </div>
                </div>

                {/* Shopping Cart */}
                <div className="absolute bottom-3 right-3">
                  <button
                    className="p-2 bg-gray-100 rounded-md hover:text-white hover:bg-[#029FAE]"
                    onClick={() => addToCart(product._id, 1)}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
