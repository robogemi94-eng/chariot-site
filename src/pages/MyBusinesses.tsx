import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building, Edit, Plus, MapPin } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function MyBusinesses() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const saved = localStorage.getItem("kiez_mock_businesses");
    const allBusinesses = saved ? JSON.parse(saved) : [];
    
    // Filter businesses that belong to this user
    const userBusinesses = allBusinesses.filter((b: any) => b.ownerEmail === user.email);
    setBusinesses(userBusinesses);
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Businesses</h1>
            <p className="text-slate-600 mt-1">Manage your business listings on Kiez.</p>
          </div>
          <Link to="/add-business" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Business
          </Link>
        </div>

        {businesses.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <Building className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">You haven't listed any businesses yet.</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">Create a listing to get discovered by local customers in your neighborhood.</p>
            <Link to="/add-business" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Create Your First Listing
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {businesses.map((biz) => (
              <div key={biz.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{biz.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <span className="capitalize">{biz.cat.replace('-', ' ')}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {biz.address || "Local Area"}</span>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link to={`/business/${biz.id}`} className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg transition-colors">
                    View
                  </Link>
                  <Link to={`/edit-business/${biz.id}`} className="flex-1 sm:flex-none text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" /> Edit
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