import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const Register = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold">Your Future Starts Here</h1>
          <p className="mt-2 text-gray-300">Redefining Internships, One Opportunity at a Time.</p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <Card className="border border-gray-600 bg-black/60">
            <CardContent className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-300">Full Name</label>
                <Input type="text" placeholder="Enter your name" className="mt-1 bg-gray-900 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <Input type="email" placeholder="Enter your email" className="mt-1 bg-gray-900 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Password</label>
                <Input type="password" placeholder="Create a password" className="mt-1 bg-gray-900 text-white" />
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Sign Up</Button>
              <p className="text-sm text-gray-400 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-yellow-400 hover:underline">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
