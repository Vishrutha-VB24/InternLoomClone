import { useState } from "react";

export default function FAQSection() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const questions = [
    "How do I create an account?",
    "Can I apply for multiple internships?",
    "Do employers have access to my profile?",
    "How can I stand out as a candidate?",
    "Is there a limit to the number of internships I can apply for?",
    "How can I contact support for assistance?"
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-6 w-3/4 mx-auto">
        {questions.map((question, index) => (
          <div key={index} className="border-b py-3 cursor-pointer text-left" onClick={() => toggleFAQ(index)}>
            <h3 className="text-lg font-semibold flex justify-between">
              {question} <span>{faqOpen === index ? "−" : "+"}</span>
            </h3>
            {faqOpen === index && <p className="text-gray-600 mt-2">Answer to {question} goes here...</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

  