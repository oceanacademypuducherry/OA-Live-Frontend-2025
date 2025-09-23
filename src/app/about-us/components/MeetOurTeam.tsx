"use client";

import Image from "next/image";
import { team } from "../data/teamdata";

export const MeetOurTeam = () => {
  return (
    <section className="px-4 sm:px-6 xl:py-10 py-6 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[600px] mx-auto">
      <h2 className="text-center text-2xl font-semibold text-primary mb-6">
        Meet Our Team
      </h2>
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          2xl:grid-cols-5
          gap-6
          max-w-[1500px] mx-auto
        "
      >
        {team.map((member, i) => (
          <div key={i} className="text-center">
           <div className="w-[230px] h-[230px] object-contain mx-auto mb-3 relative border-[4px] border-[#005892] rounded-lg overflow-hidden shadow-md flex items-center justify-center">
  <Image
    src={member.img}
    alt={member.name}
    fill
    w-full

    h-full
  />
</div>


            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-secondary">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
