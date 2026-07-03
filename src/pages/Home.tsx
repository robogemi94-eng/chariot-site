import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, Wrench, Scissors, Camera, Monitor, Car, Trees, Sparkles, MessageSquare, Bot, CreditCard, ShieldCheck, Star } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [hotBusinesses, setHotBusinesses] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching businesses from backend
    const saved = localStorage.getItem("kiez_mock_businesses");
    if (saved) {
      setHotBusinesses(JSON.parse(saved));
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/categories");
    }
  };

  const handleNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app we'd pass lat/lng to backend
          alert(`Location found! Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}. Redirecting to local results...`);
          navigate("/search?q=near-me");
        },
        () => alert("Location access denied or unavailable. Please enter your zip code.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const categories = [
    { id: "home-services", name: "Home Services", icon: Wrench },
    { id: "outdoor", name: "Outdoor & Property", icon: Trees },
    { id: "automotive", name: "Automotive Services", icon: Car },
    { id: "beauty", name: "Beauty & Personal Care", icon: Scissors },
    { id: "events", name: "Events & Creative", icon: Camera },
    { id: "professional", name: "Professional & Tech", icon: Monitor },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Gradient Fade */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-1/3 bg-white h-full relative z-10"></div>
          <div className="w-2/3 h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-full h-full"></div>
            <img 
              src="https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Suburban House" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col lg:flex-row items-center gap-12 py-12">
          
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Trusted local <br/> help from <span className="text-blue-600">real</span> <br/> <span className="text-blue-600">neighbors.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Find trusted local service providers in your area. Book, chat, and get the job done.
            </p>
            
            <div className="bg-white rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col md:flex-row gap-2 max-w-xl border border-slate-100">
              <div className="flex-1 flex items-center px-4 py-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="What do you need help with today?" 
                  className="bg-transparent border-none outline-none w-full text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <button onClick={handleSearch} className="bg-blue-600 text-white font-semibold rounded-xl px-8 py-4 hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm">
                Search
              </button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-600">AI-Powered Search</span>
              <span>— find services in any way you describe it.</span>
            </div>

            <div className="mt-8 flex gap-3">
              <button onClick={() => navigate("/search?q=popular")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <ShieldCheck className="w-4 h-4 text-green-600" /> Popular Searches
              </button>
              <button onClick={handleNearMe} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <MapPin className="w-4 h-4 text-blue-600" /> Near Me
              </button>
            </div>
          </div>

          {/* Floating Features */}
          <div className="hidden lg:flex flex-col gap-6 w-80">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100 transform translate-x-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">AI Smart Search</h3>
                  <p className="text-xs text-slate-500 mt-1">Understands what you need, even if you don't know the exact name.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100 transform -translate-x-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Verified Local Pros</h3>
                  <p className="text-xs text-slate-500 mt-1">Trusted by your neighbors, backed by reviews.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100 transform translate-x-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Book & Chat Instantly</h3>
                  <p className="text-xs text-slate-500 mt-1">Connect, chat, and book with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Browse Top Categories</h2>
            <Link to="/categories" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              View All Categories
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link to={`/categories/${cat.id}`} key={cat.id} className="block group">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all text-center h-full flex flex-col items-center justify-center gap-4">
                  <cat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform stroke-[1.5]" />
                  <h3 className="font-bold text-slate-900 text-xs tracking-tight">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section: Hot Businesses & How It Works */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Hot Businesses */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Hot Businesses Near You</h2>
                  <p className="text-sm text-slate-500">New, boosted and featured businesses in your area.</p>
                </div>
                <Link to="/categories" className="border border-slate-200 bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  View All
                </Link>
              </div>

              {hotBusinesses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hotBusinesses.map((biz: any, i: number) => (
                    <Link to={`/business/${i}`} key={i} className="group block">
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="h-32 bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400">
                           No Image Uploaded
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{biz.name}</h3>
                          <p className="text-slate-500 text-xs mb-3 truncate">{biz.desc}</p>
                          <div className="mt-auto flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {biz.address || 'Local Area'}
                            </div>
                            <div className="flex items-center text-yellow-600 font-medium gap-1">
                              <Star className="w-3 h-3 fill-yellow-500" /> New
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-100">
                    <MapPin className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No businesses to show yet.</h3>
                  <p className="text-slate-500">Check back soon!</p>
                </div>
              )}
            </div>

            {/* How It Works */}
            <div className="lg:w-96 shrink-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">How Kiez Works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 relative">
                  <div className="absolute left-4 top-10 bottom-[-2rem] w-px bg-slate-200"></div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 relative z-10">1</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">Search</h3>
                      <Search className="w-4 h-4 text-slate-400 ml-auto" />
                    </div>
                    <p className="text-sm text-slate-600">Use our AI search to find exactly what you need.</p>
                  </div>
                </div>

                <div className="flex gap-4 relative">
                  <div className="absolute left-4 top-10 bottom-[-2rem] w-px bg-slate-200"></div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 relative z-10">2</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">Connect</h3>
                      <MessageSquare className="w-4 h-4 text-slate-400 ml-auto" />
                    </div>
                    <p className="text-sm text-slate-600">Message local pros and get answers fast.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">Book</h3>
                      <CreditCard className="w-4 h-4 text-slate-400 ml-auto" />
                    </div>
                    <p className="text-sm text-slate-600">Book with confidence and pay securely.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* List Your Business CTA */}
      {!user ? (
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Own a Local Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get discovered by customers right in your neighborhood. Join Kiez today and start growing your business with our smart local search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/add-business" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
                List Your Business Now
              </Link>
              <Link to="/pricing" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors border border-blue-500">
                View Plans
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Grow Your Network</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Keep your profile updated and post new listings to stay visible in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/add-business" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
                + Add Another Business
              </Link>
              <Link to="/my-businesses" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors border border-blue-500">
                Manage Listings
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}