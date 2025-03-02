import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div>
            <nav className="max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center gap-2">
                    <img src="/interloom.webp" alt="Interloom" className="h-10 w-auto" />

                </div>
                <div className="hidden md:flex gap-6 text-gray-700">
                    <a href="/internship" className="hover:text-blue-600">Internships</a>
                    <a href="#" className="hover:text-blue-600">Freelance</a>
                    <a href="#" className="hover:text-blue-600">Pricing</a>
                    <a href="#" className="hover:text-blue-600">Contact Us</a>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline">Sign In</Button>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Sign Up</Button>
                </div>
            </nav>
        </div>
    )
}