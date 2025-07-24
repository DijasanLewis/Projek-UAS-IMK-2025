import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Calendar, Clock, Star, XCircle, CheckCircle, Hourglass, Edit } from "lucide-react";
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
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

type Booking = {
  id: string;
  layanan: string;
  instansi: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  status: "Akan Datang" | "Selesai" | "Sudah Dinilai";
  rating?: number; // Tambahkan properti rating
};

export default function BookingHistory() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('mppUserBookings') || '[]');
    
    const now = new Date();
    const updatedBookings = storedBookings.map((booking: any) => {
        const bookingDateTime = new Date(`${booking.tanggal}T${booking.waktu}`);
        
        // Cek apakah sudah ada rating
        if (booking.rating) {
            return { ...booking, status: "Sudah Dinilai" };
        }
        // Cek apakah waktu booking sudah lewat
        if (bookingDateTime < now) {
            return { ...booking, status: "Selesai" };
        }
        return { ...booking, status: "Akan Datang" };
    });
    setBookings(updatedBookings);
  }, []);

  const handleCancelBooking = (bookingId: string) => {
    const updatedBookings = bookings.filter(b => b.id !== bookingId);
    localStorage.setItem('mppUserBookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    toast({ title: "✅ Booking Dibatalkan", description: "Jadwal antrian Anda telah berhasil dibatalkan." });
  };

  const getStatusComponent = (booking: Booking) => {
    switch (booking.status) {
      case "Akan Datang":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200"><Hourglass className="h-3 w-3 mr-1"/>Akan Datang</Badge>;
      case "Selesai":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="h-3 w-3 mr-1"/>Selesai</Badge>;
      case "Sudah Dinilai":
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < (booking.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-green-100 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="h-6 w-6 mr-2 text-green-600" />
              Riwayat Booking Antrian
            </CardTitle>
            <CardDescription>
              Lihat semua riwayat pendaftaran antrian Anda di sini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 grid md:grid-cols-3 gap-4 items-center">
                      <div className="md:col-span-2 space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{booking.layanan}</h3>
                            {getStatusComponent(booking)}
                        </div>
                        <p className="text-sm text-gray-600">{booking.instansi} - {booking.lokasi}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 pt-2">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" /> {booking.tanggal}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {booking.waktu} WIB
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        {booking.status === 'Akan Datang' && (
                           <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" className="w-full md:w-auto">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Batalkan
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Batalkan Booking?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Tindakan ini tidak dapat diurungkan. Anda yakin ingin membatalkan jadwal antrian untuk layanan <strong>{booking.layanan}</strong>?
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Tidak</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleCancelBooking(booking.id)} className="bg-red-600 hover:bg-red-700">Ya, Batalkan</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialog>
                        )}
                        {booking.status === 'Selesai' && (
                          <Link to={`/feedback/${booking.id}`}>
                            <Button size="sm" className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600">
                              <Star className="h-4 w-4 mr-2" />
                              Beri Penilaian
                            </Button>
                          </Link>
                        )}
                        {booking.status === 'Sudah Dinilai' && (
                           <Link to={`/feedback/${booking.id}`}>
                            <Button variant="outline" size="sm" className="w-full md:w-auto">
                              <Edit className="h-4 w-4 mr-2" />
                              Ubah Penilaian
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Tidak Ada Riwayat Booking
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Anda belum pernah membuat pendaftaran antrian.
                  </p>
                  <Link to="/booking">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Buat Booking Pertama Anda
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
