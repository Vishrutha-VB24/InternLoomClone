import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
    return (
        <div>
            <nav className="max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center gap-2">
                    <img src="/interloom.webp" alt="Interloom" className="h-10 w-auto" />
                </div>
                <div className="hidden md:flex gap-6 text-gray-700">
                    <Link to="/internship" className="hover:text-blue-600">Internships</Link>
                    <Link to="/internship" className="hover:text-blue-600">Freelance</Link>
                    <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
                </div>
                <div className="flex gap-4">
                    <Link to="/signin">
                        <Button variant="outline">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Sign Up</Button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
