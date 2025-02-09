
export default function Questions() {
  const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

  return (
    <div className=" mx-auto my-10 py-10 px-4 sm:px-12 lg:px-28">
      <h2 className="text-2xl lg:text-[48px] font-bold font-helvetica text-center text-[#333333] mb-8">Questions Looks Here</h2>
      <p className="text-center text-[#4f4f4f] mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border p-4 shadow-sm hover:shadow-md transition w-[95%] md:w-[500px] bg-[#F7F7F7]"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-[#333333] text-[24px]">+</span>
            </div>
            <p className="mt-2 text-[#333333]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
