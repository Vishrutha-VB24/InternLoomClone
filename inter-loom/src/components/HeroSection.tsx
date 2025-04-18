import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <header className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <Button className="bg-blue-600 hover:bg-blue-700 mb-4">Empowering Your Career Growth</Button>
          <h1 className="text-5xl font-bold">Weaving Your Future Together</h1>
          <p className="mt-4 text-lg">Discover Exciting Internship Opportunities and Unlock Your Potential</p>
          <Link to="/internship">
            <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">Get Started Now</Button>
          </Link>
          
        </div>
      </header>
    );
  }
  