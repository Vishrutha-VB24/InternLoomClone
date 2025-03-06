import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    price: "$10/mth",
    title: "Basic Plan",
    description: "For Startups & Small Businesses",
    features: [
      "Access to Tier 3 Colleges for fresh talent",
      "ATS-Based Resume Shortlisting",
      "Screening Interview by our team",
      "Volunteer Support for onboarding",
    ],
    bestFor: "Startups and small businesses hiring a few interns with minimal recruitment complexity.",
  },
  {
    price: "$20/mth",
    title: "Growth Plan",
    description: "For Scaling Companies",
    features: [
      "Includes Everything in Basic, Plus:",
      "Access to Tier 2 Colleges for a wider talent pool",
      "Online Assessment Tests for skill evaluation",
      "HR Support for interview scheduling & candidate interactions",
    ],
    bestFor: "Mid-sized companies that need a structured and scalable hiring approach.",
  },
  {
    price: "$40/mth",
    title: "Premium Plan",
    description: "For Enterprises & High-Volume Hiring",
    features: [
      "Includes Everything in Basic & Growth, Plus:",
      "Access to Tier 1 Colleges with top talent",
      "Technical Interview Support for industry-specific assessments",
      "HR Interview Assistance for final selection and offer rollout",
    ],
    bestFor: "Large enterprises and high-growth companies looking for a full-fledged hiring solution.",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-3xl font-bold text-center">Simple, Transparent Pricing</h2>
      <p className="text-gray-500 mt-2 text-center">
        We believe Interloom should be accessible to all companies, no matter the size
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {plans.map((plan, index) => (
          <Card key={index} className="p-6 border border-gray-200 shadow-lg rounded-xl">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold">{plan.price}</h3>
              <h4 className="text-lg font-semibold mt-2">{plan.title}</h4>
              <p className="text-gray-600 mt-1">{plan.description}</p>

              <ul className="mt-4 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                <strong>Best for:</strong> {plan.bestFor}
              </p>

              <div className="mt-6 space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 rounded-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 py-2 rounded-lg">
                  Chat with Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
