import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { account, ID } from "@/conf/conf";
import dbService from "@/appwrite/db";  // Import DBService

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userId = ID.unique();
      // Create Appwrite user
      const user = await account.create(userId, email, password, name);
      console.log("User Registered:", user);

      // Save user data in the Appwrite database
      await dbService.createDocument("usersCollectionId", {
        userId,
        name,
        email,
        userType,  // User type is saved in the database
      });

      alert("Registration successful! You can now log in.");
      window.location.href = "/login";
    } catch (err) {
      console.error("Registration failed:", err);
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

                <label className="block text-sm text-gray-300">User Type</label>
                <select value={userType} onChange={(e) => setUserType(e.target.value)} className="mt-1 bg-gray-900 text-white w-full p-2 rounded-lg" required>
                  <option value="User">User</option>
                  <option value="Startup">Startup</option>
                </select>

                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-4">Sign Up</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
