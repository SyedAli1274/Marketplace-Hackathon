'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import client from "../sanity/lib/sanityClient"; // Adjust path as needed

type Category = {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
};

export default function TopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "categories"]{
        _id,
        title,
        "imageUrl": image.asset->url,
        products
      }`;
      const data = await client.fetch(query);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <section className="px-4 sm:px-12 lg:px-28 py-12">
      <h2 className="text-center lg:text-left font-bold mb-8 mt-6 text-[#272343] font-inter text-xl lg:text-[32px]">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category._id} className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl group">
            <div className="relative w-[424px] h-[424px] cursor-pointer">
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="contain"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-black opacity-70 p-4">
              <h3 className="text-white text-lg font-semibold">{category.title}</h3>
              <p className="text-gray-300 text-sm">{category.products} Products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
