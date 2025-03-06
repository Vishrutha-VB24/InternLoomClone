export default function FeaturesSection() {
    const features = [
      { icon: "⚡", title: "Tailored Internships", desc: "Access diverse internship opportunities tailored to your skills and interests." },
      { icon: "📈", title: "Enhanced Visibility", desc: "Boost your profile’s visibility with SEO optimization for increased exposure." },
      { icon: "🔒", title: "Premium Insights", desc: "Unlock exclusive insights and opportunities with our advanced plans." },
      { icon: "💡", title: "Interactive Platform", desc: "Engage with a user-friendly platform to streamline your internship search." }
    ];
  
    return (
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Unleash Your Potential with InternLoom</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 px-10">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  