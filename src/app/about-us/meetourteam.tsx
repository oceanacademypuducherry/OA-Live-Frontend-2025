// src/components/MeetOurTeam.tsx
"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const team: TeamMember[] = [
  { name: "Karthick Balaraman", role: "Founder & CEO", img: "https://i.ibb.co/D1D241r/Karthik.jpg" },
  { name: "Brindha Karthick", role: "Technical Lead", img: "https://i.ibb.co/tKBMPKc/Brindha.jpg" },
  { name: "Vijay Kumar", role: "Alumni", img: "https://i.ibb.co/g4V7Tmv/Vijay.jpg" },
  { name: "Mohamed Ijass", role: "Developer / Sr.Trainer", img: "https://i.ibb.co/KxQ6rz8/Ijass.jpg" },
  { name: "Anusuya Balakrishnan", role: "Developer / Trainer", img: "https://i.ibb.co/MnCVz85/anusuya.png" },
  { name: "Vidhya", role: "Developer / Trainer", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fvidhya.jpeg?alt=media&token=1760a053-94fa-4415-8800-c1ddefcf0e81" },
  { name: "Maheshwaran", role: "Developer / Trainer", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fmaheshwaran.jpg?alt=media&token=8a5919d1-2964-4b5f-ab35-1d89da23100c" },
  { name: "Jayashree", role: "Admin", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fjayashree.jpg?alt=media&token=16ccaf6b-23ac-4df4-bd5e-8e5a3f4826c1" },
  { name: "Sangeetha", role: "Developer / Trainer", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fsangeetha.s.jpg?alt=media&token=9f6d316e-d9f2-41a2-a79c-724126a7e480" },
  { name: "Bhadresh", role: "Developer / Trainer", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fbhadresh.jpg?alt=media&token=97c0d015-1780-43d6-8d3a-dc86755d100d" },
  { name: "Rajeswari", role: "Developer / Trainer", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Frajeswari.jpeg?alt=media&token=4440cb8e-8e61-4a54-a99e-cba9b424d21c" },
  { name: "Alan Raj", role: "Data Analyst", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Falan.jpg?alt=media&token=3652f031-4f78-4b61-9ee8-d02a59cad5fc" },
  { name: "Varadharaja Perumal", role: "Data Analyst", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/profiles%2FVaradharaja_Perumal.jpg?alt=media&token=da0957f3-4b86-4d85-a9fc-cd16eb5ee80d" },
  { name: "Aashik Mohammed", role: "Intern", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Faashik.jpg?alt=media&token=f3a9f253-2566-4473-9634-72eda2478b60" },
  { name: "Sanjay kumar", role: "Intern", img: "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/trainerImage%2Fsanjay_kumar.jpg?alt=media&token=28e1596a-2c6e-4127-b085-6ec507b617c9" },
];

export const MeetOurTeam = () => {
  return (
    <section className="py-0 sm:py-10 px-6">
      <h2 className="text-center text-2xl font-semibold text-[#00AEFF] mb-6">
        Meet Our Team
      </h2>
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 sm:gap-0 sm:justify-center
          md:grid-cols-3 md:gap-6
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6
          max-w-[1500px] mx-auto
        "
      >
        {team.map((member, i) => (
          <div key={i} className="text-center">
            <div className="w-[230px] h-[230px] mx-auto relative mb-3">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-fit rounded-lg border-[4px] border-[#005892] shadow-md"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
