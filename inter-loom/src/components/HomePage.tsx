import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="/interloom.webp" alt="" className="h-10 w-auto" />
          
        </div>
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Internships</a>
          <a href="#" className="hover:text-blue-600">Freelance</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Sign In</Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <Button className="bg-blue-600 hover:bg-blue-700 mb-4">Empowering Your Career Growth</Button>
          <h1 className="text-5xl font-bold">Weaving Your Future Together</h1>
          <p className="mt-4 text-lg">Discover Exciting Internship Opportunities and Unlock Your Potential</p>
          <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">Get Started Now</Button>
        </div>
      </header>
    </div>
  );
}
