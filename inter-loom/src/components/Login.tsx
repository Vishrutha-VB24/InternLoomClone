import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import authService from "@/appwrite/auth";
import { account } from "@/conf/conf";
import { ID } from './lib/appwrite';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        // Clear any existing sessions before logging in
        await authService.logout();
        
        // Attempt to login
        const user = await authService.login({ email, password });
        console.log("Login Successful:", user);

        // Redirect to the internship page after successful login
        navigate({ to: "/internship", replace: true });
    } catch (err: any) {
        console.error("Error during login:", err.message);
        setError("Invalid email or password.");
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
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full p-2 bg-gray-900 text-white"
                />
                <label className="block text-sm text-gray-300">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full p-2 bg-gray-900 text-white"
                />
                <Button type="submit" className="bg-amber-400 w-full mt-4 text-black">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
