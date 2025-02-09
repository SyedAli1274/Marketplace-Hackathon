import Image from "next/image";

export default function PopularProducts() {
  const products = [
    { 
      id: 1,
      name: "The Poplar suede sofa",
      price: "$99.00",
      image: "/img/products/sofa.png",
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/img/products/c10.png",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/img/products/c11.png",
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-inter font-semibold text-[#272343] mb-8">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                index === 0
                  ? "sm:col-span-3 lg:col-span-2"
                  : "md:col-span-1 lg:col-span-1"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
                width={630}
                height={462}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="hover:text-teal-500 text-black font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
