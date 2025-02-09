'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sanityClient from "../sanity/lib/sanityClient"; // Adjust path to your Sanity client configuration
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
}

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] | order(_createdAt desc) [2...7]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url,
        badge
      }`;

      try {
        const data = await sanityClient.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-12 lg:px-28">
      {/* Header with View All link */}
      <div className="flex justify-between items-center mb-4 mt-6">
        <h1 className="font-bold text-[#272343] font-inter text-xl lg:text-[32px]">
          Featured Products
        </h1>
        <Link
          href="/pages/product"
          className="text-black text-lg font-semibold hover:underline px-4 hover:underline-offset-8"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto py-8">
        {products.map((product) => (
          <Link href={`/pages/product-page/${product._id}`} key={product._id}>
          <div
            key={product._id}
            className="relative bg-white shadow-md hover:shadow-2xl overflow-hidden cursor-pointer hover:rounded-lg"
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
            <div className="p-2">
              <div className="flex justify-between items-center">
                <h3 className="text-[14px] font-medium text-[#272343] hover:text-[#007580]">
                  {product.title}
                </h3>
                <p className="text-[16px] font-semibold text-gray-800">
                  {`$${product.price}`}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
