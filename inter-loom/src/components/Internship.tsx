import { useEffect, useState } from "react";

import axios from "axios";
import { Button } from "@/components/ui/button";

interface Internship {
  title: string;
  company: string;
  location: string;
}

interface Internship {
  title: string;   // Title of the internship
  company: string; // Company offering the internship
  location: string; // Location of the internship
}

export default function Internship() {
  const [internships, setInternships] = useState<Internship[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Internship[]>("http://127.0.0.1:5174/api/internships")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setInternships(response.data); 
        } else {
          setError("Invalid data format received from server");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching internships:", err);
        setError("Failed to fetch internships.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading internships...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
    <h1 className="text-lg font-bold p-1 ml-1">TurnLOOM</h1>
    <div className="flex gap-6 px-8 py-4">
      {/* Left Section - Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <h3 className="font-semibold text-lg mt-6">Suggested Courses</h3>
        <div className="mt-3 space-y-2">
           {Array(6).fill(0).map((_, i) => (
             <div key={i} className="border p-3 rounded text-sm cursor-pointer hover:bg-gray-100">
               <h4 className="font-semibold">Full Stack Course</h4>
               <p className="text-gray-500">12+ hrs Content • Mock tests for interviews</p>
             </div>
           ))}
         </div>
      </div>
    </div>
    </>
  );
}


  