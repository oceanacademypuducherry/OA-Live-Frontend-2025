
"use client";


import page from "../page";
import AboutOceanAcademy from "./aboutoceanacademy";
import { MeetOurTeam } from "./meetourteam";
import OurPurpose from "./ourpurpose";

// import Navbar from "./common/Navbar";
// import Footer from "@/common/Footer";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-[#00AEFF] text-center py-12 px-4 text-white">
        <h1 className="text-3xl font-bold">ABOUT US</h1>
        <p className="mt-2 text-[14px] sm:text-[16px] max-w-2xl mx-auto">
          We empower learners with industry-focused IT training, practical skills,
          and expert guidance to build successful technology careers.
        </p>
      </section>

      {/* Sections */}
      <AboutOceanAcademy />
      <OurPurpose />
      <MeetOurTeam />
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUsPage;



