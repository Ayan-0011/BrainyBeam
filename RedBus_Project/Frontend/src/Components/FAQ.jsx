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
    <section className="faq-section">
  <div className="faq-container">
    <h2 className="faq-title">
      Frequently Asked Questions
    </h2>

    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-card">

          <button onClick={() => toggleFAQ(index)}
            className="faq-btn">
            {faq.question}

            <span className="faq-icon">
              {active === index ? "−" : "+"}
            </span>
          </button>

          {active === index && (
            <p className="faq-answer">
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