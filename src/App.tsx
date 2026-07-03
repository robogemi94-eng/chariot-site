import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import BusinessProfile from "./pages/BusinessProfile";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";
import PricingDetail from "./pages/PricingDetail";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import SearchResults from "./pages/SearchResults";
import CityDetail from "./pages/CityDetail";
import CityCategoryDetail from "./pages/CityCategoryDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBusiness from "./pages/AddBusiness";
import MyBusinesses from "./pages/MyBusinesses";
import EditBusiness from "./pages/EditBusiness";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/city/:cityId" element={<CityDetail />} />
            <Route path="/:cityId/:categoryId" element={<CityCategoryDetail />} />
            
            <Route path="/business/:id" element={<BusinessProfile />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/:plan" element={<PricingDetail />} />
            
            <Route path="/chat" element={<Chat />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/add-business" element={<AddBusiness />} />
            <Route path="/my-businesses" element={<MyBusinesses />} />
            <Route path="/edit-business/:id" element={<EditBusiness />} />
            
            {/* Kept for backwards compatibility with previous links */}
            <Route path="/categories/:id" element={<CategoryDetail />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;