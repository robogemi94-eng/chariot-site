import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Building, ImagePlus } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const [accountType, setAccountType] = useState<"personal" | "business">("personal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bizName, setBizName] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  const [bizAddress, setBizAddress] = useState("");
  const [bizCat, setBizCat] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      name: name || email.split("@")[0],
      email: email,
      type: accountType,
      plan: accountType === "business" ? "basic" : "none"
    });

    if (accountType === 'business' && bizName) {
      // Save simulated business to local storage
      const saved = localStorage.getItem("kiez_mock_businesses");
      const currentBiz = saved ? JSON.parse(saved) : [];
      currentBiz.push({
        name: bizName,
        desc: bizDesc,
        address: bizAddress,
        cat: bizCat
      });
      localStorage.setItem("kiez_mock_businesses", JSON.stringify(currentBiz));
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200">
          
          {/* Account Type Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
            <button
              onClick={() => setAccountType("personal")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                accountType === "personal" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setAccountType("business")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                accountType === "business" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Business Pro
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSignUp}>
            
            {/* Common Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="John Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="password" required className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="••••••••" />
                </div>
              </div>
            </div>

            {/* Business Specific Fields */}
            {accountType === "business" && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Business Details (Optional)</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                    <input type="text" value={bizName} onChange={(e) => setBizName(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="John's Plumbing" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select value={bizCat} onChange={(e) => setBizCat(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm bg-white">
                      <option value="">Select a category</option>
                      <option value="home-services">Home Services (Plumbing, Cleaning, etc.)</option>
                      <option value="outdoor">Outdoor & Property</option>
                      <option value="automotive">Automotive Services</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="events">Events & Creative Services</option>
                      <option value="professional">Professional & Tech Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Description</label>
                    <textarea rows={3} value={bizDesc} onChange={(e) => setBizDesc(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Tell customers about your services..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Address (Optional)</label>
                    <input type="text" value={bizAddress} onChange={(e) => setBizAddress(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="123 Main St, City, State" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Upload Photos (Up to 3)</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="aspect-square border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer bg-slate-50 hover:bg-blue-50">
                          <ImagePlus className="w-6 h-6 mb-2" />
                          <span className="text-xs font-medium">Photo {num}</span>
                          <input type="file" className="hidden" accept="image/*" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {accountType === "business" ? "Create Business Account" : "Create Account"}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}