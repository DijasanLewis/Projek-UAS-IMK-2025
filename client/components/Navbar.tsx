import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth"; // Import useAuth
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"; // Import AlertDialog
import { Building, Calendar, LogIn, LogOut, User, Menu, X } from "lucide-react"; // Import LogOut & User

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth(); // Gunakan hook

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/layanan", label: "Layanan" },
    { path: "/berita", label: "Berita" },
    { path: "/panduan", label: "Panduan" },
    { path: "/aduan", label: "Aduan" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                MPP Kota Bekasi
              </h1>
              <p className="text-xs text-green-600 font-medium">
                Mal Pelayanan Publik
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-gray-900 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Link to="/profil">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profil
                  </Button>
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Keluar
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Konfirmasi Keluar</AlertDialogTitle>
                      <AlertDialogDescription>
                        Apakah Anda yakin ingin keluar dari akun Anda?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction onClick={logout} className="bg-red-500 hover:bg-red-600">Ya, Keluar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Masuk
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Daftar Antrian
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium ${
                    isActive(item.path) ? "text-green-600" : "text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link to="/profil" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profil
                      </Button>
                    </Link>
                    {/* Logout di mobile tidak perlu dialog agar lebih cepat */}
                    <Button onClick={() => { logout(); setIsMenuOpen(false); }} variant="outline" className="w-full justify-start border-red-500 text-red-500">
                      <LogOut className="h-4 w-4 mr-2" />
                      Keluar
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-green-600 text-green-600"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Masuk
                      </Button>
                    </Link>
                    <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        size="sm"
                        className="w-full justify-start bg-green-600 hover:bg-green-700"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Daftar Antrian
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}