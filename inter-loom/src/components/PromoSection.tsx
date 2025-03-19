import { Link } from "@tanstack/react-router";

export default function PromoSection() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src="/image.webp" 
            alt="People working on a laptop"
            className="rounded-xl shadow-md w-3/4 md:w-2/3 max-w-[300px] object-cover"
          />
        </div>

        {/* Right Section: Text & CTA */}
        <div className="w-full md:w-1/2">
          <h4 className="text-gray-500 text-sm uppercase font-medium">
            Unlock Your Potential Today
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Empower Your Future with <span className="text-black">InternLoom</span>
          </h1>
          <p className="text-gray-600 mt-4">
            InternLoom provides a seamless platform connecting students with top-notch 
            internships and companies with exceptional talent. Discover endless 
            opportunities to kickstart your career or find the perfect fit for your business.
          </p>
          
          {/* Call to Action Button */}
          <div className="mt-6">
            <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Get Started Now
            </Link>
          </div>

          {/* Sign-in link */}
          <p className="mt-4 text-gray-600">
            Already a Member?{" "}
            <Link to="/signin" className="text-indigo-600 font-medium hover:underline">
              Sign In Here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
