import { FaShippingFast, FaRecycle, FaCheckCircle, FaTags } from "react-icons/fa";

export default function BrandFeatures() {
  const features = [
    {
      icon: <FaShippingFast size={24} className="text-teal-500" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <FaCheckCircle size={24} className="text-teal-500" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <FaTags size={24} className="text-teal-500" />,
      title: "Unbeatable prices",
      description: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      icon: <FaRecycle size={24} className="text-teal-500" />,
      title: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-3xl lg:text-[32px] mt-12 font-semibold text-center text-[#272343] mb-8">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex flex-col justify-start items-start p-4 py-16 bg-[#F9F9F9] px-8 rounded-lg shadow-md gap-2 w-[95%] mx-auto h-auto lg:w-[290px] lg:h-[244px]"
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="font-medium text-gray-800 text-left">{feature.title}</h3>
      <p className="text-sm text-gray-600 text-left">{feature.description}</p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};


