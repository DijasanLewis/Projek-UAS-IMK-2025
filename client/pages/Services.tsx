import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Fuse from 'fuse.js';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  Search,
  Clock,
  ChevronRight,
  Filter,
  FileText,
} from "lucide-react";
import { allServicesList } from "@/lib/service-data";

export default function Services() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("kategori") || "Semua";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const fuse = new Fuse(allServicesList, {
    keys: ['title', 'description', 'category'],
    threshold: 0.4,
  });

  const categories = [
    "Semua",
    "Disdukcapil", "Polres", "Samsat", "BPN", "DPMPTSP", "Bapenda", "Dinkes", "Disnaker",
    "Imigrasi", "Kemenkumham", "Bea Cukai", "DJP", "Kejaksaan", "Pengadilan Agama",
    "Pengadilan Negeri", "BUMN", "BUMD", "BPJS", "Perbankan", "Umum"
  ];

  const filteredServices = (() => {
    const searchedServices = searchQuery.trim()
      ? fuse.search(searchQuery).map(result => result.item)
      : allServicesList;

    return searchedServices.filter((service) => {
      return selectedCategory === "Semua" || service.category === selectedCategory;
    });
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari layanan (contoh: KTP, SIM, Paspor)"
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
            Menampilkan {filteredServices.length} dari {allServicesList.length}{" "}
            layanan
            {selectedCategory !== "Semua" &&
              ` dalam kategori ${selectedCategory}`}
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                    <Card
                        key={service.id}
                        className="border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer flex flex-col"
                    >
                        <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className={`p-3 rounded-lg ${service.available ? "bg-green-100" : "bg-gray-100"}`}>
                            <div className={service.available ? "text-green-600" : "text-gray-400"}>
                                <Icon className="h-6 w-6" />
                            </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                            <Badge variant={service.available ? "default" : "secondary"} className={service.available ? "bg-green-600" : ""}>
                                {service.available ? "Tersedia" : "Tutup"}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                                {service.code}
                            </Badge>
                            </div>
                        </div>
                        <CardTitle className="text-lg pt-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
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
                        </div>
                        </CardContent>
                        <CardFooter>
                        <Link to={service.available ? `/booking?layanan=${encodeURIComponent(service.title)}` : "#"} className="w-full">
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
                        </CardFooter>
                    </Card>
                );
            })}
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
      </div>
    </div>
  );
}
