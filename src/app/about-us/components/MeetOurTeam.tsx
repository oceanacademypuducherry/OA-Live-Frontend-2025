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
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import axios from "axios"; // Import axios for HTTP requests
// // Update the path below to the actual location of your Axios instance

// // import { OALoaders } from "../Loaders/OALoader/OALoader";

// interface Mentor {
//   mentorName: string;
//   designation: string;
//   profilePicture: string;
// }

// export function MeetOurTeam() {
//   const [allMentors, setAllMentors] = useState<Mentor[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:2001/oceanlivereact/asia-south1/oa_live_api/mentor/") // ✅ Your backend endpoint
//       .then((res) => {
//         setAllMentors(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching mentors:", error.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="mentors px-4 sm:px-6 lg:px-12 py-8">
//       <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-primary via-primary to-black bg-clip-text text-transparent">
//         Meet Our Mentors
//       </h2>

//       {/* {loading ? (
//         <section className="flex justify-center">
//           <OALoaders />
//         </section>
//       ) : ( */}
//         <div
//           className="
//             grid 
//             grid-cols-1 
//             sm:grid-cols-2 
//             md:grid-cols-3 
//             lg:grid-cols-4 
//             gap-8
//           "
//         >
//           {allMentors.map((mentor, index) => (
//             <div
//               key={index}
//               className="card bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow"
//             >
//               {/* Mentor Image */}
//               <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md mb-4">
//                 <Image
//                   src={mentor.profilePicture || "/default-avatar.png"}
//                   alt={mentor.mentorName}
//                   fill
//                   className="object-cover"
//                   sizes="128px"
//                 />
//               </div>

//               {/* Mentor Details */}
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {mentor.mentorName}
//               </h3>
//               <p className="text-sm text-gray-500">{mentor.designation}</p>
//             </div>
//           ))}
//         </div>
//       {/* )} */}
//     </div>
//   );
// }
