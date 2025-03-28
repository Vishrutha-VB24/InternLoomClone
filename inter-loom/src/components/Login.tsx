import { useRef } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import authService from "@/appwrite/auth";
import useAuthStore from "@/store/authStore.ts";

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { setUserInfo } = useAuthStore();
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            // Clear any existing sessions before logging in
            await authService.logout();
            const userinfo = await authService.login({ email, password });
            
            setUserInfo(userinfo);
            navigate({ to: "/internship", replace: true });
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Invalid email or password.");
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-image.jpg')" }}>
            <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
                <div className="w-1/2 p-6">
                    <h1 className="text-4xl font-bold">Welcome Back</h1>
                    <p className="mt-2 text-gray-300">Sign in to continue your journey.</p>
                </div>
                <div className="w-1/2">
                    <Card className="border border-gray-600 bg-black/60 p-4">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <form onSubmit={handleLogin}>
                                <Label className="block text-sm text-gray-300">Email</Label>
                                <Input
                                    ref={emailRef}
                                    type="email"
                                    required
                                    className="mt-1 w-full p-2 bg-gray-900 text-white"
                                    placeholder="Enter your email"
                                />
                                <Label className="block text-sm text-gray-300 mt-2">Password</Label>
                                <Input
                                    ref={passwordRef}
                                    type="password"
                                    required
                                    className="mt-1 w-full p-2 bg-gray-900 text-white"
                                    placeholder="Enter your password"
                                />
                                <Button type="submit" className="bg-amber-400 w-full mt-4 text-black">
                                    Login
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <p className="text-sm text-gray-400">New here? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;
