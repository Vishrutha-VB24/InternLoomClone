import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-image.jpg')" }}>
      <div className="flex w-full max-w-4xl rounded-2xl bg-black/80 p-6 text-white shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold">Your Future Starts Here</h1>
          <p className="mt-2 text-gray-300">Redefining Internships, One Opportunity at a Time.</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Sign In As</h2>
          <Card className="cursor-pointer border border-gray-600 hover:bg-gray-800">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="flex items-center text-lg font-medium">
                  <span className="mr-2">🎓</span> Student
                </p>
                <p className="text-sm text-gray-400">Students studying from K1-12 / universities</p>
              </div>
              <ArrowRight className="text-gray-400" />
            </CardContent>
          </Card>
          <Card className="cursor-pointer border border-gray-600 hover:bg-gray-800">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="flex items-center text-lg font-medium">
                  <span className="mr-2">🚀</span> Start-Up
                </p>
                <p className="text-sm text-gray-400">People building a start-up</p>
              </div>
              <ArrowRight className="text-gray-400" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
