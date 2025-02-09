'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function PopularStyles() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] | order(_createdAt desc) [1...6]{
        _id,
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="relative mx-auto px-4 sm:px-12 lg:px-28 py-12">
      <h1 className="font-roboto uppercase text-[black] text-xl py-8 sm:text-[34px] text-center font-bold">
        Explore New Styles
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.length > 0 && (
          <div className="relative col-span-2 row-span-2">
            <Link href={`/pages/product-page/${products[0]._id}`}>
              <Image
                src={products[0].imageUrl}
                layout="responsive"
                width={250}
                height={500}
                alt="products"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        )}
        {products.slice(1).map((product) => (
          <div key={product._id} className="relative">
            <Link href={`/pages/product-page/${product._id}`}>
              <Image
                src={product.imageUrl}
                layout="responsive"
                width={250}
                height={250}
                alt ="products"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}