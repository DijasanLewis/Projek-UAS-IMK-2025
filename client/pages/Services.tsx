import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <h1 className="text-lg font-semibold text-gray-900">
              Layanan Publik
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-yellow-100 p-3 rounded-full w-fit mb-4">
              <Construction className="h-8 w-8 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl">
              Halaman Dalam Pengembangan
            </CardTitle>
            <CardDescription className="text-lg">
              Halaman daftar layanan lengkap sedang dalam proses pengembangan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Sementara ini, Anda dapat mengakses layanan populer melalui
              beranda atau mendaftar antrian langsung di MPP Kota Bekasi.
            </p>
            <Link to="/">
              <Button>Kembali ke Beranda</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
