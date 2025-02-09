import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="hidden sm:flex justify-between items-center sm:px-12 md:px-28 h-[74px] bg-white ">
        
        {/* navlinks */}
        <ul className="flex justify-center items-center gap-8">
          <Link href="/">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Home
            </li>
          </Link>
          <Link href="/pages/shop">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Shop
            </li>
          </Link>
          <Link href="/pages/product">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Product
            </li>
          </Link>
          <Link href="/pages/product-page">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Pages
            </li>
          </Link>
          <Link href="/pages/about">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              About
            </li>
          </Link>
        </ul>

        {/* contact no: */}
        <div className="flex justify-center gap-2">
          <h1 className="text-[#636270] text-[14px] font-inter">Contact: </h1>
          <p className="text-[#272343] text-[14px] font-semibold font-Inter">{`(808) 555-0111`}</p>
        </div>
      </div>
    </>
  );
}
