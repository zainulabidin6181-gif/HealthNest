import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-blue-900 dark:bg-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 dark:bg-blue-950"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Get in touch with us for appointments, inquiries, or emergency services.
            We're here to help you 24/7
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Phone Number</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">+1 (234) 567-8900</p>
            <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-8901</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3 font-semibold">24/7 Emergency Line</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Email Address</h3>
            <p className="text-gray-600 dark:text-gray-300">info@medicalcare.com</p>
            <p className="text-gray-600 dark:text-gray-300">appointments@medicalcare.com</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3 font-semibold">Response within 24h</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Our Location</h3>
            <p className="text-gray-600 dark:text-gray-300">123 Healthcare Avenue</p>
            <p className="text-gray-600 dark:text-gray-300">Medical District, NY 10001</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3 font-semibold">Get Directions →</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Working Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 8AM - 8PM</p>
            <p className="text-gray-600 dark:text-gray-300">Sat-Sun: 9AM - 5PM</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3 font-semibold">Emergency: 24/7</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Additional Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl animate-fadeIn">
                <p className="text-green-600 dark:text-green-400 font-semibold text-center">
                  ✓ Thank you for contacting us! We'll respond within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-colors"
                    placeholder="Appointment, Inquiry, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 dark:bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-600 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-700 dark:to-green-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🚑</div>
                <h3 className="text-2xl font-bold">Emergency? Need Immediate Help?</h3>
              </div>
              <p className="mb-4 text-green-50 dark:text-green-100">For medical emergencies, please call our emergency hotline immediately</p>
              <div className="text-3xl font-bold mb-3">+1 (234) 567-8999</div>
              <p className="text-green-50 dark:text-green-100 text-sm">Available 24/7 for emergency situations</p>
            </div>

            {/* Social Media Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">Connect With Us</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors transform hover:scale-110">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors transform hover:scale-110">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors transform hover:scale-110">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors transform hover:scale-110">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-400" />
                  <div>
                    <p className="text-sm text-blue-200 dark:text-blue-300">Appointment Hotline</p>
                    <p className="font-semibold">+1 (234) 567-8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-green-400" />
                  <div>
                    <p className="text-sm text-blue-200 dark:text-blue-300">Email Us</p>
                    <p className="font-semibold">info@medicalcare.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-green-400" />
                  <div>
                    <p className="text-sm text-blue-200 dark:text-blue-300">Visit Us</p>
                    <p className="font-semibold">123 Healthcare Avenue, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Locations */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white py-16 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Department Locations</h2>
            <p className="text-blue-100 dark:text-blue-200 text-lg">Visit any of our specialized centers near you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { dept: "Cardiology Center", floor: "Ground Floor", extension: "Ext. 101" },
              { dept: "Neurology Center", floor: "First Floor", extension: "Ext. 102" },
              { dept: "Pediatrics Center", floor: "Second Floor", extension: "Ext. 103" },
              { dept: "Emergency Unit", floor: "Main Building", extension: "Ext. 999" }
            ].map((location, idx) => (
              <div key={idx} className="bg-white/10 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-all">
                <h3 className="text-lg font-bold mb-2">{location.dept}</h3>
                <p className="text-blue-100 dark:text-blue-200 text-sm">{location.floor}</p>
                <p className="text-blue-100 dark:text-blue-200 text-sm">{location.extension}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Quick answers to common questions</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { q: "How do I book an appointment?", a: "You can book an appointment online through our website or call our appointment hotline at +1 (234) 567-8900." },
            { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans. Please contact our billing department for verification." },
            { q: "What documents should I bring?", a: "Please bring your ID, insurance card, medical history, and any relevant medical reports." },
            { q: "Is parking available?", a: "Yes, we have free parking available for all patients and visitors at our facility." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
            opacity: 0;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;