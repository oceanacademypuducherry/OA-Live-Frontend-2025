// "use client"; // needed since you use useState + react-icons

// import { useState } from "react";

// // import { Footer } from "@/common/Footer";
// import { faqData } from "@/app/faq/faqdata";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// export default function FAQPage() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [openIndex, setOpenIndex] = useState<string | null>(null);

//   const toggleFAQ = (id: string) => {
//     setOpenIndex(openIndex === id ? null : id);
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Header */}
//       <section className="bg-gradient-to-r from-[#2E81A9] to-[#00AEFF] text-center py-10 px-4">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
//           Frequently Asked <span className="text-[#FDCE5C]">Questions</span>
//         </h2>

//         <p className="mt-2 text-white text-sm sm:text-base max-w-2xl mx-auto">
//           Find quick answers to common questions about Ocean Academy courses,
//           pricing, certificates, and more. Can’t find what you’re looking for?
//           Contact our support team.
//         </p>
//       </section>

//       {/* Category Tabs */}
//       <section className="max-w-[95%] mx-auto mt-8 overflow-hidden">
//         <div className="flex flex-col gap-3">
//           {/* Desktop */}
//           <div className="hidden sm:flex justify-center gap-3 flex-wrap">
//             {faqData.map((cat, index) => (
//               <button
//                 key={`desktop-${index}`}
//                 onClick={() => {
//                   setActiveCategory(index);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-4 py-2 rounded border transition-all text-sm sm:text-base
//                   ${
//                     activeCategory === index
//                       ? "bg-sky-100 text-sky-500 border-sky-500"
//                       : "bg-white text-sky-500 border-sky-500 hover:bg-sky-100"
//                   }`}
//               >
//                 {cat.category}
//               </button>
//             ))}
//           </div>

//           {/* Mobile */}
//           <div className="flex flex-col gap-0 sm:hidden">
//             <div className="flex gap-2 overflow-x-auto scrollbar-hide">
//               {faqData.map((cat, index) => (
//                 <button
//                   key={`mobile-${index}`}
//                   onClick={() => {
//                     setActiveCategory(index);
//                     setOpenIndex(null);
//                   }}
//                   className={`flex-shrink-0 px-4 py-2 rounded border text-sm
//                     ${
//                       activeCategory === index
//                         ? "bg-sky-100 text-sky-500 border-sky-500"
//                         : "bg-white text-sky-500 border-sky-500 hover:bg-sky-100"
//                     }`}
//                 >
//                   {cat.category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Questions */}
//       <section className="max-w-[95%] sm:max-w-[85%] md:max-w-[77%] mx-auto py-10">
//         <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mb-4 text-center">
//           {faqData[activeCategory].category}
//         </h3>
//         <div className="space-y-4">
//           {faqData[activeCategory].faqs.map((faq, faqIndex) => {
//             const id = `${activeCategory}-${faqIndex}`;
//             const isOpen = openIndex === id;
//             return (
//               <div
//                 key={id}
//                 className="border rounded-lg shadow-sm bg-white transition-all"
//               >
//                 {/* Question */}
//                 <button
//                   className="w-full flex justify-between items-center text-left px-4 py-8 font-medium text-gray-800 transition text-sm sm:text-base"
//                   onClick={() => toggleFAQ(id)}
//                 >
//                   <span>{faq.q}</span>
//                   <span className="text-xl text-gray-500">
//                     {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                   </span>
//                 </button>

//                 {/* Answer */}
//                 {isOpen && (
//                   <div className="m-4 mb-9 p-8  rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base leading-relaxed">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { faqData } from "@/app/faq/faqdata";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

// ✅ SEO Metadata
export const page = {
  title: "FAQ - Ocean Academy | Courses, Pricing, Certificates & More",
  description:
    "Find quick answers to common questions about Ocean Academy courses, pricing, certificates, and more. Contact our support team for further assistance.",
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // ✅ FAQ Schema (structured data)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-[#2E81A9] to-[#00AEFF] text-center py-10 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Frequently Asked <span className="text-[#FDCE5C]">Questions</span>
          </h1>
          <p className="mt-2 text-white text-sm sm:text-base max-w-2xl mx-auto">
            Find quick answers to common questions about Ocean Academy courses,
            pricing, certificates, and more. Can’t find what you’re looking for?
            Contact our support team.
          </p>
        </section>

        {/* Category Tabs */}
        <section className="max-w-[95%] mx-auto mt-8 overflow-hidden">
          <nav aria-label="FAQ categories">
            <div className="flex flex-col gap-3">
              {/* Desktop */}
              <div className="hidden sm:flex justify-center gap-3 flex-wrap">
                {faqData.map((cat, index) => (
                  <button
                    key={`desktop-${index}`}
                    onClick={() => {
                      setActiveCategory(index);
                      setOpenIndex(null);
                    }}
                    className={`px-4 py-2 rounded border transition-all text-sm sm:text-base
                      ${
                        activeCategory === index
                          ? "bg-sky-100 text-sky-500 border-sky-500"
                          : "bg-white text-sky-500 border-sky-500 hover:bg-sky-100"
                      }`}
                    aria-current={activeCategory === index ? "page" : undefined}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-0 sm:hidden">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {faqData.map((cat, index) => (
                    <button
                      key={`mobile-${index}`}
                      onClick={() => {
                        setActiveCategory(index);
                        setOpenIndex(null);
                      }}
                      className={`flex-shrink-0 px-4 py-2 rounded border text-sm
                        ${
                          activeCategory === index
                            ? "bg-sky-100 text-sky-500 border-sky-500"
                            : "bg-white text-sky-500 border-sky-500 hover:bg-sky-100"
                        }`}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </section>

        {/* FAQ Questions */}
        <section
          className="max-w-[95%] sm:max-w-[85%] md:max-w-[77%] mx-auto py-10"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-lg sm:text-xl font-semibold text-sky-500 mb-4 text-center"
          >
            {faqData[activeCategory].category}
          </h2>

          <dl className="space-y-4">
            {faqData[activeCategory].faqs.map((faq, faqIndex) => {
              const id = `${activeCategory}-${faqIndex}`;
              const isOpen = openIndex === id;
              return (
                <article
                  key={id}
                  className="border rounded-lg shadow-sm bg-white transition-all"
                >
                  {/* Question */}
                  <dt>
                    <button
                      className="w-full flex justify-between items-center text-left px-4 py-6 font-medium text-gray-800 transition text-sm sm:text-base"
                      onClick={() => toggleFAQ(id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${id}`}
                    >
                      <span>{faq.q}</span>
                      <span className="text-xl text-gray-500">
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </button>
                  </dt>

                  {/* Answer */}
                  {isOpen && (
                    <dd
                      id={`faq-answer-${id}`}
                      className="m-4 mb-9 p-6 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                      {faq.a}
                    </dd>
                  )}
                </article>
              );
            })}
          </dl>
        </section>
      </main>

      <Footer />

      {/* ✅ JSON-LD Schema for Google SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

