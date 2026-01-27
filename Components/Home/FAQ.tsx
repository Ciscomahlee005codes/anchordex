"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Crypto escrow service?",
    answer:
      "A crypto escrow service is a third-party system that holds cryptocurrency securely until both parties fulfill agreed conditions, ensuring safe transactions between buyers and sellers.",
  },
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital or virtual currency secured by cryptography and powered by blockchain technology. It operates independently of central banks.",
  },
  {
    question: "How do I fund my exchange account?",
    answer:
      "You can fund your exchange account by navigating to the wallet section, selecting your preferred cryptocurrency, and transferring funds to the provided deposit address.",
  },
  {
    question: "How can I withdraw my funds?",
    answer:
      "To withdraw funds, go to your wallet dashboard, select withdraw, enter the destination wallet address, and confirm the transaction.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-[#0b1120] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h1>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111827] hover:bg-[#1f2937] transition rounded-xl p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
