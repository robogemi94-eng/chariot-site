import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { MapPin, Wrench, Scissors, Camera, Monitor, Car, Trees, ChevronRight, Star } from "lucide-react";

export default function CityDetail() {
  const { cityId } = useParams();
  
  // Format city name for display (e.g., "lake-elsinore" -> "Lake Elsinore")
  const cityName = cityId ? cityId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'City';

  const categories = [
    { id: "plumbers", name: "Plumbers", icon: Wrench },
    { id: "landscaping", name: "Landscaping", icon: Trees },
    { id: "car-detailing", name: "Car Detailing", icon: Car },
    { id: "massage-therapy", name: "Massage Therapy", icon: Scissors },
    { id: "house-cleaning", name: "House Cleaning", icon: Wrench },
  ];

  return (
    <>
      <SEO 
        title={`Top Local Businesses in ${cityName}, CA`} 
        description={`Find the best and most trusted local businesses in ${cityName}. Browse categories, read reviews, and book services instantly on Kiez.`} 
      />
      <div className="bg-slate-50 min-h-screen">
        <header className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center text-sm text-slate-400 gap-2 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-200" aria-current="page">{cityName}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <MapPin className="w-10 h-10 text-blue-500" />
              Local Services in {cityName}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Connect with trusted, verified local professionals right in your neighborhood. From home services to auto repair, Kiez has you covered in {cityName}.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Categories in {cityName}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link to={`/${cityId}/${cat.id}`} key={cat.id} className="block group">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all text-center h-full flex flex-col items-center justify-center gap-4">
                    <cat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform stroke-[1.5]" />
                    <h3 className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Newest Businesses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Link to={`/business/${i}`} key={i} className="group block">
                  <article className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Local Pro {i}</h3>
                      <div className="flex items-center text-xs font-medium text-yellow-600 gap-1 bg-yellow-50 px-2 py-1 rounded">
                        <Star className="w-3 h-3 fill-yellow-500" /> New Listing
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">Serving {cityName} and surrounding areas with top quality services.</p>
                    <div className="mt-auto text-sm text-blue-600 font-medium group-hover:underline">
                      View Profile &rarr;
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Are you a business owner in {cityName}?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join the Kiez network to get discovered by local customers searching for your services right now.
            </p>
            <Link to="/pricing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              List Your Business
            </Link>
          </section>

        </main>
      </div>
    </>
  );
}