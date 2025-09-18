// // Define the FAQ item structure
// export interface FAQItem {
//   q: string;
//   a: string;
// }

// // Define a category with multiple FAQs
// export interface FAQCategory {
//   category: string;
//   faqs: FAQItem[];
// }

// // Export your FAQ data
// export const faqData: FAQCategory[] = [
//   {
//     category: "Courses & Learning",
//     faqs: [
//       {
//         q: "What courses does Ocean Academy offer in Puducherry?",
//         a: "Ocean Academy offers IT training in Full Stack Development (MERN, MEAN, Python, Java), Data Science, Data Analytics, Flutter Mobile App Development, and Selenium Testing, both online and offline in Puducherry.",
//       },
//       {
//         q: "Do I need prior coding knowledge to join?",
//         a: "No, beginners are welcome. Our courses start from the basics and gradually cover advanced concepts, making them suitable for students, graduates, and working professionals.",
//       },
//       {
//         q: "Which course is best for beginners?",
//         a: "If you are new to programming, Python Full Stack Development or Java Full Stack Development is recommended, as they cover both front-end and back-end fundamentals.",
//       },
//       {
//         q: "What is the difference between MERN and MEAN Stack?",
//         a: "MERN Stack uses MongoDB, Express.js, React, and Node.js, while MEAN Stack uses MongoDB, Express.js, Angular, and Node.js. Both are popular full stack development frameworks with high job demand.",
//       },
//       {
//         q: "Are your courses suitable for working professionals?",
//         a: "Yes, Ocean Academy offers flexible online batches and weekend classes designed for working professionals who want to upskill while continuing their jobs.",
//       },
//     ],
//   },
//   {
//     category: "Placement & Career Support",
//     faqs: [
//       {
//         q: "Do you provide placement assistance during or after course completion?",
//         a: "Yes, Ocean Academy provides 100% placement support with resume building, mock interviews, career counseling, and referrals to IT companies and MNCs in Puducherry, Chennai, Bangalore, and other IT hubs.",
//       },
//       {
//         q: "How do Ocean Academy students get placed?",
//         a: "Students go through resume preparation, coding tests, and mock interviews. We also refer them to our hiring partners for job opportunities. Many of our alumni are placed in Infosys, TCS, HCL, Cognizant, Deloitte, and Wipro.",
//       },
//       {
//         q: "What is the average salary after completing a course?",
//         a: "Freshers trained at Ocean Academy usually get placed with an average starting salary between ₹3.5–6 LPA, depending on skills, performance, and company.",
//       },
//       {
//         q: "Which IT course has the highest job demand in Puducherry and Tamil Nadu?",
//         a: "Currently, Full Stack Development and Data Science are the most in-demand courses, with strong placement opportunities in Chennai, Bangalore, and IT hubs across India.",
//       },
//     ],
//   },
//   {
//     category: "Online & Offline Classes",
//     faqs: [
//       {
//         q: "Can I learn online from anywhere in India?",
//         a: "Yes, Ocean Academy provides live interactive online classes that can be accessed from anywhere in India and abroad.",
//       },
//       {
//         q: "Do you offer international student support?",
//         a: "Yes, our online programs are open to international students, and we also provide career guidance for global job opportunities.",
//       },
//       {
//         q: "How are online classes conducted?",
//         a: "Our online sessions are live, interactive, and project-based. Students also receive recordings and materials for revision.",
//       },
//       {
//         q: "Do you provide corporate training for IT companies in Puducherry and Tamil Nadu?",
//         a: "Yes, Ocean Academy offers customized corporate training workshops for companies and colleges in Puducherry, Chennai, and other Tamil Nadu cities.",
//       },
//     ],
//   },
//   {
//     category: "Location & Geo-Specific",
//     faqs: [
//       {
//         q: "Is Ocean Academy the best IT training institute in Puducherry?",
//         a: "Yes, Ocean Academy is one of the leading IT training institutes in Puducherry, known for hands-on training, real-world projects, and 100% placement assistance.",
//       },
//       {
//         q: "How can students in Puducherry benefit compared to Chennai or Bangalore institutes?",
//         a: "Students in Puducherry save on travel and accommodation while receiving the same quality training, projects, and placement opportunities as metro city institutes.",
//       },
//       {
//         q: "Can college students in Puducherry join while studying?",
//         a: "Yes, many UG and PG students in Puducherry join part-time batches to upskill in Python, Full Stack, and Data Science while continuing their studies.",
//       },
//     ],
//   },
//   {
//     category: "Fees & Certification",
//     faqs: [
//       {
//         q: "Do you provide certifications after course completion?",
//         a: "Yes, all our courses come with industry-recognized certificates that help students stand out during job applications and interviews.",
//       },
//       {
//         q: "How long does each course take to complete?",
//         a: "Most courses take 3–6 months to complete, depending on the track. We also offer fast-track batches for working professionals.",
//       },
//       {
//         q: "Can I pay the course fee in installments?",
//         a: "Yes, we provide easy installment options to make learning more affordable.",
//       },
//       {
//         q: "Are your certifications valid for jobs in India and abroad?",
//         a: "Yes, Ocean Academy certifications are recognized by IT companies across India (including Chennai, Bangalore, Hyderabad) and in international markets, enhancing global career opportunities.",
//       },
//     ],
//   },
// ];
// Define the FAQ item structure
export interface FAQItem {
  q: string;
  a: string;
}

