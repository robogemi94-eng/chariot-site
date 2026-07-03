import SEO from "../components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Kiez team. We're here to help customers and businesses with any questions or support."
      />
      <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a question or need support? We're here to help you build stronger connections in your community.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-600 mb-2">For general inquiries and support.</p>
                  <a href="mailto:support@kiez-directory.com" className="text-blue-600 font-medium hover:underline">
                    support@kiez-directory.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-600 mb-2">Available Mon-Fri, 9am - 5pm PST.</p>
                  <a href="tel:+15551234567" className="text-blue-600 font-medium hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                  <p className="text-slate-600">
                    123 Innovation Drive<br/>
                    Suite 400<br/>
                    Murrieta, CA 92562
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    required 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}