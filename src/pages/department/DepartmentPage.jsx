import { useState } from "react";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    image: "/images/cardiology.jpg",
    description: "Advanced heart care with modern diagnostic tools and experienced cardiologists.",
    doctors: 12,
    experience: "25+ years",
    services: ["Heart Surgery", "Angioplasty", "ECG", "Echocardiography", "Cardiac Rehabilitation"]
  },
  {
    id: 2,
    name: "Neurology",
    image: "/images/Neurology.jpg",
    description: "Specialized care for brain, spine, and nervous system disorders.",
    doctors: 8,
    experience: "20+ years",
    services: ["Brain Surgery", "Stroke Treatment", "Epilepsy Care", "Migraine Treatment", "Spinal Therapy"]
  },
  {
    id: 3,
    name: "Pediatrics",
    image: "/images/Pediatrics.png",
    description: "Comprehensive healthcare for children from birth to adolescence.",
    doctors: 15,
    experience: "18+ years",
    services: ["Newborn Care", "Vaccination", "Child Development", "Nutrition", "Pediatric Surgery"]
  },
  {
    id: 4,
    name: "Orthopedics",
    image: "/images/Orthopedics.jpg",
    description: "Expert treatment for bones, joints, ligaments, and muscles.",
    doctors: 10,
    experience: "22+ years",
    services: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Arthroscopy", "Spine Surgery"]
  },
  {
    id: 5,
    name: "Ophthalmology",
    image: "/images/Ophthalmology.jpg",
    description: "Complete eye care services from routine checkups to complex surgeries.",
    doctors: 7,
    experience: "15+ years",
    services: ["Cataract Surgery", "LASIK", "Glaucoma Care", "Retina Treatment", "Pediatric Eye Care"]
  },
  {
    id: 6,
    name: "ENT Specialist",
    image: "/images/ENT Specialist.png",
    description: "Treatment for ear, nose, throat, and related head & neck conditions.",
    doctors: 6,
    experience: "17+ years",
    services: ["Hearing Loss", "Sinus Surgery", "Tonsillectomy", "Voice Therapy", "Allergy Treatment"]
  },
  {
    id: 7,
    name: "Pulmonology",
    image: "/images/Pulmonology.png",
    description: "Specialized care for respiratory system and lung diseases.",
    doctors: 9,
    experience: "19+ years",
    services: ["Asthma Care", "COPD Treatment", "Lung Cancer", "Sleep Apnea", "Bronchoscopy"]
  },
  {
    id: 8,
    name: "General Medicine",
    image: "/images/General.jpg",
    description: "Primary healthcare services for all general medical conditions.",
    doctors: 20,
    experience: "15+ years",
    services: ["Health Checkup", "Diabetes Care", "Hypertension", "Fever Treatment", "Preventive Care"]
  }
];

const DepartmentPage = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-blue-900 dark:bg-blue-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 dark:bg-blue-950"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fadeInUp">
            Medical Departments
          </h1>
          <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            World-class medical expertise across multiple specialties, 
            delivering comprehensive healthcare under one roof
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search departments..."
              className="flex-1 px-4 py-2.5 text-sm outline-none rounded-lg bg-transparent dark:text-white dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-900 dark:bg-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all duration-300 font-semibold text-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDepartments.map((dept, index) => (
            <div
              key={dept.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedDept(dept)}
            >
              <div className="relative h-44 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-2 right-2 bg-blue-900/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                  {dept.doctors} Specialists
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2">
                  {dept.description}
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{dept.experience}</span>
                  </div>
                  <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Department Details */}
      {selectedDept && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform animate-scaleIn">
            <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img 
                src={selectedDept.image} 
                alt={selectedDept.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x300?text=No+Image";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-3 right-3 text-white hover:text-gray-200 text-2xl z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
              <div className="absolute bottom-3 left-3 text-white">
                <div>
                  <h3 className="text-2xl font-bold">{selectedDept.name}</h3>
                  <p className="text-white/80 text-sm">{selectedDept.experience} of Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">About Department</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedDept.description}</p>
              
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Key Services</h4>
              <div className="grid grid-cols-2 gap-1 mb-4">
                {selectedDept.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 text-xs">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-900 dark:text-blue-400">{selectedDept.doctors}+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-900 dark:text-blue-400">24/7</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-900 dark:text-blue-400">98%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-900 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all font-semibold text-sm">
                  Book Appointment
                </button>
                <button className="flex-1 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-all font-semibold text-sm">
                  Contact Department
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white py-16 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Our Departments?</h2>
            <p className="text-blue-100 dark:text-blue-200 text-base">Excellence in every specialty, care in every department</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Feature 1 - Expert Doctors */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/images/Expert Doctors.png" 
                  alt="Expert Doctors"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Expert Doctors
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Board-certified specialists from top medical institutions
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">25+ Experts</span>
                  </div>
                  <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 2 - Modern Equipment */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/images/Modern Equipment.jpg" 
                  alt="Modern Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/2938/2938757.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Modern Equipment
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Latest medical technology for accurate diagnosis
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Advanced Tech</span>
                  </div>
                  <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 3 - 24/7 Emergency */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/images/Emergency S.jpg" 
                  alt="24/7 Emergency"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/2938/2938756.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                  24/7 Emergency
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Round-the-clock emergency care and support
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Always Open</span>
                  </div>
                  <button className="text-green-600 dark:text-green-400 font-semibold text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 4 - Affordable Care */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/images/Affordable Care.jfif" 
                  alt="Affordable Care"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135674.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Affordable Care
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Quality healthcare at competitive prices
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Best Prices</span>
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
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
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

export default DepartmentPage;