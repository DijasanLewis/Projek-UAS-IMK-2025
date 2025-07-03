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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Building,
  Search,
  Clock,
  User,
  Baby,
  Car,
  CreditCard,
  Briefcase,
  Shield,
  FileText,
  Home,
  Calendar,
  ChevronRight,
  Filter,
} from "lucide-react";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const allServices = [
    {
      id: 1,
      icon: <User className="h-6 w-6" />,
      title: "KTP Elektronik",
      description: "Pembuatan dan perpanjangan Kartu Tanda Penduduk elektronik",
      category: "Kependudukan",
      estimatedTime: "30 menit",
      requirements: ["Surat Pengantar RT/RW", "Kartu Keluarga", "Foto 4x6"],
      available: true,
      code: "KTP-001",
    },
    {
      id: 2,
      icon: <Baby className="h-6 w-6" />,
      title: "Akta Kelahiran",
      description: "Pencatatan kelahiran anak dan penerbitan akta kelahiran",
      category: "Catatan Sipil",
      estimatedTime: "45 menit",
      requirements: [
        "Surat Kelahiran dari RS",
        "KTP Orang Tua",
        "Kartu Keluarga",
      ],
      available: true,
      code: "AKT-001",
    },
    {
      id: 3,
      icon: <Car className="h-6 w-6" />,
      title: "Perpanjangan SIM",
      description: "Perpanjangan Surat Izin Mengemudi A dan C",
      category: "Kepolisian",
      estimatedTime: "1 jam",
      requirements: ["SIM Lama", "KTP", "Tes Kesehatan"],
      available: true,
      code: "SIM-001",
    },
    {
      id: 4,
      icon: <Building className="h-6 w-6" />,
      title: "Izin Usaha Perdagangan",
      description: "Surat Izin Usaha Perdagangan untuk usaha kecil menengah",
      category: "DPMPTSP",
      estimatedTime: "2 jam",
      requirements: ["KTP", "NPWP", "Surat Keterangan Domisili"],
      available: false,
      code: "IUP-001",
    },
    {
      id: 5,
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pembayaran PDAM",
      description: "Pembayaran tagihan air PDAM Tirta Patriot",
      category: "PDAM",
      estimatedTime: "15 menit",
      requirements: ["Tagihan PDAM", "Uang Cash/Debit"],
      available: true,
      code: "PDM-001",
    },
    {
      id: 6,
      icon: <Briefcase className="h-6 w-6" />,
      title: "Keterangan Antar Kerja",
      description: "Surat keterangan untuk pindah kerja antar daerah",
      category: "Disnaker",
      estimatedTime: "1 jam",
      requirements: ["KTP", "Surat Dari Perusahaan", "Paklaring"],
      available: true,
      code: "DAK-001",
    },
    {
      id: 7,
      icon: <Shield className="h-6 w-6" />,
      title: "SKCK",
      description: "Surat Keterangan Catatan Kepolisian",
      category: "Kepolisian",
      estimatedTime: "2 jam",
      requirements: ["KTP", "Kartu Keluarga", "Pas Foto 4x6"],
      available: true,
      code: "SKCK-001",
    },
    {
      id: 8,
      icon: <FileText className="h-6 w-6" />,
      title: "Izin Keramaian",
      description: "Izin untuk mengadakan acara atau keramaian",
      category: "Kepolisian",
      estimatedTime: "3 hari",
      requirements: [
        "Surat Permohonan",
        "KTP Penanggung Jawab",
        "Proposal Acara",
      ],
      available: true,
      code: "IKR-001",
    },
    {
      id: 9,
      icon: <Home className="h-6 w-6" />,
      title: "Sertifikat Tanah",
      description: "Pengurusan sertifikat hak milik tanah",
      category: "BPN",
      estimatedTime: "1 minggu",
      requirements: ["Girik", "PBB", "Surat Ukur"],
      available: true,
      code: "SRT-001",
    },
    {
      id: 10,
      icon: <FileText className="h-6 w-6" />,
      title: "Izin Mendirikan Bangunan",
      description: "IMB untuk pembangunan rumah atau gedung",
      category: "DPMPTSP",
      estimatedTime: "2 minggu",
      requirements: ["Gambar Bangunan", "Sertifikat Tanah", "NPWP"],
      available: true,
      code: "IMB-001",
    },
    {
      id: 11,
      icon: <User className="h-6 w-6" />,
      title: "Kartu Keluarga",
      description: "Pembuatan dan perubahan Kartu Keluarga",
      category: "Kependudukan",
      estimatedTime: "45 menit",
      requirements: [
        "KTP Kepala Keluarga",
        "Akta Nikah",
        "Akta Kelahiran Anak",
      ],
      available: true,
      code: "KK-001",
    },
    {
      id: 12,
      icon: <FileText className="h-6 w-6" />,
      title: "Akta Kematian",
      description: "Pencatatan kematian dan penerbitan akta kematian",
      category: "Catatan Sipil",
      estimatedTime: "30 menit",
      requirements: ["Surat Kematian dari RS", "KTP Almarhum", "KTP Pelapor"],
      available: true,
      code: "AKM-001",
    },
  ];

  const categories = [
    "Semua",
    "Kependudukan",
    "Catatan Sipil",
    "Kepolisian",
    "DPMPTSP",
    "PDAM",
    "Disnaker",
    "BPN",
  ];

  const filteredServices = allServices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-green-200 focus:border-green-500 text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48 border-green-200 focus:border-green-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Services Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredServices.length} dari {allServices.length}{" "}
            layanan
            {selectedCategory !== "Semua" &&
              ` dalam kategori ${selectedCategory}`}
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="border-green-100 hover:shadow-lg transition-shadow cursor-pointer"
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
                    <div className="flex flex-col items-end space-y-2">
                      <Badge
                        variant={service.available ? "default" : "secondary"}
                        className={service.available ? "bg-green-600" : ""}
                      >
                        {service.available ? "Tersedia" : "Tutup"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {service.code}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-yellow-100 text-green-700 px-2 py-1 rounded text-xs">
                        {service.category}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.estimatedTime}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Persyaratan:
                      </h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={service.available ? "/booking" : "#"}>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!service.available}
                        variant={service.available ? "default" : "secondary"}
                      >
                        {service.available
                          ? "Daftar Antrian"
                          : "Tidak Tersedia"}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada layanan ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter kategori
              </p>
            </CardContent>
          </Card>
        )}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg border border-green-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Statistik Layanan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {allServices.filter((s) => s.available).length}
              </div>
              <div className="text-sm text-gray-600">Layanan Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">22</div>
              <div className="text-sm text-gray-600">Instansi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4.8/5</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
