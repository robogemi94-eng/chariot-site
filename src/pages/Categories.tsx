import { Link } from "react-router-dom";
import { Search, Wrench, Scissors, Camera, Monitor, Car, Trees, ArrowRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "home-services",
      name: "Home Services",
      icon: Wrench,
      description: "Plumbing, electrical, cleaning, and handyman services.",
      subcategories: ["House Cleaning", "Plumbing", "Electrical", "Handyman", "HVAC"],
    },
    {
      id: "outdoor",
      name: "Outdoor & Property",
      icon: Trees,
      description: "Landscaping, tree care, and exterior maintenance.",
      subcategories: ["Landscaping", "Lawn Care", "Tree Trimming", "Pressure Washing", "Fencing"],
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      description: "Repair, detailing, and mobile mechanic services.",
      subcategories: ["Car Detailing", "Auto Repair", "Mobile Wash", "Tire Services"],
    },
    {
      id: "beauty",
      name: "Beauty & Personal Care",
      icon: Scissors,
      description: "Hair, nails, massage, and spa services.",
      subcategories: ["Hair Salons", "Barbershops", "Nail Salons", "Massage Therapy"],
    },
    {
      id: "events",
      name: "Events & Creative Services",
      icon: Camera,
      description: "Photography, planning, and catering.",
      subcategories: ["Photography", "Videography", "DJ Services", "Event Planning"],
    },
    {
      id: "professional",
      name: "Professional & Tech Services",
      icon: Monitor,
      description: "IT support, tutoring, and consulting.",
      subcategories: ["IT Support", "Tutoring", "Web Design", "Marketing"],
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Service Categories</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Browse our structured list of local services. Categories are ready for real professionals to be added.</p>
          
          <div className="mt-8 max-w-md">
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search categories..." 
                className="bg-transparent border-none outline-none w-full text-slate-900 placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    <Link to={`/categories/${cat.id}`} className="hover:text-blue-600 transition-colors">
                      {cat.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">{cat.description}</p>
                </div>
              </div>
              
              <div className="mt-6 border-t border-slate-100 pt-4">
                <ul className="space-y-2 mb-6">
                  {cat.subcategories.slice(0, 4).map((sub) => (
                    <li key={sub}>
                      <Link to={`/categories/${cat.id}?type=${sub.toLowerCase()}`} className="text-sm text-slate-600 hover:text-blue-600 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" /> {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={`/categories/${cat.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Browse Pros <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}