import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div>
        {/* About hero section */}
        <div className="px-4 sm:px-12 lg:px-24 flex flex-col lg:flex-row  justify-between gap-4 items-center h-auto mx-auto">
          <div className="flex flex-col justify-around lg:items-start items-center text-center lg:text-left w-[90%] md:h-[350px] h-auto lg:w-[672px] lg:h-[478px] bg-[#007580] text-white">
            <div className="w-[95%] md:w-[495px] h-auto pt-4 lg:pt-2  md:px-12">
              <h1 className="mb-4 text-md md:text-[32px] font-bold font-inter">{`About Us - Comforty`}</h1>
              <p className="text:sm md:text-[18px]">{`At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.`}</p>
            </div>
            <div>
              <button className="w-[179px] h-[56px] px-2 py-4 my-4 bg-[#1d909a] mx-auto lg:ml-12 font-bold hover:shadow-xl">
                View Collections
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/img/products/c3.png"
              alt="chair"
              width={300}
              height={350}
              className="hidden lg:block md:w-[619px] md:h-[478px]"
            />
          </div>
        </div>

      </div>
    </>
  );
}
