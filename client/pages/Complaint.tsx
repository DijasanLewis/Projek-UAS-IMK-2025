import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // Untuk notifikasi
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
} from "@/components/ui/alert-dialog"; // Untuk konfirmasi

const complaintSchema = z.object({
  nama: z.string().min(2, { message: "Nama lengkap harus diisi." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  telepon: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }).regex(/^[0-9]+$/, { message: "Hanya boleh berisi angka." }),
  kategori: z.string({ required_error: "Kategori aduan harus dipilih." }),
  judul: z.string().min(1, { message: "Judul aduan tolong diisi." }),
  deskripsi: z.string().min(1, { message: "Deskripsi aduan tolong diisi." }),
  bukti: z.instanceof(FileList).optional(), // Validasi file bisa lebih kompleks, kita biarkan opsional
});

export default function Complaint() {
  const { user } = useAuth(); // Ambil data pengguna dari konteks
  const [activeTab, setActiveTab] = useState("buat");
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    kategori: "",
    judul: "",
    deskripsi: "",
    bukti: null as File | null,
  });

  const categories = [
    "Pelayanan Staff",
    "Fasilitas",
    "Sistem Online",
    "Waktu Tunggu",
    "Biaya",
    "Lainnya",
  ];

  const complaintHistory = [
    {
      id: "ADU-2024-001",
      judul: "Sistem antrian online error",
      kategori: "Sistem Online",
      status: "Selesai",
      tanggal: "2024-12-08",
      respon:
        "Terima kasih atas laporannya. Masalah telah diperbaiki pada 10 Desember 2024.",
    },
    {
      id: "ADU-2024-002",
      judul: "AC ruang tunggu tidak dingin",
      kategori: "Fasilitas",
      status: "Diproses",
      tanggal: "2024-12-10",
      respon: "Laporan Anda sedang dalam proses perbaikan oleh tim teknis.",
    },
    {
      id: "ADU-2024-003",
      judul: "Pelayanan kurang ramah",
      kategori: "Pelayanan Staff",
      status: "Ditinjau",
      tanggal: "2024-12-12",
      respon:
        "Laporan Anda telah diterima dan sedang ditinjau oleh supervisor.",
    },
  ];

  const [submittedData, setSubmittedData] = useState<z.infer<typeof complaintSchema> | null>(null);
  const [submittedFile, setSubmittedFile] = useState<{ name: string; url: string } | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof complaintSchema>>({
    resolver: zodResolver(complaintSchema),
    mode: "onBlur",
    defaultValues: {
      nama: user?.nama || "",
      email: user?.email || "",
      telepon: user?.telepon || "",
      judul: "",
      deskripsi: "",
    },
  });

  function onComplaintSubmit(values: z.infer<typeof complaintSchema>) {
    console.log("Complaint data:", values);

    // Buat URL sementara jika ada file yang diunggah
    if (values.bukti && values.bukti.length > 0) {
      const file = values.bukti[0];
      const fileUrl = URL.createObjectURL(file);
      setSubmittedFile({ name: file.name, url: fileUrl });
    } else {
      setSubmittedFile(null);
    }
    
    setSubmittedData(values);
    toast({
      title: "✅ Aduan Terkirim",
      description: "Terima kasih, aduan Anda telah berhasil kami terima.",
    });
    form.reset(); 
  }

  // Fungsi  untuk mengirim aduan lain
  const handleSendAnotherComplaint = () => {
    if (submittedFile) {
      URL.revokeObjectURL(submittedFile.url); // Penting untuk mencegah memory leak
    }
    setSubmittedData(null);
    setSubmittedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle complaint submission
    console.log("Complaint data:", formData);
    // Reset form or show success message
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-green-600";
      case "Diproses":
        return "bg-yellow-600";
      case "Ditinjau":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navbar />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg border border-green-100 mb-8">
          <button
            onClick={() => setActiveTab("buat")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "buat"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Buat Aduan
          </button>
          <button
            onClick={() => setActiveTab("riwayat")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "riwayat"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Riwayat Aduan
          </button>
          <button
            onClick={() => setActiveTab("panduan")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "panduan"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Panduan
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "buat" && (
          <Card className="border-green-100 shadow-xl">
          {submittedData ? (
              // Tampilan SETELAH berhasil mengirim aduan
              <CardContent className="p-6 text-center">
                  <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-600 mb-2">
                      Aduan Berhasil Dikirim
                  </CardTitle>
                  <CardDescription className="mb-6">
                      Berikut adalah rincian aduan yang telah Anda kirimkan.
                  </CardDescription>
      
                  <div className="bg-gray-50 border rounded-lg p-4 text-left space-y-2 mb-6">
                      <p><strong>Nama:</strong> {submittedData.nama}</p>
                      <p><strong>Email:</strong> {submittedData.email}</p>
                      <p><strong>Telepon:</strong> {submittedData.telepon}</p>
                      <p><strong>Kategori:</strong> {submittedData.kategori}</p>
                      <p><strong>Judul:</strong> {submittedData.judul}</p>
                      <p><strong>Deskripsi:</strong> {submittedData.deskripsi}</p>

                      {submittedFile && (
                        <div className="pt-2 border-t">
                            <strong>Bukti Terlampir:</strong> {submittedFile.name}
                            <a href={submittedFile.url} target="_blank" rel="noopener noreferrer" className="ml-2">
                                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                                    Buka File
                                </Button>
                            </a>
                        </div>
                      )}
                  </div>
      
                  <Button onClick={handleSendAnotherComplaint} className="bg-green-600 hover:bg-green-700">
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Aduan Lainnya
                  </Button>
              </CardContent>
          ) : (
            // Tampilan formulir SEBELUM mengirim aduan
            <>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                Buat Aduan Baru
              </CardTitle>
              <CardDescription>
                Sampaikan keluhan atau saran Anda untuk pelayanan yang lebih
                baik
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onComplaintSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nama"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nama lengkap" {...field} readOnly className="border-green-200 focus:border-green-500 bg-gray-100" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="nama@email.com" {...field} readOnly className="border-green-200 focus:border-green-500 bg-gray-100" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="telepon"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor Telepon</FormLabel>
                          <FormControl>
                            <Input placeholder="08xxxxxxxxxx" {...field} readOnly className="border-green-200 focus:border-green-500 bg-gray-100" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="kategori"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kategori Aduan</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-green-200 focus:border-green-500">
                                <SelectValue placeholder="Pilih kategori" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="judul"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Judul Aduan</FormLabel>
                        <FormControl>
                            <Input placeholder="Ringkasan singkat aduan Anda" {...field} className="border-green-200 focus:border-green-500" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deskripsi"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Deskripsi Aduan</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Jelaskan detail aduan Anda..."
                                className="border-green-200 focus:border-green-500"
                                rows={5}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                  />

                <FormField
                  control={form.control}
                  name="bukti"
                  render={() => ( // Kita tidak butuh `field` di sini, jadi bisa dihilangkan
                    <FormItem>
                      <FormLabel>Upload Bukti (Opsional)</FormLabel>
                      <FormControl>
                        <Input
                          id="bukti"
                          type="file"
                          accept="image/*,.pdf"
                          className="border-green-200 focus:border-green-500"
                          {...form.register("bukti")} // Gunakan register untuk input file
                        />
                      </FormControl>
                      <p className="text-xs text-gray-500 mt-1">
                        Format: JPG, PNG, PDF. Maksimal 5MB
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">
                        Informasi Penting
                      </h4>
                      <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                        <li>• Aduan akan direspon maksimal 3x24 jam</li>
                        <li>• Berikan informasi yang jelas dan detail</li>
                        <li>• Gunakan bahasa yang sopan dan santun</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                        type="button" // Ubah jadi type="button"
                        className="w-full bg-green-600 hover:bg-green-700"
                        size="lg"
                        >
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Aduan
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Konfirmasi Pengiriman Aduan</AlertDialogTitle>
                        <AlertDialogDescription>
                            Apakah Anda yakin data yang dimasukkan sudah benar dan ingin mengirimkan aduan ini?
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        {/* Tombol ini yang akan men-submit form */}
                        <AlertDialogAction onClick={form.handleSubmit(onComplaintSubmit)}>
                            Ya, Kirim Aduan
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>
                    </form>
                </Form>
            </CardContent>
            </>
            )}
            </Card>
          )}
          
        {activeTab === "riwayat" && (
          <Card className="border-green-100 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Riwayat Aduan
              </CardTitle>
              <CardDescription>
                Pantau status dan tanggapan aduan yang telah Anda kirim
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complaintHistory.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {complaint.judul}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ID: {complaint.id}
                        </p>
                      </div>
                      <Badge className={getStatusColor(complaint.status)}>
                        {complaint.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-yellow-100 text-green-700 px-2 py-1 rounded text-xs">
                        {complaint.kategori}
                      </span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(complaint.tanggal).toLocaleDateString(
                          "id-ID",
                        )}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Tanggapan:</strong> {complaint.respon}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {complaintHistory.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Belum ada aduan
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Anda belum pernah mengirim aduan
                  </p>
                  <Button
                    onClick={() => setActiveTab("buat")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Buat Aduan Pertama
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "panduan" && (
          <Card className="border-green-100 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-green-600" />
                Panduan Layanan Aduan
              </CardTitle>
              <CardDescription>
                Pelajari cara menggunakan layanan aduan dengan efektif
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Cara Membuat Aduan
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Klik tab "Buat Aduan"</li>
                    <li>Isi semua data yang diperlukan dengan benar</li>
                    <li>Pilih kategori yang sesuai</li>
                    <li>Berikan deskripsi yang jelas dan detail</li>
                    <li>Upload bukti jika diperlukan</li>
                    <li>Klik "Kirim Aduan"</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Kategori Aduan
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="bg-green-50 border border-green-200 rounded-lg p-3"
                      >
                        <h4 className="font-medium text-green-800">
                          {category}
                        </h4>
                        <p className="text-sm text-green-700 mt-1">
                          {category === "Pelayanan Staff" &&
                            "Keluhan tentang sikap atau kinerja petugas"}
                          {category === "Fasilitas" &&
                            "Masalah terkait fasilitas fisik MPP"}
                          {category === "Sistem Online" &&
                            "Kendala pada aplikasi atau website"}
                          {category === "Waktu Tunggu" &&
                            "Keluhan tentang lamanya waktu pelayanan"}
                          {category === "Biaya" &&
                            "Pertanyaan atau keluhan tentang tarif layanan"}
                          {category === "Lainnya" &&
                            "Aduan yang tidak masuk kategori lain"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Status Aduan
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-blue-600">Ditinjau</Badge>
                      <span className="text-gray-700">
                        Aduan telah diterima dan sedang ditinjau
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-yellow-600">Diproses</Badge>
                      <span className="text-gray-700">
                        Aduan sedang dalam proses penyelesaian
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-600">Selesai</Badge>
                      <span className="text-gray-700">
                        Aduan telah diselesaikan
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        Komitmen Pelayanan
                      </h4>
                      <ul className="text-sm text-green-700 mt-2 space-y-1">
                        <li>• Respon maksimal 3x24 jam</li>
                        <li>• Tindak lanjut yang transparan</li>
                        <li>• Konfirmasi melalui email dan SMS</li>
                        <li>• Perlindungan data pribadi terjamin</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Kontak Alternatif
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                          aduan@mpp.bekasikota.go.id
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
