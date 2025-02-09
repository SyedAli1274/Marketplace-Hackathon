"use client";

import React from "react";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

// importing components
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface ProductDetailPageProps {
  params: Promise<{ id: string }>; // Mark params as a Promise
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = React.use(params); // Unwrap the params using React.use()
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart, successMessage, clearSuccessMessage } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "products" && _id == $id][0]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url,
        description
      }`;

      try {
        const result = await client.fetch(query, { id });
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        clearSuccessMessage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, clearSuccessMessage]);

  if (!product) {
    return (
      <div className="text-center h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#029FAE]"></div>
          <p className="text-lg font-medium text-[#272343]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopHeader />
      <Header />
      <Navbar />
      <div className="py-8 px-4 sm:px-12 lg:px-28">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 items-center lg:items-start overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto md:w-[300px] md:h-[300px] lg:w-[675px] lg:h-auto object-fit"
              width={200}
              height={200}
            />
          </div>
          <div className="lg:w-1/2 p-4 md:p-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold font-inter text-[#272343] mb-4 lg:mb-8">
              {product.title}
            </h2>
            <p className="text-white bg-[#029FAE] w-[144px] h-[44px] text-xl font-bold mb-4 rounded-full text-center p-2">
              ${product.price} USD
            </p>
            <p className="text-[#272343] text-md md:text-[22px] mt-2 lg:mt-8">
              {product.description}
            </p>
            <button
              className="flex items-center gap-2 mt-4 lg:mt-8 bg-[#029FAE] text-white px-6 py-4 rounded-md hover:bg-teal-600"
              onClick={() => addToCart(product._id, 1)}
            >
              <FaShoppingCart />
              Add To Cart
            </button>
            {successMessage && (
              <div className="mt-4 text-green-600 font-medium">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <Featured />
      <Footer />
    </>
  );
}
