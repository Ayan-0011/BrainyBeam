import { useState } from "react";
import AccordionItem from "./Components/AccordionItem";

const faqs = [
    {
        id: 1,
        question: "What is React?",
        answer:
            "React is a JavaScript library used to build fast and interactive user interfaces.",
    },
    {
        id: 2,
        question: "What is useState?",
        answer:
            "useState is a React Hook used to manage state inside functional components.",
    },
    {
        id: 3,
        question: "What is useEffect?",
        answer:
            "useEffect is a React Hook used for side effects like API calls, timers and subscriptions.",
    },
    {
        id: 4,
        question: "Why use React-redux?",
        answer:
           "Redux is a state management library used to manage and share application state across multiple components. It provides a centralized store where all the application's state is stored, making data predictable and easier to manage in large React applications.",
    },
];

const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-5">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={faq.id} faq={faq} isOpen={openIndex === index}
                            onClick={() => handleToggle(index)} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;