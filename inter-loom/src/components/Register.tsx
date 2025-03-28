import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { Client, Account, ID } from "appwrite";
import { conf } from "@/conf/conf";


const client = new Client()
  .setEndpoint(conf.appWriteUrl)
  .setProject(conf.appWriteProjectID);

const account = new Account(client);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("user"); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const user = await account.create(ID.unique(), email, password, name);
      console.log("User Registered:", user);

      alert("Registration successful! Please check your email to confirm.");
      navigate({ to: "/login" }); 
    } catch (err) {
      console.error("Registration failed:", err);

      if (err instanceof Error && err.message.includes("Rate limit")) {
        setError("Too many attempts. Please try again after a few minutes.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold">Join Us</h1>
          <p className="mt-2 text-gray-300">Be a part of our growing community.</p>
        </div>

        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <Card className="border border-gray-600 bg-black/60">
            <CardContent className="p-6 space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleRegister} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />

                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />

                {/* Dropdown for User Type */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">User Type</label>
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-800 text-white"
                    required
                  >
                    <option value="user">User</option>
                    <option value="startup">Startup</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-4 py-2 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Sign Up"}
                </Button>
              </form>

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
