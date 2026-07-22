import { useState } from "react";

const faqs = [
  {
    question: "How can I book train tickets online?",
    answer:"You can book train tickets online using the redRail website or app. After a successful online payment and entering the correct login credentials, you will receive the e-ticket via SMS and email.",
  },
  {
    question: "How many days in advance can I do train ticket booking online?",
    answer: "How many days in advance can I do train ticket booking online?",
  },
  {
    question: "Can I check the live train status on redRail?",
    answer:"Yes. You can check the location of your train, the time of arrival at your station, and the delay of your train, if any, using our Train Running Status feature. Enter the train name or number to track your train in real-time.",
  },
  {
    question: "Will I get a full refund if I choose Free Cancellation?",
    answer:"Yes. When you opt for Free Cancellation, you will receive a full refund if cancelled within the eligible time. Charges such as Agent Fee, IRCTC Convenience Fee, Payment Gateway Charges, and Free Cancellation fee are non-refundable.",
  },
  {
    question: "Is Free Cancellation available on all trains?",
    answer: "No. Free Cancellation is available only on selected trains and classes, as shown during booking.Yes. Your e-ticket is sent via email and SMS immediately after successful payment.",
  },
];

const TrainFAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
  <div className="faq-container">
    <h2 className="faq-title">
     Train Ticket Booking FAQs
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

export default TrainFAQ;