import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-black-400 mb-4">
            At InternLoom, we’re here to help you connect with opportunities and grow your career. Whether you have questions about internships, our courses, or anything else, don’t hesitate to reach out!
          </p>

          <div className="flex items-center space-x-4 mb-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <div>
              <h4 className="font-semibold">Our Address</h4>
              <p className="text-black-300">Innovation Centre, MAHE BLRU</p>
              <p className="text-black-300">Bengaluru, 560064</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-black-300">Jeevan Reddy</p>
              <p className="text-black-300">Mobile: +91 9347239080</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaClock className="text-blue-500 text-2xl" />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-black-300">Monday - Friday: 08:00 - 17:00</p>
              <p className="text-black-300">Saturday & Sunday: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white-800 p-6 rounded-lg shadow-lg">
          <form>
            <label className="block text-black mb-2 font-semibold">Your Email</label>
            <input type="email" className="w-full p-2 border rounded-md mb-4" placeholder="name@example.com" />

            <label className="block text-black mb-2 font-semibold">Subject</label>
            <input type="text" className="w-full p-2 border rounded-md mb-4" placeholder="Let us know how we can help you" />

            <label className="block text-black mb-2 font-semibold">Your Message</label>
            <textarea className="w-full p-2 border rounded-md mb-4" rows={4} placeholder="Leave a message..."></textarea>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
