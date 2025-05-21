import "../../../assets/css/faq.css";


import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Home, LifeBuoy, Users } from "lucide-react";

// Define types
type FAQItem = { question: string; answer: string };
type FAQCategory = "General" | "Support" | "Others";
type FAQData = Record<FAQCategory, FAQItem[]>;

const categories: { name: FAQCategory; icon: React.ElementType }[] = [
  { name: "General", icon: Home },
  { name: "Support", icon: LifeBuoy },
  { name: "Others", icon: Users },
];

const faqs: FAQData = {
  General: [
    { question: "What is this platform about?", answer: "This platform provides innovative solutions to enhance your productivity." },
    { question: "How do I sign up?", answer: "Click on the 'Sign Up' button, fill in your details, and verify your email." },
  ],
  Support: [
    { question: "How do I contact customer support?", answer: "You can reach us via live chat or email us at support@example.com." },
    { question: "What should I do if I encounter an issue?", answer: "Try refreshing the page or clearing your cache. If the issue persists, contact support." },
  ],
  Others: [
    { question: "Do you have a refund policy?", answer: "Yes, we offer a 30-day money-back guarantee on all purchases." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from the account settings." },
  ],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("General");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-8 text-white">
      <div className="bg-gray-800 shadow-2xl rounded-2xl flex w-full max-w-4xl p-6 border border-neon-blue/50">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-gray-700 p-4">
          <h3 className="text-sm text-neon-blue font-semibold uppercase mb-4 tracking-wide">How to Get Started</h3>
          <ul className="space-y-4">
            {categories.map(({ name, icon: Icon }) => (
              <li
                key={name}
                onClick={() => setActiveCategory(name)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all text-gray-300 hover:text-neon-blue hover:shadow-neon 
                  ${activeCategory === name ? "bg-neon-blue/20 text-neon-blue font-bold shadow-neon" : "hover:bg-gray-700"}`}
              >
                <Icon className="w-5 h-5 text-neon-blue" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-bold text-neon-blue mb-6 drop-shadow-lg">Frequently Asked Questions</h2>

          {/* Scrollable FAQ List */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto faq-scrollbar">
            {faqs[activeCategory].map((faq: FAQItem, index: number) => (
              <div key={index} className="bg-gray-700/80 p-4 rounded-xl shadow-md border border-gray-600 hover:shadow-neon transition-all">
                <button
                  className="flex justify-between items-center w-full text-lg font-semibold text-white hover:text-neon-blue"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="text-neon-blue" />
                  </motion.div>
                </button>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-gray-300"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
