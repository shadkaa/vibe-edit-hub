import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "Do you work with local businesses in Kozhikode?",
    answer: "Yes. I specialize in social media management for businesses in Kozhikode and across Kerala.",
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer: "Most clients see improved engagement and reach within 30 to 60 days.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer: "Instagram, Facebook, YouTube Shorts, TikTok, and LinkedIn.",
  },
  {
    question: "How can I contact you?",
    answer: "You can directly message on WhatsApp using the WhatsApp button on the website.",
  },
];

const FAQSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="faq" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-foreground/3 select-none whitespace-nowrap">
        FAQ
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="brutal-button bg-accent text-accent-foreground text-sm inline-block mb-6">
            ✦ FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            FREQUENTLY ASKED
            <span className="block bg-primary inline-block px-4 mt-2 border-4 border-foreground shadow-brutal">
              QUESTIONS
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="brutal-card p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3">{faq.question}</h3>
              <p className="text-lg text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
