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
    category: "Analytics and Management Careers",
    title: "MERN Full Stack Developer Job – Corporate Sustainability Projects",
    focus: "Corporate Sustainability & Green Tech Applications",
    experience: "2+ years of professional development experience",
    description:
      "Join our growing team as a MERN Full Stack Developer specializing in corporate sustainability solutions. In this role, you will design, develop, and optimize web applications that support eco-friendly initiatives and data-driven decision-making. Ideal for candidates passionate about technology and environmental impact.",
    responsibilities: [
      "Coordinate sustainability-related field trips and data-driven reporting tools",
      "Design and implement curriculum modules for corporate training programs",
      "Develop engaging digital content to support sustainability education",
    ],
    requirements: [
      "Minimum of 2 years of professional experience in sustainability education or software development",
      "Excellent communication, presentation, and technical problem-solving skills",
      "Master's degree in Environmental Science, Computer Science, or a related field (preferred)",
    ],
    benefits: [
      "Competitive salary with growth opportunities",
      "Free lunch and healthy workplace environment",
      "Mentorship and networking with industry professionals",
    ],
  },
  {
    id: 2,
    category: "Frontend Development Jobs",
    title: "React Frontend Developer Career – UI/UX and Modern Web Applications",
    focus: "UI/UX Development & Responsive Web Apps",
    experience: "1+ years of React development experience",
    description:
      "We are hiring a talented React Frontend Developer to create user-friendly, high-performance web applications. You will work on modern UI/UX projects, collaborating with backend teams, and using Tailwind CSS to build scalable and responsive interfaces. Perfect for developers who enjoy crafting intuitive digital experiences.",
    responsibilities: [
      "Develop, test, and maintain responsive UI components using React.js",
      "Collaborate with backend engineers to deliver seamless web applications",
      "Continuously optimize performance for speed, accessibility, and usability",
    ],
    requirements: [
      "1+ years of hands-on experience in React.js development",
      "Strong understanding of Tailwind CSS and modern frontend practices",
      "Creative problem-solving skills and attention to detail",
    ],
    benefits: [
      "Exciting career growth opportunities in web development",
      "Flexible working hours and hybrid work options",
      "Collaborative and innovative team culture",
    ],
  },
  {
    id: 3,
    category: "MEAN Stack Development Careers",
    title: "Fullstack Developer Job – MEAN Stack Web Applications",
    focus: "Web Applications Development & Cloud-Based Solutions",
    experience: "5+ years of professional full-stack experience",
    description:
      "We are seeking an experienced Fullstack Developer with strong knowledge of the MEAN stack. In this role, you will build scalable web applications, integrate APIs, and optimize systems for performance. If you have expertise in Angular, Node.js, MongoDB, and Express.js, this is an excellent opportunity to advance your career.",
    responsibilities: [
      "Develop and maintain scalable web applications using the MEAN stack",
      "Work collaboratively with design and backend teams to deliver robust features",
      "Ensure applications are optimized for performance, security, and scalability",
    ],
    requirements: [
      "5+ years of professional experience in full-stack web development",
      "Proficiency in Angular, Node.js, MongoDB, and Express.js",
      "Strong problem-solving mindset with a passion for clean code",
    ],
    benefits: [
      "Attractive salary package with performance bonuses",
      "Flexible schedule and remote work opportunities",
      "Supportive work culture and career development programs",
    ],
  },
];
