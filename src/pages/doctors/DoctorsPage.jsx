import { useState } from "react";
import { FaStar, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaSearch } from "react-icons/fa";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    department: "Cardiology",
    experience: "15+ years",
    patients: "5000+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop",
    education: "MD, FACC - Harvard Medical School",
    availability: "Mon, Wed, Fri - 9AM to 5PM",
    phone: "+1 234 567 890",
    email: "dr.sarah@medicalcare.com",
    bio: "Leading cardiologist with expertise in interventional cardiology and heart failure management."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    department: "Neurology",
    experience: "12+ years",
    patients: "4200+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop",
    education: "MD, PhD - Stanford University",
    availability: "Tue, Thu, Sat - 10AM to 6PM",
    phone: "+1 234 567 891",
    email: "dr.michael@medicalcare.com",
    bio: "Expert in stroke management, epilepsy treatment, and neurodegenerative disorders."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    department: "Pediatrics",
    experience: "10+ years",
    patients: "8000+",
    rating: 4.9,
    image: "/images/doctor4.jfif",
    education: "MD, FAAP - Johns Hopkins University",
    availability: "Mon to Fri - 8AM to 4PM",
    phone: "+1 234 567 892",
    email: "dr.emily@medicalcare.com",
    bio: "Compassionate pediatric care specialist focusing on child development and preventive medicine."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: "18+ years",
    patients: "6500+",
    rating: 4.7,
    image: "/images/doctor6.jfif",
    education: "MD, FACS - Mayo Clinic",
    availability: "Mon, Wed, Thu - 9AM to 6PM",
    phone: "+1 234 567 893",
    email: "dr.james@medicalcare.com",
    bio: "Specialized in joint replacement, sports medicine, and arthroscopic surgery."
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    specialization: "Ophthalmologist",
    department: "Ophthalmology",
    experience: "14+ years",
    patients: "7000+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=500&fit=crop",
    education: "MD, FICO - UCLA Medical Center",
    availability: "Tue to Sat - 10AM to 7PM",
    phone: "+1 234 567 894",
    email: "dr.lisa@medicalcare.com",
    bio: "Expert in cataract surgery, LASIK, and retinal disorders treatment."
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialization: "ENT Specialist",
    department: "ENT",
    experience: "16+ years",
    patients: "5500+",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?w=500&h=500&fit=crop",
    education: "MD, FACS - University of Michigan",
    availability: "Mon, Wed, Fri - 9AM to 5PM",
    phone: "+1 234 567 895",
    email: "dr.robert@medicalcare.com",
    bio: "Comprehensive ENT care including sinus surgery, hearing loss, and voice disorders."
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialization: "Dermatologist",
    department: "Dermatology",
    experience: "11+ years",
    patients: "6000+",
    rating: 4.8,
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=500&h=500&fit=crop",
    education: "MD, FAAD - Yale University",
    availability: "Mon, Tue, Thu - 9AM to 6PM",
    phone: "+1 234 567 896",
    email: "dr.maria@medicalcare.com",
    bio: "Specialized in medical and cosmetic dermatology, skin cancer treatment."
  },
  {
    id: 8,
    name: "Dr. David Kim",
    specialization: "Urologist",
    department: "Urology",
    experience: "14+ years",
    patients: "4800+",
    rating: 4.7,
    image: "/images/doctor5.jfif",
    education: "MD, FACS - Duke University",
    availability: "Wed, Thu, Fri - 10AM to 7PM",
    phone: "+1 234 567 897",
    email: "dr.david@medicalcare.com",
    bio: "Expert in minimally invasive urological surgery and kidney stone treatment."
  }
];

const DoctorsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = ["all", ...new Set(doctors.map(doc => doc.department))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-blue-900 dark:bg-blue-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 dark:bg-blue-950"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fadeInUp">
            Our Expert Doctors
          </h1>
          <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Meet our team of experienced medical professionals dedicated to providing 
            exceptional healthcare with compassion and expertise
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm" />
                <input
                  type="text"
                  placeholder="Search doctor..."
                  className="w-full pl-9 pr-3 py-2 text-sm outline-none rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-900 dark:focus:border-blue-500 transition-colors dark:text-white dark:placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="sm:w-48">
                <select
                  className="w-full px-3 py-2 text-sm outline-none rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-900 dark:focus:border-blue-500 transition-colors dark:text-white"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-1">{doctors.length}+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Expert Doctors</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">20+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-1">50K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Happy Patients</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Emergency Care</div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedDoctor(doctor)}
            >
              {/* Doctor Image Section */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-900">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 text-sm z-10">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className="font-semibold">{doctor.rating}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-0.5 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {doctor.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold text-sm mb-2">{doctor.specialization}</p>
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-blue-900 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>{doctor.patients} patients</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {doctor.bio}
                </p>
                <button className="w-full bg-blue-900 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all transform hover:scale-105 font-semibold text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Doctor Details */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform animate-scaleIn">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-900 p-5 text-white relative">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-3 right-3 text-white hover:text-gray-200 text-2xl"
              >
                ×
              </button>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-shrink-0">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selectedDoctor.name}</h3>
                  <p className="text-green-300 text-lg mb-2">{selectedDoctor.specialization}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{selectedDoctor.rating} Rating</span>
                    </div>
                    <div>{selectedDoctor.experience}</div>
                    <div>{selectedDoctor.patients} Patients</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">About Doctor</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{selectedDoctor.bio}</p>
                  
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{selectedDoctor.education}</p>
                  
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Availability</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-900 dark:text-blue-400" />
                    {selectedDoctor.availability}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Contact Information</h4>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <FaPhoneAlt className="text-green-600 dark:text-green-400" />
                      <a href={`tel:${selectedDoctor.phone}`} className="hover:text-blue-900 dark:hover:text-blue-400">{selectedDoctor.phone}</a>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <FaEnvelope className="text-green-600 dark:text-green-400" />
                      <a href={`mailto:${selectedDoctor.email}`} className="hover:text-blue-900 dark:hover:text-blue-400">{selectedDoctor.email}</a>
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Follow</h4>
                  <div className="flex gap-2 mb-4">
                    <a href="#" className="w-8 h-8 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors text-sm">
                      <FaFacebook />
                    </a>
                    <a href="#" className="w-8 h-8 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors text-sm">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-8 h-8 bg-blue-900 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors text-sm">
                      <FaLinkedin />
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-900 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all transform hover:scale-105 font-semibold text-sm">
                      Book Appointment
                    </button>
                    <button className="flex-1 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-all font-semibold text-sm">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* Features Section */}
<div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white py-16 mt-8">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Our Doctors?</h2>
      <p className="text-blue-100 dark:text-blue-200 text-base">Excellence in medical care, compassion in treatment</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      {/* Feature 1 - Highly Qualified */}
      <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/images/Highly Qualified.jfif" 
            alt="Highly Qualified"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
            Highly Qualified
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            Board-certified specialists from top medical institutions
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">Top Specialists</span>
            </div>
            <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Feature 2 - Patient First Approach */}
      <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/images/Patient First Approach.jpg" 
            alt="Patient First Approach"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
            Patient First Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            Compassionate care with personalized treatment plans
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">Personalized Care</span>
            </div>
            <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Feature 3 - Award Winning */}
      <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/images/Award Winning.webp" 
            alt="Award Winning"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1533093818119-ac1b0c0148e6?w=500&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
            Award Winning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            Recognized for excellence in patient care and outcomes
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">Excellence Award</span>
            </div>
            <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>

    </div>
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

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
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
            animation: fadeIn 0.3s ease-out;
          }

          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }

          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default DoctorsPage;