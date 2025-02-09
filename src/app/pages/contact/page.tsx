import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

import Image from "next/image";

export default function Contact() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar />
    <ContactForm/>
    <div className="px-4 sm:px-12 lg:px-28 ">

    <div className="bg-[#F4F4F4] py-4 flex flex-wrap justify-between px-10 w-full md:h-[270px] items-center gap-8 lg:gap-4">
    <div className="flex justify-center items-center gap-4">
      <Image
      src="/img/icons/trophy.png"
      alt="trophy"
      width={60}
      height={60}
      className=""
      />
      <div className="flex flex-col justify-start gap-2">
        <h1 className="sm:text-[25px] text-[20px] font-bold text-[#242424]">High Quality</h1>
        <p className="text-[16px] sm:[20px] text-[#898989] font-medium">crafted from top materials</p>
      </div>
    </div>

    <div className="flex justify-center items-center gap-4">
    <Image
      src="/img/icons/guarantee.png"
      alt="guarantee"
      width={60}
      height={60}
      className=""
      />
      <div className="flex flex-col justify-start gap-2">
        <h1 className="sm:text-[25px] text-[20px] font-bold text-[#242424]">Warranty Protection</h1>
        <p className="text-[16px] sm:[20px] text-[#898989] font-medium">Ovewr 2 years</p>
      </div>
    </div>

    <div className="flex justify-center items-center gap-4">
    <Image
      src="/img/icons/customer.png"
      alt="customer"
      width={60}
      height={60}
      className=""
      />
      <div className="flex flex-col justify-start gap-2">
        <h1 className="sm:text-[25px] text-[20px] font-bold text-[#242424]">24 / 7 Support</h1>
        <p className="text-[16px] sm:[20px] text-[#898989] font-medium">Dedicated support</p>
      </div>
    </div>

    </div>
      </div>
    <Footer/>
    </>
  );
}
