import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export default function Feedback() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [bookingData, setBookingData] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('mppUserBookings') || '[]');
    const currentBooking = bookings.find((b: any) => b.id === token);
    
    if (currentBooking) {
        setBookingData(currentBooking);
        // Jika sudah ada rating, tampilkan
        if (currentBooking.rating) {
            setRating(currentBooking.rating);
        }
        if (currentBooking.feedback) {
            setFeedback(currentBooking.feedback);
        }
    }
  }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({ variant: "destructive", title: "Peringkat diperlukan", description: "Mohon berikan peringkat bintang terlebih dahulu." });
      return;
    }

    // Update data booking di localStorage
    const bookings = JSON.parse(localStorage.getItem('mppUserBookings') || '[]');
    const bookingIndex = bookings.findIndex((b: any) => b.id === token);

    if (bookingIndex > -1) {
        bookings[bookingIndex].rating = rating;
        bookings[bookingIndex].feedback = feedback;
        bookings[bookingIndex].status = "Sudah Dinilai";
        localStorage.setItem('mppUserBookings', JSON.stringify(bookings));
    }
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="w-full max-w-md text-center p-6">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Terima Kasih!</CardTitle>
            <CardDescription className="mt-2 mb-6">
              Penilaian dan masukan Anda sangat berarti untuk meningkatkan kualitas layanan kami.
            </CardDescription>
            <Button onClick={() => navigate('/booking/riwayat')} className="bg-green-600 hover:bg-green-700">
                Kembali ke Riwayat Booking
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (!bookingData) {
      return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="text-center py-12">Loading...</div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          <Card className="border-green-100 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Nilai Pelayanan Kami
              </CardTitle>
              <CardDescription className="text-gray-600">
                Bagaimana pengalaman Anda saat menggunakan layanan berikut?
              </CardDescription>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-sm">
                <p><strong>Layanan:</strong> {bookingData.layanan}</p>
                <p><strong>Jadwal:</strong> {bookingData.tanggal}, Pukul {bookingData.waktu} WIB</p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-center">
                  <label className="text-sm font-medium">Kepuasan Anda</label>
                  <div className="flex justify-center items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-8 w-8 cursor-pointer transition-colors",
                          (hoverRating || rating) >= star
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        )}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="feedback" className="text-sm font-medium">
                    Saran & Masukan (Opsional)
                  </label>
                  <Textarea
                    id="feedback"
                    placeholder="Ceritakan pengalaman Anda lebih detail..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="border-green-200 focus:border-green-500"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                  disabled={rating === 0}
                >
                  Kirim Penilaian
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
