import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Building, MapPin, ImagePlus, Link as LinkIcon, DollarSign } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function EditBusiness() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [bizName, setBizName] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  const [bizAddress, setBizAddress] = useState("");
  const [bizCat, setBizCat] = useState("");
  const [stripeLink, setStripeLink] = useState("");
  const [acceptsApplePay, setAcceptsApplePay] = useState(false);
  const [acceptsCashApp, setAcceptsCashApp] = useState(false);
  const [acceptsZelle, setAcceptsZelle] = useState(false);
  const [acceptsCash, setAcceptsCash] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const saved = localStorage.getItem("kiez_mock_businesses");
    const allBusinesses = saved ? JSON.parse(saved) : [];
    
    const biz = allBusinesses.find((b: any) => b.id === id);
    if (!biz || biz.ownerEmail !== user.email) {
      navigate("/my-businesses");
      return;
    }

    setBizName(biz.name || "");
    setBizDesc(biz.desc || "");
    setBizAddress(biz.address || "");
    setBizCat(biz.cat || "");
    setStripeLink(biz.stripeLink || "");
    setAcceptsApplePay(biz.acceptsApplePay || false);
    setAcceptsCashApp(biz.acceptsCashApp || false);
    setAcceptsZelle(biz.acceptsZelle || false);
    setAcceptsCash(biz.acceptsCash || false);
  }, [id, user, navigate]);

  const handleEditBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bizName || !bizCat) return;

    const saved = localStorage.getItem("kiez_mock_businesses");
    let allBusinesses = saved ? JSON.parse(saved) : [];
    
    allBusinesses = allBusinesses.map((b: any) => {
      if (b.id === id) {
        return {
          ...b,
          name: bizName,
          desc: bizDesc,
          address: bizAddress,
          cat: bizCat,
          stripeLink: stripeLink,
          acceptsApplePay,
          acceptsCashApp,
          acceptsZelle,
          acceptsCash
        };
      }
      return b;
    });
    
    localStorage.setItem("kiez_mock_businesses", JSON.stringify(allBusinesses));
    
    alert("Business successfully updated!");
    navigate("/my-businesses");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Edit Business</h1>
          <p className="mt-2 text-sm text-slate-600">Update your business listing details.</p>
        </div>

        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200">
          <form className="space-y-6" onSubmit={handleEditBusiness}>
            <div className="flex items-center gap-2 mb-6">
              <Building className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Business Details</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business Name *</label>
                <input type="text" required value={bizName} onChange={(e) => setBizName(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                <select required value={bizCat} onChange={(e) => setBizCat(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm bg-white">
                  <option value="">Select a category</option>
                  <option value="home-services">Home Services</option>
                  <option value="outdoor">Outdoor & Property</option>
                  <option value="automotive">Automotive Services</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="events">Events & Creative Services</option>
                  <option value="professional">Professional & Tech Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business Description</label>
                <textarea rows={3} value={bizDesc} onChange={(e) => setBizDesc(e.target.value)} className="block w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business Address / Service Area</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="text" value={bizAddress} onChange={(e) => setBizAddress(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <h3 className="text-md font-semibold text-slate-900">Receive Payments</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">Connect your Stripe Payment Link or list accepted payment methods so customers can pay you directly. Please note Kiez applies a standard $5 service fee to all bookings.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stripe Payment Link URL (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon className="h-4 w-4 text-slate-400" />
                      </div>
                      <input type="url" value={stripeLink} onChange={(e) => setStripeLink(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="https://buy.stripe.com/..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Other Accepted Payment Methods</label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={acceptsApplePay} onChange={(e) => setAcceptsApplePay(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" /> Apple Pay
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={acceptsCashApp} onChange={(e) => setAcceptsCashApp(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" /> CashApp
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={acceptsZelle} onChange={(e) => setAcceptsZelle(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" /> Zelle
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={acceptsCash} onChange={(e) => setAcceptsCash(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" /> Cash / Check
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}