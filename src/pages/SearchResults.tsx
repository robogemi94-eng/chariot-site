import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bot, MapPin, Star, CheckCircle, Search } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { user } = useAuth();
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    // Basic AI-like mock filter logic based on query
    const saved = localStorage.getItem("kiez_mock_businesses");
    const allBusinesses = saved ? JSON.parse(saved) : [];
    
    let filtered = allBusinesses;
    
    if (query === "near-me") {
      // Mock "Near Me" by sorting or just displaying them all as "local"
      // Assuming they all have addresses from signup
    } else if (query === "popular") {
      // Show all as popular
    } else {
      // Match query text
      const lowerQ = query.toLowerCase();
      filtered = allBusinesses.filter((b: any) => 
        (b.name && b.name.toLowerCase().includes(lowerQ)) ||
        (b.desc && b.desc.toLowerCase().includes(lowerQ)) ||
        (b.cat && b.cat.toLowerCase().includes(lowerQ))
      );
    }
    
    setResults(filtered);
  }, [query]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                AI Enhanced Results
              </h1>
              {query === "near-me" ? (
                <p className="text-slate-600 text-lg">Showing top professionals closest to your current location.</p>
              ) : (
                <p className="text-slate-600 text-lg">We analyzed your request for <span className="font-semibold text-slate-900">"{query}"</span> and found the best local matches.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">{results.length} Professionals Found</h2>
        </div>

        {!user ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm mx-auto">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Create an account to view results</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6">
              You need a free Kiez account to browse full business profiles and view search results.
            </p>
            <Link to="/signup" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm">
              Create Free Account
            </Link>
          </div>
        ) : results.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 border-dashed">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No exact matches found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any professionals matching your specific request yet. Try adjusting your search terms!
            </p>
            <Link to="/categories" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 bg-blue-50 px-6 py-3 rounded-xl">
              Browse Categories
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((biz, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow">
                <div className="w-full sm:w-48 h-48 bg-slate-200 relative shrink-0 flex items-center justify-center text-slate-400">
                  No Image Uploaded
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">
                        <Link to={`/business/${idx}`} className="hover:text-blue-600 transition-colors">{biz.name}</Link>
                      </h2>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded">
                          <Star className="w-4 h-4 fill-green-700" /> New Pro
                        </div>
                      </div>
                    </div>
                    <Link to={`/business/${idx}`} className="hidden sm:block bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                      View Profile
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                    <MapPin className="w-4 h-4" /> {biz.address || 'Local Area'}
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{biz.desc}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3 text-blue-500" /> AI Matched
                    </span>
                  </div>
                  
                  <Link to={`/business/${idx}`} className="mt-6 sm:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm text-center transition-colors">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}