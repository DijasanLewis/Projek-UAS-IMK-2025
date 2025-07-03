import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  FileText,
  Calendar,
  Search,
  ChevronRight,
  Shield,
  Building,
  Car,
  CreditCard,
  User,
  Baby,
  Briefcase,
  Home,
  Star,
  CheckCircle,
  AlertCircle,
  Menu,
  X,
  MessageSquare,
  Newspaper,
  LogIn,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Popular services data
  const popularServices = [
    {
      icon: <User className="h-6 w-6" />,
      title: "KTP Elektronik",
      description: "Pembuatan dan perpanjangan KTP",
      category: "Kependudukan",
      estimatedTime: "30 menit",
      available: true,
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Akta Kelahiran",
      description: "Pencatatan kelahiran anak",
      category: "Catatan Sipil",
      estimatedTime: "45 menit",
      available: true,
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Perpanjangan SIM",
      description: "Perpanjangan Surat Izin Mengemudi",
      category: "Kepolisian",
      estimatedTime: "1 jam",
      available: true,
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Izin Usaha",
      description: "Surat Izin Usaha Perdagangan",
      category: "DPMPTSP",
      estimatedTime: "2 jam",
      available: false,
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pembayaran PDAM",
      description: "Pembayaran tagihan air",
      category: "PDAM",
      estimatedTime: "15 menit",
      available: true,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Keterangan Antar Kerja",
      description: "Surat keterangan untuk pindah kerja",
      category: "Disnaker",
      estimatedTime: "1 jam",
      available: true,
    },
  ];

  const categories = [
    { name: "Kependudukan", count: 12, icon: <Users className="h-5 w-5" /> },
    { name: "Perizinan", count: 25, icon: <FileText className="h-5 w-5" /> },
    { name: "Kepolisian", count: 8, icon: <Shield className="h-5 w-5" /> },
    { name: "PDAM", count: 4, icon: <Home className="h-5 w-5" /> },
  ];

  const stats = [
    {
      label: "Total Layanan",
      value: "100+",
      description: "Jenis layanan tersedia",
    },
    {
      label: "Instansi Tergabung",
      value: "22",
      description: "Instansi pemerintah",
    },
    {
      label: "Waktu Operasional",
      value: "08:00-16:00",
      description: "Senin - Jumat",
    },
    { label: "Rating Kepuasan", value: "4.8/5", description: "Dari pengguna" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  KOTA PATRIOT
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Mal Pelayanan Publik
                <span className="block text-yellow-300">Kota Bekasi</span>
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Melayani dengan sepenuh hati untuk masyarakat Kota Bekasi. Akses
                100+ layanan publik dari 22 instansi dalam satu lokasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Daftar Antrian Online
                  </Button>
                </Link>
                <Link to="/layanan">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 border-2 border-white"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Lihat Semua Layanan
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Search */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cari Layanan
              </h3>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari layanan yang Anda butuhkan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-green-200 focus:border-green-500 text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="justify-start text-gray-600 hover:text-green-600 hover:bg-green-50"
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                    <Badge
                      variant="secondary"
                      className="ml-auto text-xs bg-yellow-100 text-green-700"
                    >
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Instansi Tergabung
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              22 instansi pemerintah dan BUMN/BUMD yang melayani di MPP Kota
              Bekasi
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dinas Kependudukan dan Catatan Sipil",
                abbr: "Dukcapil",
                services: "KTP, KK, Akta",
              },
              {
                name: "Dinas Penanaman Modal dan PTSP",
                abbr: "DPMPTSP",
                services: "Izin Usaha, IMB",
              },
              {
                name: "Polres Metro Bekasi Kota",
                abbr: "Polres",
                services: "SIM, SKCK",
              },
              {
                name: "PDAM Tirta Patriot",
                abbr: "PDAM",
                services: "Tagihan Air",
              },
              {
                name: "Dinas Tenaga Kerja",
                abbr: "Disnaker",
                services: "Antar Kerja",
              },
              {
                name: "Badan Pertanahan Nasional",
                abbr: "BPN",
                services: "Sertifikat",
              },
              {
                name: "Dinas Sosial",
                abbr: "Dinsos",
                services: "Bantuan Sosial",
              },
              { name: "Kantor Imigrasi", abbr: "Imigrasi", services: "Paspor" },
              {
                name: "Dinas Pendidikan",
                abbr: "Disdik",
                services: "Pendidikan",
              },
              {
                name: "Dinas Kesehatan",
                abbr: "Dinkes",
                services: "Kesehatan",
              },
              {
                name: "Dinas Perhubungan",
                abbr: "Dishub",
                services: "Transportasi",
              },
              { name: "PLN Bekasi", abbr: "PLN", services: "Listrik" },
            ].map((inst, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow border-green-100"
              >
                <CardContent className="p-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                    {inst.abbr}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">{inst.name}</p>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-yellow-100 text-green-700"
                  >
                    {inst.services}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Visitor Statistics */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4 text-center">
              Statistik Pengunjung
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">
                  1,234
                </div>
                <div className="text-sm text-green-100">Hari Ini</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">
                  8,567
                </div>
                <div className="text-sm text-green-100">Minggu Ini</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">
                  32,891
                </div>
                <div className="text-sm text-green-100">Bulan Ini</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">
                  456,789
                </div>
                <div className="text-sm text-green-100">Total</div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-green-100">
                Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}{" "}
                pukul{" "}
                {new Date().toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan Populer
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Layanan yang paling sering diakses oleh masyarakat Kota Bekasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-green-100"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-3 rounded-lg ${service.available ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      <div
                        className={
                          service.available ? "text-green-600" : "text-gray-400"
                        }
                      >
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={service.available ? "default" : "secondary"}
                        className={service.available ? "bg-green-600" : ""}
                      >
                        {service.available ? "Tersedia" : "Tutup"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-yellow-100 text-green-700 px-2 py-1 rounded text-xs">
                      {service.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.estimatedTime}
                    </div>
                  </div>
                  <Link to={service.available ? "/booking" : "#"}>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!service.available}
                      variant={service.available ? "default" : "secondary"}
                    >
                      {service.available ? "Daftar Antrian" : "Tidak Tersedia"}
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white" id="kontak">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Lokasi & Jam Operasional
              </h3>
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Bekasi Trade Center (BTC) Mall
                        </p>
                        <p className="text-gray-600">
                          Lantai 2, Jl. H.M. Joyo Martono
                        </p>
                        <p className="text-gray-600">
                          Bekasi Timur, Kota Bekasi
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Jam Operasional
                        </p>
                        <p className="text-gray-600">
                          Senin - Jumat: 08:00 - 16:00 WIB
                        </p>
                        <p className="text-gray-600">
                          Sabtu: 08:00 - 12:00 WIB
                        </p>
                        <p className="text-gray-600">Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hubungi Kami
              </h3>
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Telepon</p>
                        <p className="text-gray-600">(021) 8841-1234</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">
                          info@mpp.bekasikota.go.id
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <p className="font-medium text-gray-900">
                        Fasilitas Tersedia
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Ruang Laktasi
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Ruang Bermain Anak
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Ruang Baca
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Coffee Corner
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <Building className="h-6 w-6 text-green-800" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">MPP Kota Bekasi</h4>
                  <p className="text-green-200 text-sm">Mal Pelayanan Publik</p>
                </div>
              </div>
              <p className="text-green-200 mb-4">
                Melayani masyarakat Kota Bekasi dengan layanan publik yang
                mudah, cepat, dan terpercaya dalam semangat Kota Patriot.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">
                  Rating kepuasan: 4.8/5 dari 2,341 pengguna
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Layanan Utama</h5>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-white transition-colors"
                  >
                    KTP Elektronik
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-white transition-colors"
                  >
                    Akta Kelahiran
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-white transition-colors"
                  >
                    Izin Usaha
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-white transition-colors"
                  >
                    Perpanjangan SIM
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Menu</h5>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link
                    to="/berita"
                    className="hover:text-white transition-colors"
                  >
                    Berita
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aduan"
                    className="hover:text-white transition-colors"
                  >
                    Layanan Aduan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/booking"
                    className="hover:text-white transition-colors"
                  >
                    Booking Antrian
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-green-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 Pemerintah Kota Bekasi. Seluruh hak cipta dilindungi
              undang-undang.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors text-sm"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors text-sm"
              >
                Syarat Layanan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
