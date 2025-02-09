import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function SingleProduct() {
  return (
    <div className="py-8 px-4 sm:px-12 lg:px-28 ">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20  items-center lg:items-start  overflow-hidden">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src="/img/products/c5.png"
            alt="Library Stool Chair"
            className="w-full h-auto md:w-[300px] md:h-[300px] lg:w-[675px] lg:h-auto object-fit"
            width={200}
            height={200}
          />
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center items-start">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold font-inter text-[#272343] mb-4 lg:mb-8">Library Stool Chair</h2>
          <p className="text-[white] bg-[#029FAE] w-[144px] h-[44px] text-xl font-bold mb-4 rounded-full text-center p-2">$20.00 USD</p>
          <p className="text-[#272343] text-md md:text-[22px] mt-2 lg:mt-8">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing.`}
          </p>
          <button className="flex items-center gap-2 mt-4 lg:mt-8 bg-[#029FAE] text-white px-6 py-4 rounded-md hover:bg-teal-600">
            <FaShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};


