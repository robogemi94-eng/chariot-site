import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ShieldAlert, Settings, Shield, User, Briefcase, MessageSquare, CreditCard } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Protect the route
  useEffect(() => {
    if (!user || user.type !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user || user.type !== "admin") return null;

  const stats = [
    { label: "Total Users", value: "1,248", trend: "+12% this month" },
    { label: "Active Businesses", value: "342", trend: "+5% this month" },
    { label: "Pending Approvals", value: "18", trend: "Action required" },
    { label: "Total Revenue", value: "$4,520", trend: "From subscriptions & fees" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Operator Dashboard</h1>
              <p className="text-slate-500">Superior control panel for Kiez administrators.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Settings className="w-4 h-4" /> Platform Settings
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className={`text-xs font-medium ${stat.trend.includes('+') ? 'text-green-600' : stat.trend.includes('Action') ? 'text-red-600' : 'text-slate-500'}`}>
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900">Recent Business Approvals</h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { name: "John's Plumbing", type: "Home Services", date: "2 hours ago", status: "Pending" },
                  { name: "Elite Landscaping", type: "Outdoor & Property", date: "5 hours ago", status: "Approved" },
                  { name: "Mobile Detailing Co", type: "Automotive Services", date: "1 day ago", status: "Approved" }
                ].map((biz, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{biz.name}</p>
                        <p className="text-sm text-slate-500">{biz.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500 hidden sm:block">{biz.date}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        biz.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {biz.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left border border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">Manage Users</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left border border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">Monitor Messages</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left border border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">View Payments</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left border border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">Security Logs</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}