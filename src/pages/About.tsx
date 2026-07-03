import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { Users, Shield, MapPin } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Kiez, the local business directory dedicated to connecting customers with trusted local businesses in their community."
      />
      <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Kiez</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We are on a mission to build stronger connections and better communities by linking neighbors with trusted local professionals.
            </p>
          </header>

          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Kiez (pronounced "keets") is a German word that translates to a tight-knit neighborhood or community. We founded this platform because we believed that finding a reliable local professional shouldn't be a shot in the dark. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you need a plumber, a landscaper, or a mobile mechanic, Kiez makes it easy to discover, message, and book verified experts right in your own backyard.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Community First</h3>
              <p className="text-sm text-slate-500">Built for neighbors, by neighbors. We prioritize local growth.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Trust & Safety</h3>
              <p className="text-sm text-slate-500">Every business is verified. Real reviews from real people.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hyper-Local</h3>
              <p className="text-sm text-slate-500">Focusing on your exact city and service area.</p>
            </div>
          </div>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to join the neighborhood?</h2>
            <div className="flex justify-center gap-4">
              <Link to="/categories" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Find Services
              </Link>
              <Link to="/pricing" className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors">
                List Your Business
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}