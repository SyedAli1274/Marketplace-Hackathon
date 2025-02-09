import AllProducts from "@/components/AllProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

import Image from "next/image";

export default function Product() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar/>
    <AllProducts/>
    {/* Subscription link */}
    <div className="bg-gray-100 h-auto lg:h-[754px] px-4 sm:px-12 lg:px-28 flex flex-col gap-8 justify-center items-center">

      <div className="md:w-760px md:h-[165px] h-auto w-full sm:w-[70%] p-2 mx-auto text-center">
        <h2 className="font-roboto text-lg sm:text-2xl md:text-3xl xl:text-[50px] font-medium text-black">Or Subscribe To The Newsletter</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4 md:mt-8">
        <input 
        type="email"
        name="email"
        placeholder="Email Address..."
        className="w-[80%] md:w-643px p-2 hover:rounded-md hover:bg-gray-200 border-b-2 transition-all duration-500 ease-in-out cursor-pointer border-black bg-transparent border-t-none" 
        />
        <button className="border-b-2 p-2 hover:rounded-md border-black transition-all duration-500 ease-in-out bg-transparent border-t-none hover:bg-black hover:text-white">SUBMIT</button>
        </div>
      </div>
{/* Products Gallery */}
<div className="flex flex-col items-center justify-center px-4 sm:px-12 lg:px-24">
  <div>
    <h2 className="font-roboto text-lg sm:text-2xl md:text-3xl xl:text-[45px] text-black font-medium">
      Follow Products And Discounts On Instagram
    </h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-12 gap-8">
    <Image
      src="/img/products/c8.png"
      alt="Orange Chair"
      width={186}
      height={186}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
    <Image
      src="/img/products/c6.png"
      alt="Orange Chair"
      width={200}
      height={200}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
    <Image
      src="/img/products/c5.png"
      alt="Orange Chair"
      width={200}
      height={200}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
    <Image
      src="/img/products/c3.png"
      alt="Orange Chair"
      width={200}
      height={200}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
    <Image
      src="/img/products/c1.png"
      alt="Orange Chair"
      width={200}
      height={200}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
    <Image
      src="/img/products/c9.png"
      alt="Orange Chair"
      width={200}
      height={200}
      className="w-full h-full object-cover hover:scale-105 cursor-pointer hover:shadow-md"
    />
  </div>
</div>

    </div>
    <Footer/>
    </>
  );
}
