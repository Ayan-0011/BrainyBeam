import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
      <button  onClick={onClick}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-100 transition" >
        <h2 className="text-lg font-semibold">{faq.question}</h2>

        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
      </button>

      {isOpen && (
        <div className="p-5 bg-gray-50 border-t">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;