export interface Job {
  id: number;
  category: string;
  title: string;
  focus: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    category: "Analytics and Management",
    title: "MERN – Full Stack Developer",
    focus: "Corporate Sustainability",
    experience: "2+ years",
    description:
      "We are seeking an experienced Lead Sustainability Educator to join our team.",
    responsibilities: [
      "Field Trip Coordination Plan",
      "Curriculum Development",
      "Content Development",
    ],
    requirements: [
      "Minimum 2 years in sustainability education or related field",
      "Strong presentation and communication skills",
      "Master's in Environmental Science or related field (preferred)",
    ],
    benefits: ["Competitive salary", "Free lunch", "Access to a mentor network"],
  },
  {
    id: 2,
    category: "Analytics and Management",
    title: "React Frontend Developer",
    focus: "UI/UX & Web Apps",
    experience: "1+ years",
    description:
      "We are looking for a frontend developer with solid knowledge of React and Tailwind CSS.",
    responsibilities: [
      "Build and maintain UI components",
      "Work closely with backend team",
      "Optimize performance",
    ],
    requirements: [
      "1+ years experience in React.js",
      "Good understanding of Tailwind CSS",
      "Problem-solving mindset",
    ],
    benefits: [
      "Growth opportunities",
      "Flexible working hours",
      "Collaborative team culture",
    ],
  },
  {
    id: 3,
    category: "MEAN Stack Development",
    title: "Fullstack Developer",
    focus: "Web Apps",
    experience: "5+ years",
    description:
      "We are looking for a frontend developer with solid knowledge of React and Tailwind CSS.",
    responsibilities: [
      "Build and maintain UI components",
      "Work closely with backend team",
      "Optimize performance",
    ],
    requirements: [
      "1+ years experience in React.js",
      "Good understanding of Tailwind CSS",
      "Problem-solving mindset",
    ],
    benefits: [
      "Growth opportunities",
      "Flexible working hours",
      "Collaborative team culture",
    ],
  },
];
