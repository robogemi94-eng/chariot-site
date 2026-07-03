import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star, MapPin, Clock, MessageSquare, Globe, Phone, Mail, ChevronRight, CheckCircle, CreditCard, DollarSign } from "lucide-react";
import SEO from "../components/SEO";

export default function BusinessProfile() {
  const { id } = useParams();
  const [business, setBusiness] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("kiez_mock_businesses");
    const allBusinesses = saved ? JSON.parse(saved) : [];
    
    // Find business by id
    const found = allBusinesses.find((b: any) => b.id === id) || allBusinesses[parseInt(id || "0")];
    
    if (found) {
      setBusiness({
        ...found,
        rating: 5.0,
        reviews: 1,
        phone: "(555) 123-4567",
        website: "https://example.com",
        email: found.ownerEmail || "hello@example.com",
        about: found.desc || "Quality services for your everyday needs. Contact us today for a free quote.",
        services: [
          { name: "Consultation / Estimate", price: "Free", duration: "30 mins" },
          { name: "Standard Service", price: "Varies", duration: "1-2 hours" }
        ],
        hours: [
          { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
          { day: "Saturday", time: "9:00 AM - 4:00 PM" }
        ],
        features: ["Verified Pro", "Locally Owned"]
      });
    }
  }, [id]);

  if (!business) {
    return (
      <div className="bg-slate-50 min-h-screen py-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Business Not Found</h1>
        <p className="text-slate-500 mb-6">This business profile does not exist or has not been added yet.</p>
        <Link to="/categories" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl transition-colors">
          Browse Categories
        </Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "image": "https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg",
    "description": business.about,
    "telephone": business.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.location
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": business.rating.toString(),
      "reviewCount": business.reviews.toString()
    }
  };

  return (
    <>
      <SEO 
        title={`${business.name} - ${business.category}`} 
        description={business.about} 
        schema={schema}
      />
      <article className="bg-slate-50 min-h-screen pb-20">
        {/* Header/Hero */}
        <header className="bg-slate-900 text-white pt-10 pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center text-sm text-slate-400 gap-2 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/categories/home-services" className="hover:text-white">{business.category}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-200" aria-current="page">{business.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-white rounded-2xl p-2 shrink-0 shadow-lg">
                <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  Logo
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{business.name}</h1>
                  <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Pro
                  </div>
                </div>
                <h2 className="text-slate-300 text-lg mb-4 font-normal">{business.category}</h2>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-white text-base">{business.rating}</span>
                    <span className="text-slate-300">({business.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4" /> {business.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <section className="flex-1 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
                <p className="text-slate-600 leading-relaxed">{business.about}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {business.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Services & Pricing</h3>
                <div className="space-y-4">
                  {business.services.map(svc => (
                    <div key={svc.name} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <h4 className="font-semibold text-slate-900">{svc.name}</h4>
                        <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" /> Est. {svc.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">{svc.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Methods</h3>
                <div className="flex flex-wrap gap-4">
                  {business.stripeLink && (
                    <a href={business.stripeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl transition-colors">
                      <CreditCard className="w-5 h-5" /> Pay with Card
                    </a>
                  )}
                  {business.acceptsApplePay && (
                    <button onClick={() => alert('Apple Pay integration coming soon!')} className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white font-medium px-4 py-2 rounded-xl transition-colors">
                      <CreditCard className="w-5 h-5" /> Apple Pay
                    </button>
                  )}
                  {business.acceptsCashApp && (
                    <a href="https://cash.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-xl transition-colors">
                      <DollarSign className="w-5 h-5" /> CashApp
                    </a>
                  )}
                  {business.acceptsZelle && (
                    <button onClick={() => alert('Zelle payment info requested from business.')} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-xl transition-colors">
                      <DollarSign className="w-5 h-5" /> Zelle
                    </button>
                  )}
                  {business.acceptsCash && (
                    <div className="flex items-center gap-2 bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-xl">
                      <DollarSign className="w-5 h-5 text-slate-500" /> Cash / Check
                    </div>
                  )}
                  {!business.stripeLink && !business.acceptsApplePay && !business.acceptsCashApp && !business.acceptsZelle && !business.acceptsCash && (
                    <p className="text-sm text-slate-500">Contact business for accepted payment methods.</p>
                  )}
                </div>
              </div>
            </section>

            <aside className="w-full lg:w-80 shrink-0 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ready to book?</h3>
                <p className="text-sm text-slate-500 mb-6">Secure your spot with {business.name} today.</p>
                
                <Link to={`/booking/${id}`} className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors mb-4">
                  Book Now
                </Link>

                <Link to="/chat" className="w-full block text-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message Business
                </Link>
                
                <p className="text-xs text-center text-slate-500 border-b border-slate-100 pb-4 mb-4">
                  Includes $5 platform fee
                </p>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <a href="#" className="hover:text-blue-600">{business.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <a href="#" className="hover:text-blue-600">{business.website}</a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Business Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    {business.hours.map(h => (
                      <div key={h.day} className="flex justify-between text-slate-600">
                        <span>{h.day}</span>
                        <span className="font-medium text-slate-900">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </article>
    </>
  );
}