// import { Button } from "@/components/ui/button";

// export default function Internship() {
//   const internships = Array(6).fill({
//     title: "Full Stack Developer",
//     location: "Bengaluru, India",
//     type: "Beginner friendly",
//     stipend: "10k",
//     duration: "3 Months",
//   });

//   return (
//     <div className="flex gap-6 px-8 py-4">
//       {/* Left Section - Internship Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
//         {internships.map((job, index) => (
//           <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
//             <div className="flex items-center gap-2">
//               <div className="h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
//                 🔵
//               </div>
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Upcoming</span>
//             </div>
//             <h3 className="font-semibold mt-2">{job.title}</h3>
//             <p className="text-gray-500">{job.location}</p>
//             <p className="text-gray-500">{job.type}</p>
//             <div className="mt-2 border p-2 rounded text-sm">
//               Paid Internship <strong>{job.stipend}</strong>
//             </div>
//             <div className="mt-1 flex items-center gap-2 text-sm">
//               ⏳ Duration <strong>{job.duration}</strong>
//             </div>
//             <Button className="mt-3 bg-green-600 text-white w-full hover:bg-green-700">Apply</Button>
//           </div>
//         ))}
//       </div>

//       {/* Right Section - Summary */}
//       <div className="w-1/4 bg-white border rounded-lg p-4 shadow-md hidden lg:block">
//         <h3 className="font-semibold text-lg">Summary</h3>
//         <ul className="mt-3 space-y-2 text-gray-700">
//           <li>⭐ Applied Internships <span className="float-right">120</span></li>
//           <li>⏳ In Review <span className="float-right">120</span></li>
//           <li>✔️ Accepted Internships <span className="float-right">120</span></li>
//           <li>❌ Rejected Internships <span className="float-right">120</span></li>
//         </ul>

//         <h3 className="font-semibold text-lg mt-6">Suggested Courses</h3>
//         <div className="mt-3 space-y-2">
//           {Array(6).fill(0).map((_, i) => (
//             <div key={i} className="border p-3 rounded text-sm cursor-pointer hover:bg-gray-100">
//               <h4 className="font-semibold">Full Stack Course</h4>
//               <p className="text-gray-500">12+ hrs Content • Mock tests for interviews</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface Internship {
  title: string;
  company: string;
  location: string;
}

export default function Internship() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Internship[]>("http://localhost:5174/internships")
      .then((response) => {
        setInternships(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch internships.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading internships...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex gap-6 px-8 py-4">
      {/* Left Section - Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {internships.length > 0 ? (
          internships.map((job, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  🔵
                </div>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">New</span>
              </div>
              <h3 className="font-semibold mt-2">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <Button className="mt-3 bg-green-600 text-white w-full hover:bg-green-700">Apply</Button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No internships found.</p>
        )}
      </div>

      {/* Right Section - Summary */}
      <div className="w-1/4 bg-white border rounded-lg p-4 shadow-md hidden lg:block">
        <h3 className="font-semibold text-lg">Summary</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>⭐ Applied Internships <span className="float-right">120</span></li>
          <li>⏳ In Review <span className="float-right">80</span></li>
          <li>✔ Accepted Internships <span className="float-right">30</span></li>
          <li>❌ Rejected Internships <span className="float-right">10</span></li>
        </ul>
      </div>
    </div>
  );
}


  