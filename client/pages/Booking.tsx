import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  Calendar,
  User,
  FileText,
  CheckCircle,
  AlertTriangle,
  Search,
  Building,
  MapPin
} from "lucide-react";
import { allServicesList } from "@/lib/service-data";

const formSchema = z.object({
  nama: z.string().min(2, { message: "Nama lengkap harus diisi." }),
  nik: z.string().regex(/^\d{16}$/, { message: "NIK harus terdiri dari 16 digit angka." }),
  telepon: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }).regex(/^[0-9]+$/, { message: "Hanya boleh berisi angka." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  lokasi: z.string({ required_error: "Lokasi pelayanan harus dipilih." }),
  keperluan: z.string().optional(),
});

export default function Booking() {
  const { user } = useAuth(); 
  
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("layanan");
  const selectedServiceData = allServicesList.find(s => s.title === serviceFromUrl);

  const [currentStep, setCurrentStep] = useState(serviceFromUrl ? 2 : 1);
  const [formData, setFormData] = useState({
    id: "", // Akan diisi saat submit
    layanan: serviceFromUrl || "",
    instansi: selectedServiceData?.category || "",
    tanggal: "",
    waktu: "",
    nama: "",
    nik: "",
    telepon: "",
    email: "",
    lokasi: "",
    keperluan: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
        nama: user?.nama || "",
        nik: user?.nik || "",
        telepon: user?.telepon || "",
        email: user?.email || "",
        lokasi: "",
        keperluan: "",
    },
  });

  function onFormSubmit(values: z.infer<typeof formSchema>) {
    const uniqueId = `MPP-${Date.now().toString().slice(-6)}`;
    const finalData = { ...formData, ...values, id: uniqueId, status: "Akan Datang" };
    
    const bookings = JSON.parse(localStorage.getItem('mppUserBookings') || '[]');
    bookings.push(finalData);
    localStorage.setItem('mppUserBookings', JSON.stringify(bookings));
    
    setFormData(finalData);
    console.log("Booking data:", finalData);
    setCurrentStep(4);
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const services = allServicesList;

  const allTimeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  ];
  
  const lokasiPelayanan = ["Lokasi 1", "Lokasi 2", "Lokasi 3", "Lokasi 4", "Lokasi 5", "Lokasi 6"];

  useEffect(() => {
    if (!formData.tanggal) {
      setAvailableTimeSlots(allTimeSlots);
      return;
    }

    const now = new Date();
    const selectedDate = new Date(formData.tanggal);
    
    now.setHours(0, 0, 0, 0);
    const selectedDateLocal = new Date(selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000);
    selectedDateLocal.setHours(0, 0, 0, 0);

    if (selectedDateLocal.getTime() > now.getTime()) {
      setAvailableTimeSlots(allTimeSlots);
    } else if (selectedDateLocal.getTime() === now.getTime()) {
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      const filteredSlots = allTimeSlots.filter(slot => {
        const [slotHours, slotMinutes] = slot.split(':').map(Number);
        if (slotHours > currentHours) return true;
        if (slotHours === currentHours && slotMinutes > currentMinutes) return true;
        return false;
      });
      setAvailableTimeSlots(filteredSlots);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [formData.tanggal]);


  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 2 && serviceFromUrl) {
        window.history.back();
        return;
    }
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const fuse = new Fuse(services, {
    keys: ['title', 'category'],
    threshold: 0.4,
  });

  const filteredServices = searchTerm.trim()
      ? fuse.search(searchTerm).map(result => result.item)
      : services;

  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navbar />
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
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Cari layanan..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-500"
                    />
                </div>

                <div className="grid gap-4">
                  {displayedServices.map((service) => (
                    <div
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.layanan === service.title
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      } ${!service.available ? "opacity-50" : ""}`}
                      onClick={() => {
                        if (service.available) {
                          setFormData({ ...formData, layanan: service.title, instansi: service.category });
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {service.title}
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

                <div className="flex justify-between items-center mt-6">
                    {filteredServices.length > 6 && (
                        <Button
                            variant="link"
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="text-green-600 p-0"
                        >
                            {showAllServices ? "Tampilkan lebih sedikit" : "Tampilkan semua layanan"}
                        </Button>
                    )}
                    <div className="flex-grow"></div>
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
                        setFormData({ ...formData, tanggal: e.target.value, waktu: "" })
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
                  Lengkapi data diri untuk menyelesaikan booking antrian.
              </CardDescription>
            </CardHeader>
            <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <FormItem>
                        <FormLabel>Instansi</FormLabel>
                        <Input value={formData.instansi} readOnly className="bg-gray-100"/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Jenis Pelayanan</FormLabel>
                        <Input value={formData.layanan} readOnly className="bg-gray-100"/>
                    </FormItem>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="nama" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl><Input placeholder="Masukkan nama lengkap" {...field} readOnly className="bg-gray-100"/></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="nik" render={({ field }) => (
                        <FormItem>
                            <FormLabel>NIK</FormLabel>
                            <FormControl><Input placeholder="16 digit NIK" {...field} readOnly className="bg-gray-100" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="telepon" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Telepon</FormLabel>
                            <FormControl><Input placeholder="Contoh: 08123456789" {...field} readOnly className="bg-gray-100" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl><Input placeholder="nama@email.com" {...field} readOnly className="bg-gray-100" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                
                <FormField control={form.control} name="lokasi" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Lokasi Pelayanan</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="border-green-200 focus:border-green-500">
                                <SelectValue placeholder="Pilih lokasi pelayanan" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {lokasiPelayanan.map(lokasi => (
                                    <SelectItem key={lokasi} value={lokasi}>{lokasi}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="keperluan" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Keperluan (Opsional)</FormLabel>
                        <FormControl><Textarea placeholder="Jelaskan keperluan atau informasi tambahan" className="border-green-200 focus:border-green-500" rows={3} {...field}/></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <div className="flex justify-between mt-6 pt-2">
                    <Button type="button" variant="outline" onClick={prevStep} className="border-green-600 text-green-600">
                    Kembali
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Buat Booking
                    </Button>
                </div>
                </form>
            </Form>
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
                  Antrian Anda telah berhasil dibuat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Detail Booking Anda:
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Kode Booking:</strong> {formData.id}
                    </p>
                    <p>
                      <strong>Layanan:</strong> {formData.layanan}
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
                    <p>
                      <strong>Lokasi:</strong> {formData.lokasi}
                    </p>
                  </div>
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
                  <Link to="/booking/riwayat">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Lihat Riwayat Booking
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}