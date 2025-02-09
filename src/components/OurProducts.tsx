'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import sanityClient from "../sanity/lib/sanityClient"; // Import the configured Sanity client
import Link from "next/link";

export default function OurProducts() {
  interface Product {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
    priceWithoutDiscount?: number;
    badge?: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] | order(_createdAt desc) [0...8]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url,
        priceWithoutDiscount,
        badge
      }`;

      try {
        const data = await sanityClient.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-12 lg:px-28">
      <h1 className="text-center font-bold mb-4 mt-6 text-[#272343] font-inter text-xl lg:text-[32px]">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto py-8">
        {products.map((product) => (
          <Link href={`/pages/product-page/${product._id}`} key={product._id}>
          <div
            key={product._id}
            className="relative bg-white shadow-md hover:shadow-2xl overflow-hidden cursor-pointer"
          >
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
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="responsive"
              width={250}
              height={300}
              className="w-full h-auto object-cover"
            />

            {/* Details */}
            <div className="p-4">
              <h3 className="text-[16px] font-medium text-[#272343] hover:text-[#007580] mb-2">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold text-gray-800">{`$${product.price}`}</p>
                {product.priceWithoutDiscount && (
                  <p className="text-sm line-through text-[#272343]">
                    {`$${product.priceWithoutDiscount}`}
                  </p>
                )}
              </div>
            </div>
            {/* Shopping Cart */}
            <div className="absolute bottom-3 right-3">
              <button className="p-2 bg-gray-100 rounded-md hover:text-white hover:bg-[#029FAE]">
                <FaShoppingCart />
              </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
