import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
export default function ContactForm() {
  return (
    <div className="w-full h-auto  mx-auto px-4 sm:px-12 lg:px-28 py-16">
      {/* Heading */}
      <div className="text-center mb-24">
        <h1 className="text-2xl md:text-[36px] font-semibold text-black mb-4 font-poppins">
          Get In Touch With Us
        </h1>
        <p className="w-full sm:w-[654px] mx-auto text-[#9f9f9f] text-sm md:text-[16px]">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-wrap justify-center items-start gap-12 mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 w-full sm:w-[343px]">
          {/* Address */}
          <div className="flex gap-4">
            <FaMapMarkerAlt size={24} className="text-black mr-4" />
            <div>
              <h2 className="text-md md:text-[24px] font-Poppins font-semibold text-black">
                Address
              </h2>
              <p className="text-sm md:text-[16px] text-black">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex gap-4">
            <FaPhoneAlt size={24} className="text-black mr-4" />
            <div>
              <h2 className="text-md md:text-[24px] font-Poppins font-semibold text-black">
                Phone
              </h2>
              <p className="text-sm md:text-[16px] text-black">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex gap-4">
            <FaClock size={24} className="text-black mr-4" />
            <div>
              <h2 className="text-md md:text-[24px] font-Poppins font-semibold text-black">
                Working Time
              </h2>
              <p className="text-sm md:text-[16px] text-black">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-[635px]">
          <form className="flex flex-col gap-6 px-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-[16px] font-medium text-black font-['Poppins']"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-[16px] font-medium text-black font-['Poppins']"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="mt-1 p-3 w-full border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
              />
            </div>
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm md:text-[16px] font-medium text-black font-['Poppins']"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="mt-1 p-3 w-full border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-[16px] font-medium text-black font-['Poppins']"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I'd like to ask about"
                className="mt-1 p-3 w-full border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-[237px] bg-[#029FAE] text-white text-sm font-medium py-3 rounded-md hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
