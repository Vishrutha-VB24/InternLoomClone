import { useState } from "react";
import { useNavigate } from "@tanstack/react-router"; // ✅ Import here
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { account } from "@/conf/conf"; // Import Appwrite Authentication

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ Define navigate inside the component

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      console.log("Navigating to /internship...");
      navigate({ to: "/internship" }); // ✅ Correct way to navigate
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-image.jpg')" }}>
      <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-300">Sign in to continue your journey.</p>
        </div>

        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Login</h2>
          <Card className="border border-gray-600 bg-black/60">
            <CardContent className="p-4 space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleLogin}>
                <label className="block text-sm text-gray-300">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 bg-gray-900 text-white" />

                <label className="block text-sm text-gray-300">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 bg-gray-900 text-white" />
                
                <Button type="submit" className="bg-amber-400 w-full mt-4">
                  Login
                </Button>
              </form>

              <p className="text-sm text-gray-400 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-yellow-400 hover:underline">Sign Up</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
