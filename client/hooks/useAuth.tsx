import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Definisikan tipe data untuk pengguna
interface User {
  nik: string;
  nama: string;
  email: string;
  telepon: string;
}

// Definisikan tipe untuk konteks
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// Buat konteks
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Buat provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek localStorage saat aplikasi pertama kali dimuat
    const storedUser = localStorage.getItem('mppUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('mppUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('mppUser');
    setUser(null);
    navigate('/'); // Arahkan ke beranda setelah logout
  };

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Buat custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}