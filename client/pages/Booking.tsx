import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Fuse from 'fuse.js';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building,
  Calendar,
  Clock,
  User,
  FileText,
  CheckCircle,
  AlertTriangle,
  Search,
} from "lucide-react";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("layanan");

  // Langsung ke langkah 2 jika layanan sudah dipilih dari URL
  const [currentStep, setCurrentStep] = useState(serviceFromUrl ? 2 : 1);
  const [formData, setFormData] = useState({
    layanan: serviceFromUrl || "",
    tanggal: "",
    waktu: "",
    nama: "",
    nik: "",
    telepon: "",
    email: "",
    keperluan: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  // State untuk menyimpan slot waktu yang tersedia
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const services = [
    { id: "KTP Elektronik", name: "KTP Elektronik", category: "Kependudukan", estimatedTime: "30 menit", available: true },
    { id: "Akta Kelahiran", name: "Akta Kelahiran", category: "Catatan Sipil", estimatedTime: "45 menit", available: true },
    { id: "Perpanjangan SIM", name: "Perpanjangan SIM", category: "Kepolisian", estimatedTime: "1 jam", available: true },
    { id: "Izin Usaha Perdagangan", name: "Izin Usaha Perdagangan", category: "DPMPTSP", estimatedTime: "2 jam", available: false },
    { id: "Pembayaran PDAM", name: "Pembayaran PDAM", category: "PDAM", estimatedTime: "15 menit", available: true },
    { id: "Keterangan Antar Kerja", name: "Keterangan Antar Kerja", category: "Disnaker", estimatedTime: "1 jam", available: true },
    { id: "SKCK", name: "SKCK", category: "Kepolisian", estimatedTime: "2 jam", available: true },
    { id: "Izin Keramaian", name: "Izin Keramaian", category: "Kepolisian", estimatedTime: "3 hari", available: true },
    { id: "Sertifikat Tanah", name: "Sertifikat Tanah", category: "BPN", estimatedTime: "1 minggu", available: true },
    { id: "Izin Mendirikan Bangunan", name: "Izin Mendirikan Bangunan", category: "DPMPTSP", estimatedTime: "2 minggu", available: true },
    { id: "Kartu Keluarga", name: "Kartu Keluarga", category: "Kependudukan", estimatedTime: "45 menit", available: true },
    { id: "Akta Kematian", name: "Akta Kematian", category: "Catatan Sipil", estimatedTime: "30 menit", available: true },
  ];

  const allTimeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  ];

  // useEffect untuk memfilter waktu yang sudah lewat hari ini
  useEffect(() => {
    if (!formData.tanggal) {
      setAvailableTimeSlots(allTimeSlots);
      return;
    }

    const now = new Date();
    const selectedDate = new Date(formData.tanggal);
    
    // Reset jam, menit, detik untuk perbandingan tanggal saja
    now.setHours(0, 0, 0, 0);
    // Tambahkan penanganan zona waktu agar perbandingan tanggal akurat
    const selectedDateLocal = new Date(selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000);
    selectedDateLocal.setHours(0, 0, 0, 0);

    if (selectedDateLocal.getTime() > now.getTime()) {
      // Jika tanggal yang dipilih adalah di masa depan, semua slot tersedia
      setAvailableTimeSlots(allTimeSlots);
    } else if (selectedDateLocal.getTime() === now.getTime()) {
      // Jika tanggal yang dipilih adalah hari ini, filter waktu yang sudah lewat
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      const filteredSlots = allTimeSlots.filter(slot => {
        const [slotHours, slotMinutes] = slot.split(':').map(Number);
        if (slotHours > currentHours) {
          return true;
        }
        if (slotHours === currentHours && slotMinutes > currentMinutes) {
          return true;
        }
        return false;
      });
      setAvailableTimeSlots(filteredSlots);
    } else {
      // Jika tanggal yang dipilih di masa lalu
      setAvailableTimeSlots([]);
    }
  }, [formData.tanggal]);


  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    // Jika melewati langkah pertama, kembali ke halaman layanan
    if (currentStep === 2 && serviceFromUrl) {
        window.history.back();
        return;
    }
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking data:", formData);
    setCurrentStep(4); // Success step
  };

  const fuse = new Fuse(services, {
    keys: ['name', 'category'], // Cari berdasarkan nama dan kategori
    threshold: 0.4,
  });

  const filteredServices = searchTerm.trim()
      ? fuse.search(searchTerm).map(result => result.item)
      : services;

  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navbar />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step ? "bg-green-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="border-green-100 shadow-xl">
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-600" />
                    Pilih Layanan
                </CardTitle>
                <CardDescription>
                    Pilih layanan yang ingin Anda akses atau cari di bawah ini
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Kolom Pencarian Baru */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Cari layanan..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-500"
                    />
                </div>

                {/* Daftar Layanan Dinamis */}
                <div className="grid gap-4">
                  {displayedServices.map((service) => (
                    <div
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.layanan === service.id
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      } ${!service.available ? "opacity-50" : ""}`}
                      onClick={() => {
                        if (service.available) {
                          setFormData({ ...formData, layanan: service.id });
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Estimasi waktu: {service.estimatedTime}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-green-700"
                          >
                            {service.category}
                          </Badge>
                          <Badge
                            variant={
                              service.available ? "default" : "secondary"
                            }
                            className={service.available ? "bg-green-600" : ""}
                          >
                            {service.available ? "Tersedia" : "Tutup"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tombol Tampilkan Semua/Sedikit dan Lanjutkan */}
                <div className="flex justify-between items-center mt-6">
                    {filteredServices.length > 3 && (
                        <Button
                            variant="link"
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="text-green-600 p-0"
                        >
                            {showAllServices ? "Tampilkan lebih sedikit" : "Tampilkan semua layanan"}
                        </Button>
                    )}
                    <div className="flex-grow"></div> {/* Spacer */}
                    <Button
                        onClick={nextStep}
                        disabled={!formData.layanan}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        Lanjutkan
                    </Button>
                </div>

              </CardContent>
            </>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  Pilih Jadwal
                </CardTitle>
                <CardDescription>
                  Pilih tanggal dan waktu kunjungan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="tanggal" className="text-sm font-medium">
                      Tanggal Kunjungan
                    </Label>
                    <Input
                      id="tanggal"
                      type="date"
                      value={formData.tanggal}
                      onChange={(e) =>
                        setFormData({ ...formData, tanggal: e.target.value, waktu: "" }) // Reset waktu jika tanggal berubah
                      }
                      className="border-green-200 focus:border-green-500"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="waktu" className="text-sm font-medium">
                      Waktu Kunjungan
                    </Label>
                    <Select
                      value={formData.waktu}
                      onValueChange={(value) =>
                        setFormData({ ...formData, waktu: value })
                      }
                      disabled={!formData.tanggal || availableTimeSlots.length === 0}
                    >
                      <SelectTrigger className="border-green-200 focus:border-green-500">
                        <SelectValue placeholder={!formData.tanggal ? "Pilih tanggal dulu" : availableTimeSlots.length === 0 ? "Jadwal penuh/lewat" : "Pilih waktu"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time} WIB
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">
                        Informasi Penting
                      </h4>
                      <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                        <li>
                          • Harap datang 15 menit sebelum waktu yang dipilih
                        </li>
                        <li>
                          • Bawa dokumen asli dan fotokopi yang diperlukan
                        </li>
                        <li>• Batalkan booking jika tidak bisa hadir</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="border-green-600 text-green-600"
                  >
                    Kembali
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.tanggal || !formData.waktu}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Lanjutkan
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-green-600" />
                  Data Pemohon
                </CardTitle>
                <CardDescription>
                  Lengkapi data diri untuk booking antrian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nama" className="text-sm font-medium">
                        Nama Lengkap
                      </Label>
                      <Input
                        id="nama"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={formData.nama}
                        onChange={(e) =>
                          setFormData({ ...formData, nama: e.target.value })
                        }
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nik" className="text-sm font-medium">
                        NIK
                      </Label>
                      <Input
                        id="nik"
                        type="text"
                        placeholder="16 digit NIK"
                        value={formData.nik}
                        onChange={(e) => setFormData({ ...formData, nik: e.target.value.replace(/\D/g, '') })}
                        className="border-green-200 focus:border-green-500"
                        maxLength={16}
                        minLength={16}
                        pattern="\d{16}"
                        title="NIK harus terdiri dari 16 digit angka."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telepon" className="text-sm font-medium">
                        Nomor Telepon
                      </Label>
                      <Input
                        id="telepon"
                        type="text"
                        placeholder="Contoh: 08123456789"
                        value={formData.telepon}
                        onChange={(e) => setFormData({ ...formData, telepon: e.target.value.replace(/\D/g, '') })}
                        className="border-green-200 focus:border-green-500"
                        pattern="[0-9]+"
                        title="Nomor telepon hanya boleh berisi angka."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="keperluan" className="text-sm font-medium">
                      Keperluan (Opsional)
                    </Label>
                    <Textarea
                      id="keperluan"
                      placeholder="Jelaskan keperluan atau informasi tambahan"
                      value={formData.keperluan}
                      onChange={(e) =>
                        setFormData({ ...formData, keperluan: e.target.value })
                      }
                      className="border-green-200 focus:border-green-500"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-green-600 text-green-600"
                    >
                      Kembali
                    </Button>
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Buat Booking
                    </Button>
                  </div>
                </form>
              </CardContent>
            </>
          )}

          {currentStep === 4 && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">
                  Booking Berhasil!
                </CardTitle>
                <CardDescription>
                  Antrian Anda telah berhasil dibuat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Detail Booking Anda:
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Kode Booking:</strong> MPP-2024-001234
                    </p>
                    <p>
                      <strong>Layanan:</strong>{" "}
                      {services.find((s) => s.id === formData.layanan)?.name}
                    </p>
                    <p>
                      <strong>Tanggal:</strong> {new Date(formData.tanggal).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p>
                      <strong>Waktu:</strong> {formData.waktu} WIB
                    </p>
                    <p>
                      <strong>Nama:</strong> {formData.nama}
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Langkah Selanjutnya:
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Simpan kode booking Anda</li>
                    <li>• Konfirmasi akan dikirim via email dan SMS</li>
                    <li>• Datang 15 menit sebelum waktu booking</li>
                    <li>• Bawa dokumen yang diperlukan</li>
                  </ul>
                </div>

                <div className="flex justify-center space-x-4">
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      Kembali ke Beranda
                    </Button>
                  </Link>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Download Tiket
                  </Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}