import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    layanan: "",
    tanggal: "",
    waktu: "",
    nama: "",
    nik: "",
    telepon: "",
    email: "",
    keperluan: "",
  });

  const services = [
    {
      id: "ktp",
      name: "KTP Elektronik",
      category: "Kependudukan",
      estimatedTime: "30 menit",
      available: true,
    },
    {
      id: "akta-lahir",
      name: "Akta Kelahiran",
      category: "Catatan Sipil",
      estimatedTime: "45 menit",
      available: true,
    },
    {
      id: "sim",
      name: "Perpanjangan SIM",
      category: "Kepolisian",
      estimatedTime: "1 jam",
      available: true,
    },
    {
      id: "izin-usaha",
      name: "Izin Usaha",
      category: "DPMPTSP",
      estimatedTime: "2 jam",
      available: false,
    },
  ];

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking data:", formData);
    setCurrentStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Booking Antrian
                </h1>
                <p className="text-xs text-green-600 font-medium">
                  MPP Kota Bekasi
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  Pilih layanan yang ingin Anda akses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {services.map((service) => (
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
                <div className="flex justify-end mt-6">
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
                        setFormData({ ...formData, tanggal: e.target.value })
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
                    >
                      <SelectTrigger className="border-green-200 focus:border-green-500">
                        <SelectValue placeholder="Pilih waktu" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
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
                        placeholder="Nomor Induk Kependudukan"
                        value={formData.nik}
                        onChange={(e) =>
                          setFormData({ ...formData, nik: e.target.value })
                        }
                        className="border-green-200 focus:border-green-500"
                        maxLength={16}
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
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.telepon}
                        onChange={(e) =>
                          setFormData({ ...formData, telepon: e.target.value })
                        }
                        className="border-green-200 focus:border-green-500"
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
                      <strong>Tanggal:</strong> {formData.tanggal}
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
