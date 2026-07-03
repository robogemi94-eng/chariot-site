import { useParams, Link } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, CreditCard, ChevronRight, CheckCircle, ShieldCheck } from "lucide-react";

export default function Booking() {
  const { id } = useParams();

  // In a real app, fetch details by id
  const business = { name: "Sparkle Cleaners", service: "Standard Cleaning", price: 120 };
  const platformFee = 5;
  const total = business.price + platformFee;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center text-sm text-slate-500 gap-2 mb-8">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/business/${id}`} className="hover:text-slate-900">{business.name}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium">Book Service</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">Book your service</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                Date & Time
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Date</label>
                  <div className="relative">
                    <CalendarIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="date" className="w-full pl-10 p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-700" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Time</label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select className="w-full pl-10 p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-700 appearance-none">
                      <option>9:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>3:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
                Your Details
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Address</label>
                  <input type="text" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Street Address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="City" />
                  <input type="text" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Zip Code" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Special Instructions (Optional)</label>
                  <textarea rows={3} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">3</span>
                Payment
              </h2>
              
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl mb-6 flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">Your payment is secure. You won't be charged until the service is completed to your satisfaction.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Card Details</label>
                <div className="relative">
                  <CreditCard className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Card Number" className="w-full pl-10 p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-700 mb-3" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  <input type="text" placeholder="CVC" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg">
              Confirm Booking - ${total}
            </button>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full md:w-80 shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Booking Summary</h3>
              
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-xs text-slate-400">Logo</div>
                <div>
                  <p className="font-semibold text-slate-900">{business.name}</p>
                  <p className="text-sm text-slate-500">{business.service}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm border-t border-slate-100 pt-4 mb-4">
                <div className="flex justify-between text-slate-600">
                  <span>Service Cost</span>
                  <span>${business.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-1">
                    Platform Fee
                    <span className="relative group cursor-help">
                      <CheckCircle className="w-3 h-3 text-slate-400" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded hidden group-hover:block z-10">
                        Helps us maintain the platform and provide 24/7 support.
                      </div>
                    </span>
                  </span>
                  <span>${platformFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 flex justify-between items-center font-bold text-lg text-slate-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}