"use client";

import Image from "next/image";
import { team } from "../data/teamdata";


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
