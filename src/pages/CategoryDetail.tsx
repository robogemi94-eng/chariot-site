import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filter, ChevronRight, Briefcase, MapPin, Star, CheckCircle } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function CategoryDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  
  const categoryName = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Category';

  const [businesses, setBusinesses] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("kiez_mock_businesses");
    const allBusinesses = saved ? JSON.parse(saved) : [];
    
    // Filter businesses by category
    const filtered = allBusinesses.filter((b: any) => 
      !id || (b.cat && b.cat.toLowerCase().includes(id.toLowerCase())) || b.cat === id
    );
    
    // Add default properties to make it match the UI
    const formatted = filtered.map((b: any, index: number) => ({
      ...b,
      id: index.toString(),
      rating: 5.0,
      reviews: 1,
      price: "$",
      location: b.address || "Local Area",
      promoted: false,
      description: b.desc,
      features: ["Verified Pro"]
    }));
    
    setBusinesses(formatted);
  }, [id]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500 gap-2 mb-4">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/categories" className="hover:text-slate-900">Categories</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{categoryName}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">{categoryName} Pros</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <div className={`bg-white p-5 rounded-xl border border-slate-200 sticky top-24 ${!user ? "opacity-60 pointer-events-none" : ""}`}>
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                <Filter className="w-5 h-5" /> Filters
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-slate-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  <div className="text-sm text-slate-500">Filter disabled (no results)</div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-slate-900 mb-3">Distance</h3>
                <select className="w-full border border-slate-200 rounded-lg text-sm p-2 text-slate-600 outline-none">
                  <option>Any distance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600">0 professionals found</p>
            </div>

            {!user ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-100/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Create an account to view pros</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    You need a free Kiez account to browse full business profiles, read reviews, and message professionals.
                  </p>
                  <Link to="/signup" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm">
                    Create Free Account
                  </Link>
                </div>
                
                {/* Blurred background mock content to make it look like there are results underneath */}
                <div className="opacity-20 pointer-events-none space-y-6 blur-sm">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 border-b border-slate-100 pb-4">
                      <div className="w-24 h-24 bg-slate-200 rounded-lg"></div>
                      <div className="flex-1 text-left space-y-2">
                        <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                        <div className="w-1/4 h-4 bg-slate-200 rounded"></div>
                        <div className="w-full h-12 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : businesses.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 border-dashed">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No pros in this category yet</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-6">
                  We manually review and add top professionals to our network. Check back later or get listed yourself if you're a pro!
                </p>
                <Link to="/pricing" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-colors">
                  List Your Business
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {businesses.map((biz) => (
                  <div key={biz.id} className={`bg-white rounded-xl border ${biz.promoted ? 'border-yellow-200 shadow-md' : 'border-slate-200 shadow-sm'} overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow`}>
                    <div className="w-full sm:w-48 h-48 bg-slate-200 relative shrink-0">
                      <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                      {biz.promoted && (
                        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 z-10 shadow-sm">
                          <Star className="w-3 h-3 fill-yellow-900" /> Promoted
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 mb-1">
                            <Link to={`/business/${biz.id}`} className="hover:text-blue-600 transition-colors">{biz.name}</Link>
                          </h2>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded">
                              <Star className="w-4 h-4 fill-green-700" /> {biz.rating} ({biz.reviews})
                            </div>
                            <span className="text-slate-500 font-medium">{biz.price}</span>
                          </div>
                        </div>
                        <Link to={`/business/${biz.id}`} className="hidden sm:block bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                          View Profile
                        </Link>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                        <MapPin className="w-4 h-4" /> {biz.location}
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{biz.description}</p>
                      
                      <div className="mt-auto flex flex-wrap gap-2">
                        {biz.features.map(feat => (
                          <span key={feat} className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3 text-blue-500" /> {feat}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={`/business/${biz.id}`} className="mt-6 sm:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm text-center transition-colors">
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}