import { useState } from "react";

const faqs = [
  {
    question: "How do I book a bus ticket?",
    answer:"Search your route, choose your preferred bus and seat, then complete the payment to confirm your booking.",
  },
  {
    question: "Can I cancel my ticket?",
    answer: "Yes, you can cancel your ticket before departure. Refunds depend on the bus operator's cancellation policy.",
  },
  {
    question: "How can I track my bus?",
    answer:"Go to 'My Bookings' and select your ticket to view the live bus tracking if available.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:"We accept UPI, Debit Cards, Credit Cards, Net Banking, and popular Wallets.",
  },
  {
    question: "Will I receive an e-ticket?",
    answer: "Yes. Your e-ticket is sent via email and SMS immediately after successful payment.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden" >
              <button onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 font-semibold text-left" >
                {faq.question}
                <span className="text-2xl">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <p className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;