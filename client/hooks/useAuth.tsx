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

// Fungsi untuk menambahkan data awal (seeding) untuk pengujian
const seedInitialData = () => {
  const bookings = localStorage.getItem('mppUserBookings');
  // Hanya tambahkan data jika localStorage kosong
  if (!bookings || JSON.parse(bookings).length === 0) {
      const pastDate1 = new Date();
      pastDate1.setDate(pastDate1.getDate() - 5); // 5 hari yang lalu
      const pastDate2 = new Date();
      pastDate2.setDate(pastDate2.getDate() - 2); // 2 hari yang lalu

      const initialBookings = [
          {
              id: "MPP-1721400001",
              layanan: "PERPANJANGAN SURAT IZIN MENGEMUDI",
              instansi: "Polres",
              tanggal: pastDate1.toISOString().split('T')[0], // Format YYYY-MM-DD
              waktu: "10:30",
              lokasi: "Lokasi 2",
              nama: "BUDI SANTOSO",
              nik: "3275010101900001",
              telepon: "081234567890",
              email: "budi.santoso@example.com",
              keperluan: "Perpanjang SIM A",
              status: "Selesai" // Status awal
          },
          {
              id: "MPP-1721400002",
              layanan: "AKTA KELAHIRAN",
              instansi: "Disdukcapil",
              tanggal: pastDate2.toISOString().split('T')[0], // Format YYYY-MM-DD
              waktu: "14:00",
              lokasi: "Lokasi 1",
              nama: "BUDI SANTOSO",
              nik: "3275010101900001",
              telepon: "081234567890",
              email: "budi.santoso@example.com",
              keperluan: "Membuat akta untuk anak pertama.",
              status: "Selesai" // Status awal
          }
      ];
      localStorage.setItem('mppUserBookings', JSON.stringify(initialBookings));
      console.log("Initial booking data has been seeded for testing.");
  }
};

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
    seedInitialData();
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