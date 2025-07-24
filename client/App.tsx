import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";  
import Profile from "./pages/Profile"; 
import ForgotPassword from "./pages/ForgotPassword";
import Booking from "./pages/Booking";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Complaint from "./pages/Complaint";
import Feedback from "./pages/Feedback";
import Guidebook from "./pages/Guidebook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    // Arahkan ke login, simpan lokasi asal agar bisa kembali setelah login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/berita" element={<News />} />
          <Route path="/berita/:slug" element={<NewsDetail />} />
          <Route path="/panduan" element={<Guidebook />} />
          <Route path="/feedback/:token" element={<Feedback />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
          <Route path="/syarat-layanan" element={<TermsOfService />} />
          <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
          <Route path="/aduan" element={<ProtectedRoute><Complaint /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
