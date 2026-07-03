import { Link, Outlet, useNavigate } from "react-router-dom";
import { MessageSquare, Briefcase, LogOut, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-1 sm:gap-2 group shrink-0">
              <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-6 sm:h-8 text-blue-600">
                {/* House 1 */}
                <path d="M5 22l10-10 10 10v12H5z" className="text-blue-700" />
                <rect x="11" y="22" width="4" height="4" fill="currentColor" />
                <rect x="15" y="22" width="4" height="4" fill="currentColor" />
                
                {/* House 2 */}
                <path d="M75 22l10-10 10 10v12H75z" className="text-blue-700" />
                <rect x="81" y="22" width="4" height="4" fill="currentColor" />
                <rect x="85" y="22" width="4" height="4" fill="currentColor" />
                
                {/* Link */}
                <path d="M35 22h10a5 5 0 0 1 0 10h-5" className="text-green-500" />
                <path d="M65 32H55a5 5 0 0 1 0-10h5" className="text-green-500" />
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">Kiez</span>
                <span className="hidden sm:block text-[10px] text-slate-500 font-medium">Stronger connections. Better community.</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/" className="text-blue-600 font-semibold border-b-2 border-blue-600 py-2">Home</Link>
              <Link to="/categories" className="text-slate-600 hover:text-slate-900 font-medium">Categories</Link>
              <Link to="/pricing" className="text-slate-600 hover:text-slate-900 font-medium">For Businesses</Link>
              {user && (
                <Link to="/my-businesses" className="text-slate-600 hover:text-slate-900 font-medium">Your Listings</Link>
              )}
              {user && user.type === "admin" && (
                <Link to="/admin" className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1">
                  Operator Panel
                </Link>
              )}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              
              {user ? (
                <div className="flex items-center gap-1 sm:gap-3">
                  <Link to="/add-business" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg transition-colors">
                    + Add Business
                  </Link>
                  <Link to="/my-businesses" className="flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                    <User className="w-4 h-4 text-slate-500" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 max-w-[80px] sm:max-w-none truncate">{user.name}</span>
                  </Link>
                  <button onClick={handleLogout} className="text-slate-500 hover:text-red-600 transition-colors p-1 sm:p-2" title="Log out">
                    <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-200 rounded-lg">Log In</Link>
                  <Link to="/signup" className="bg-blue-600 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-blue-700 transition-colors whitespace-nowrap inline-flex items-center justify-center">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg text-slate-900">Kiez</span>
              </div>
              <p className="text-sm text-slate-500">Stronger connections. Better community.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/categories" className="hover:text-blue-600">Find Services</Link></li>
                <li><Link to="/chat" className="hover:text-blue-600">Messages</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Businesses</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/pricing" className="hover:text-blue-600">Join as a Pro</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-blue-600">Contact Admin</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 text-center">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Kiez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}