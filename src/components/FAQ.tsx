import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is GenuineHire?",
    answer: "GenuineHire is a platform designed to detect AI-generated content during interviews to ensure fair hiring industries such as healthcare, finance, customer service, and marketing to improve efficiency and accuracy. As technology advances, AI continues to play a major role in transforming the way we work, live, and interact with machines..",
  },
  {
    question: "How does the platform detect AI usage?",
    answer: "Artificial Intelligence (AI) is a branch of computer science that focuses on creating machines and software capable of performing tasks that typically require human intelligence. These tasks include learning from data, making decisions, recognizing speech, and understanding language. AI is being used across various industries such as healthcare, finance, customer service, and marketing to improve efficiency and accuracy. As technology advances, AI continues to play a major role in transforming the way we work, live, and interact with machines.",
  },
  {
    question: "Is my data safe with GenuineHire?",
    answer: "Yes, we follow strict data security protocols to protect your information.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="w-full bg-gray-100 rounded-2xl border border-gray-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