// Define a category with multiple FAQs
export interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

// Export your FAQ data
export const faqData: FAQCategory[] = [
  {
    category: "Courses & Learning",
    faqs: [
      {
        q: "What courses does Ocean Academy offer in Puducherry?",
        a: "Ocean Academy offers IT training in Full Stack Development (MERN, MEAN, Python, Java), Data Science, Data Analytics, Flutter Mobile App Development, and Selenium Testing, both online and offline in Puducherry.",
      },
      {
        q: "Do I need prior coding knowledge to join?",
        a: "No, beginners are welcome. Our courses start from the basics and gradually cover advanced concepts, making them suitable for students, graduates, and working professionals.",
      },
      {
        q: "Which course is best for beginners?",
        a: "If you are new to programming, Python Full Stack Development or Java Full Stack Development is recommended, as they cover both front-end and back-end fundamentals.",
      },
      {
        q: "What is the difference between MERN and MEAN Stack?",
        a: "MERN Stack uses MongoDB, Express.js, React, and Node.js, while MEAN Stack uses MongoDB, Express.js, Angular, and Node.js. Both are popular full stack development frameworks with high job demand.",
      },
      {
        q: "Are your courses suitable for working professionals?",
        a: "Yes, Ocean Academy offers flexible online batches and weekend classes designed for working professionals who want to upskill while continuing their jobs.",
      },
    ],
  },
  {
    category: "Placement & Career Support",
    faqs: [
      {
        q: "Do you provide placement assistance during or after course completion?",
        a: "Yes, Ocean Academy provides 100% placement support with resume building, mock interviews, career counseling, and referrals to IT companies and MNCs in Puducherry, Chennai, Bangalore, and other IT hubs.",
      },
      {
        q: "How do Ocean Academy students get placed?",
        a: "Students go through resume preparation, coding tests, and mock interviews. We also refer them to our hiring partners for job opportunities. Many of our alumni are placed in Infosys, TCS, HCL, Cognizant, Deloitte, and Wipro.",
      },
      {
        q: "What is the average salary after completing a course?",
        a: "Freshers trained at Ocean Academy usually get placed with an average starting salary between ₹3.5–6 LPA, depending on skills, performance, and company.",
      },
      {
        q: "Which IT course has the highest job demand in Puducherry and Tamil Nadu?",
        a: "Currently, Full Stack Development and Data Science are the most in-demand courses, with strong placement opportunities in Chennai, Bangalore, and IT hubs across India.",
      },
    ],
  },
  {
    category: "Online & Offline Classes",
    faqs: [
      {
        q: "Can I learn online from anywhere in India?",
        a: "Yes, Ocean Academy provides live interactive online classes that can be accessed from anywhere in India and abroad.",
      },
      {
        q: "Do you offer international student support?",
        a: "Yes, our online programs are open to international students, and we also provide career guidance for global job opportunities.",
      },
      {
        q: "How are online classes conducted?",
        a: "Our online sessions are live, interactive, and project-based. Students also receive recordings and materials for revision.",
      },
      {
        q: "Do you provide corporate training for IT companies in Puducherry and Tamil Nadu?",
        a: "Yes, Ocean Academy offers customized corporate training workshops for companies and colleges in Puducherry, Chennai, and other Tamil Nadu cities.",
      },
    ],
  },
  {
    category: "Location & Geo-Specific",
    faqs: [
      {
        q: "Is Ocean Academy the best IT training institute in Puducherry?",
        a: "Yes, Ocean Academy is one of the leading IT training institutes in Puducherry, known for hands-on training, real-world projects, and 100% placement assistance.",
      },
      {
        q: "How can students in Puducherry benefit compared to Chennai or Bangalore institutes?",
        a: "Students in Puducherry save on travel and accommodation while receiving the same quality training, projects, and placement opportunities as metro city institutes.",
      },
      {
        q: "Can college students in Puducherry join while studying?",
        a: "Yes, many UG and PG students in Puducherry join part-time batches to upskill in Python, Full Stack, and Data Science while continuing their studies.",
      },
    ],
  },
  {
    category: "Fees & Certification",
    faqs: [
      {
        q: "Do you provide certifications after course completion?",
        a: "Yes, all our courses come with industry-recognized certificates that help students stand out during job applications and interviews.",
      },
      {
        q: "How long does each course take to complete?",
        a: "Most courses take 3–6 months to complete, depending on the track. We also offer fast-track batches for working professionals.",
      },
      {
        q: "Can I pay the course fee in installments?",
        a: "Yes, we provide easy installment options to make learning more affordable.",
      },
      {
        q: "Are your certifications valid for jobs in India and abroad?",
        a: "Yes, Ocean Academy certifications are recognized by IT companies across India (including Chennai, Bangalore, Hyderabad) and in international markets, enhancing global career opportunities.",
      },
    ],
  },
];

// ✅ Generate FAQ JSON-LD Schema for SEO
export const generateFAQSchema = () => {
  return {
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
};
