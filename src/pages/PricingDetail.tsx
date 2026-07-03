import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function PricingDetail() {
  const { plan } = useParams();
  const { user } = useAuth();

  const details: Record<string, any> = {
    basic: {
      name: "Basic Plan",
      price: "Free",
      description: "A great starting point for new businesses.",
      features: ["Business listing", "Appears in standard search results", "Basic messaging capabilities", "Accept bookings with standard $5 customer fee"],
      link: "https://buy.stripe.com/test_fZu6oA7DgboMeUK95saZi00"
    },
    boosted: {
      name: "Boosted Plan",
      price: "$9.99/mo",
      description: "Stand out in search and get more eyes on your services.",
      features: ["Everything in Basic", "Higher ranking in search results", "Better visibility in category pages", "Verified Profile badge"],
      link: "https://buy.stripe.com/test_eVq7sE4r4eAYbIygxUaZi01"
    },
    pro: {
      name: "Pro Plan",
      price: "$24.99/mo",
      description: "Dominate your local market with maximum visibility.",
      features: ["Everything in Boosted", "Top priority ranking in search", "Featured placement in categories", "Highlighted custom listing", "Increased homepage exposure in 'Hot Businesses'"],
      link: "https://buy.stripe.com/test_cNi6oAaPsakI5ka1D0aZi02"
    }
  };

  const currentPlan = details[plan as string] || details.basic;

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/pricing" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Plans
        </Link>
        
        <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{currentPlan.name}</h1>
            <p className="text-lg text-slate-600 mb-6">{currentPlan.description}</p>
            <div className="text-3xl font-bold text-slate-900">{currentPlan.price}</div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-6">What's included:</h3>
          <ul className="space-y-4 mb-10">
            {currentPlan.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          
          {user && user.plan === plan ? (
            <div className="w-full inline-flex justify-center items-center bg-slate-200 text-slate-700 font-bold py-4 rounded-xl cursor-default">
              Current Plan
            </div>
          ) : plan === 'basic' ? (
            <Link to="/signup" className="w-full inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
              Create Free Account
            </Link>
          ) : !user ? (
            <Link to="/signup" className="w-full inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
              Log in to Subscribe
            </Link>
          ) : (
            <a href={currentPlan.link} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
              Subscribe to {currentPlan.name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}