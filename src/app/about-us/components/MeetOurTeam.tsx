"use client";

import { Key, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URL } from "@/config/api";


interface Mentor {
  _id: Key | null | undefined;
  designation: ReactNode;
  mentorName: string;
  profilePicture: any;
 
 
}

export const MeetOurTeam = () => {
  const [team, setTeam] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch mentors from API
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await BASE_URL.get("mentor/"); 
      
        setTeam(response.data);
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  

  return (
    <section className="px-4 sm:px-6 xl:py-10 py-6 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[600px] mx-auto">
      <h2 className="text-center text-2xl font-semibold text-primary mb-6">
        Meet Our Team
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading mentors...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-[1500px] mx-auto">
  {team.map((member) => (
    <div key={member._id} className="flex flex-col items-center">
  {/* Card container */}
  <div className="w-[230px] h-[300px] mx-auto mb-3 rounded-lg overflow-hidden flex flex-col">
    
   
   <div className="w-full h-[75%] overflow-hidden flex items-center justify-center border-4 border-[#005892] rounded-lg">
  {member.profilePicture ? (
    <Image
      src={member.profilePicture}
      alt={member.mentorName}
      width={230}
      height={172}
      className="w-full h-full object-cover object-top" 
    />
  ) : (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
      No Image
    </div>
  )}
</div>


    {/* Details */}
    <div className="w-full h-[25%] text-center flex flex-col justify-center items-center p-2.5">
      <p className="text-black text-lg font-semibold">{member.mentorName}</p>
      <p className="text-aliceblue text-sm">{member.designation}</p>
    </div>
  </div>
</div>

  ))}
</div>

      )}
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
