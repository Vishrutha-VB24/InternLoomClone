import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { account,ID } from "@/conf/conf"; // Import Appwrite

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Step 1: Register User in Appwrite Authentication
      const user = await account.create(ID.unique(), email, password, name);

      alert("Registration successful! You can now log in.");
      window.location.href = "/login"; // Redirect to login page
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-image.jpg')" }}>
      <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold">Your Future Starts Here</h1>
          <p className="mt-2 text-gray-300">Redefining Internships, One Opportunity at a Time.</p>
        </div>

        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <Card className="border border-gray-600 bg-black/60">
            <CardContent className="p-4 space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleRegister}>
                <label className="block text-sm text-gray-300">Full Name</label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 bg-gray-900 text-white" />

                <label className="block text-sm text-gray-300">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 bg-gray-900 text-white" />

                <label className="block text-sm text-gray-300">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 bg-gray-900 text-white" />

                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-4">Sign Up</Button>
              </form>

              <p className="text-sm text-gray-400 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-yellow-400 hover:underline">Login</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
