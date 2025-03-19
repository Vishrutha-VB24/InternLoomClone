import { Lock, Heart, Star, Zap } from "lucide-react";

export default function FeaturesAndTestimonials() {
  return (
    <section className="text-center py-16 px-6">
      {/* Unleash Your Potential Section */}
      <h2 className="text-3xl font-bold mb-12">
        Unleash Your Potential with InternLoom
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all transform hover:scale-105 hover:bg-green-100 hover:shadow-lg hover:shadow-green-300">
          <Zap className="text-orange-400 w-10 h-10 mb-2" />
          <h3 className="font-semibold text-lg">Tailored Internships</h3>
          <p className="text-gray-600 text-sm">
            Access diverse internship opportunities tailored to your skills and interests.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all transform hover:scale-105 hover:bg-green-100 hover:shadow-lg hover:shadow-green-300">
          <Star className="text-yellow-400 w-10 h-10 mb-2" />
          <h3 className="font-semibold text-lg">Enhanced Visibility</h3>
          <p className="text-gray-600 text-sm">
            Boost your profile's visibility with SEO optimization for increased exposure.
          </p>
        </div>

        {/* Feature 3 (Highlighted) */}
        <div
          className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 transition-all transform hover:scale-105 hover:bg-green-100 hover:shadow-lg hover:shadow-green-300"
          style={{ boxShadow: "0px 4px 10px rgba(0, 255, 0, 0.3)" }}
        >
          <Lock className="text-gray-700 w-10 h-10 mb-2" />
          <h3 className="font-semibold text-lg">Premium Insights</h3>
          <p className="text-gray-600 text-sm">
            Unlock exclusive insights and opportunities with our advanced subscription plans.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all transform hover:scale-105 hover:bg-green-100 hover:shadow-lg hover:shadow-green-300">
          <Heart className="text-red-500 w-10 h-10 mb-2" />
          <h3 className="font-semibold text-lg">Interactive Platform</h3>
          <p className="text-gray-600 text-sm">
            Engage with a user-friendly platform designed to streamline your internship search process.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="text-3xl font-bold mb-12">Our Users Love InternLoom</h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-50">
          <div className="flex text-orange-400 mb-2">
            {"⭐".repeat(5)}
          </div>
          <p className="text-gray-600 text-sm">
            "InternLoom helped me land my dream internship at a leading tech company! 
            The platform provides a user-friendly interface and vast internship options."
          </p>
          <h4 className="font-semibold mt-2">Induj Gupta</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-50">
          <div className="flex text-orange-400 mb-2">
            {"⭐".repeat(5)}
          </div>
          <p className="text-gray-600 text-sm">
            "As an employer, InternLoom provided us with a pool of talented candidates. 
            We quickly found the perfect match for our company culture and needs."
          </p>
          <h4 className="font-semibold mt-2">Arushie Josh</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-50">
          <div className="flex text-orange-400 mb-2">
            {"⭐".repeat(5)}
          </div>
          <p className="text-gray-600 text-sm">
            "InternLoom exceeded my expectations. The personalized recommendations 
            and SEO optimization really boosted my profile visibility."
          </p>
          <h4 className="font-semibold mt-2">Vanshraj</h4>
        </div>
      </div>
    </section>
  );
}
