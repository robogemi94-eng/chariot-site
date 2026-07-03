import { Link } from "react-router-dom";
import { CheckCircle, Zap, Star, Shield, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Grow your local business</h1>
          <p className="text-xl text-slate-600">
            Join Kiez to get discovered by real customers in your area. Choose the visibility plan that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 transition-colors cursor-pointer group">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Basic</h3>
            <p className="text-slate-500 text-sm mb-6">Get started and build your online presence.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">Free</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span>Business listing only</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span>Appears in search results</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span>Basic messaging access</span>
              </li>
            </ul>
            
            <Link to="/pricing/basic" className="w-full block text-center py-3 px-4 bg-slate-100 group-hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors">
              View Basic Details
            </Link>
          </div>

          {/* Boosted */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-xl flex flex-col relative transform md:-translate-y-4 hover:shadow-2xl transition-all cursor-pointer group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Zap className="w-4 h-4 fill-white" /> Popular
            </div>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Boosted</h3>
            <p className="text-slate-500 text-sm mb-6">Stand out and get more bookings.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$9.99</span>
              <span className="text-slate-500">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Higher ranking in search</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Better visibility in categories</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Small Profile Badge</span>
              </li>
            </ul>
            
            <Link to="/pricing/boosted" className="w-full block text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              View Boosted Details
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg flex flex-col relative cursor-pointer group hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-slate-400 text-sm mb-6">Dominate your local market.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$24.99</span>
              <span className="text-slate-400">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-300">
                <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="font-semibold text-white">Top priority ranking</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="font-semibold text-white">Featured placement</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Highlighted listing</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Star className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Homepage exposure</span>
              </li>
            </ul>
            
            <Link to="/pricing/pro" className="w-full block text-center py-3 px-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl transition-colors">
              View Pro Details
            </Link>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Fair Platform Fees</h3>
            <p className="text-slate-600 text-lg mb-4">
              We only charge a flat <strong>$5 platform fee</strong> per booking, paid by the customer. You keep 100% of your service price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}