import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Landmark,
  FileText,
  Calendar,
  Search,
  ChevronRight,
  Shield,
  Users,
  Receipt,
  LucideProps,
} from "lucide-react";
import { allServicesList, Service } from "@/lib/service-data";
import { agencyData } from "@/lib/agency-data";
import React from "react";

const ServiceCardSkeleton = () => (
    <Card className="border-green-100">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-3/4 mt-2 rounded" />
        <Skeleton className="h-4 w-1/2 mt-1 rounded" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-5 w-24 rounded" />
          <Skeleton className="h-5 w-20 rounded" />
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
  
  export default function Index() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Service[]>([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
  
    // Mengambil 6 layanan pertama sebagai layanan populer
    const popularServices: Service[] = allServicesList.slice(0, 6);
  
    const fuse = new Fuse(allServicesList, {
      keys: ['title'],
      includeScore: true,
      threshold: 0.4,
    });
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }, []);
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      if (query.length > 2) {
        const results = fuse.search(query);
        setSuggestions(results.map(result => result.item).slice(0, 5));
      } else {
        setSuggestions([]);
      }
    };
  
    const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/layanan?q=${searchQuery}`);
      }
    };
  
    const categories = [
      { name: "Kependudukan", count: 4, icon: <Users className="h-5 w-5" />, category: "Disdukcapil" },
      { name: "Perizinan", count: 4, icon: <FileText className="h-5 w-5" />, category: "DPMPTSP" },
      { name: "Kepolisian", count: 2, icon: <Shield className="h-5 w-5" />, category: "Polres" },
      { name: "Pajak & Retribusi", count: 8, icon: <Receipt className="h-5 w-5" />, category: "Bapenda" },
    ];
  
    const agencyCategories = [
        "Kementerian/Lembaga",
        "Pemerintah Provinsi",
        "Pemerintah Daerah",
        "BUMN",
        "BUMD",
        "Perbankan"
    ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    Mal Pelayanan Publik
                    <span className="block text-yellow-300">Kota Bekasi</span>
                </h2>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                    Akses 50+ layanan dari 28 instansi dalam satu lokasi terpadu. Mudah, cepat, dan nyaman.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/booking">
                    <Button size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-300 font-semibold">
                        <Calendar className="h-5 w-5 mr-2" />
                        Daftar Antrian Online
                    </Button>
                    </Link>
                    <Link to="/layanan">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 border-2 border-white">
                        <FileText className="h-5 w-5 mr-2" />
                        Lihat Semua Layanan
                    </Button>
                    </Link>
                </div>
                </div>

                {/* Quick Search */}
                <div className="bg-white rounded-2xl p-6 shadow-xl relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Cari Layanan
                </h3>
                <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
                    <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Contoh: KTP, SIM, Paspor..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="pl-10 border-green-200 focus:border-green-500 text-gray-900 placeholder:text-gray-500"
                    />
                    </div>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Cari
                    </Button>
                </form>

                {suggestions.length > 0 && (
                    <div className="absolute top-full left-6 right-6 mt-1 z-10 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-2">
                        {suggestions.map((service) => {
                        const Icon = service.icon;
                        return (
                            <li key={service.id}>
                            <Link
                                to={`/layanan?q=${service.title}`}
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setSearchQuery("")}
                            >
                                <span className="text-green-600"><Icon className="h-6 w-6" /></span>
                                <span>{service.title}</span>
                            </Link>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                    <Link key={category.name} to={`/layanan?kategori=${category.category}`}>
                        <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-600 hover:text-green-600 hover:bg-green-50"
                        >
                        {category.icon}
                        <span className="ml-2">{category.name}</span>
                        <Badge variant="secondary" className="ml-auto text-xs bg-yellow-100 text-green-700">
                            {category.count}
                        </Badge>
                        </Button>
                    </Link>
                    ))}
                </div>
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
              Layanan yang paling sering diakses oleh masyarakat Kota Bekasi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            ) : (
                popularServices.map((service) => {
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
                        <Badge variant={service.available ? "default" : "secondary"} className={service.available ? "bg-green-600" : ""}>
                          {service.available ? "Tersedia" : "Tutup"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg pt-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="bg-yellow-100 text-green-700 px-2 py-1 rounded text-xs">
                          {service.category}
                        </span>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.estimatedTime}
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
                                {service.available ? "Daftar Antrian" : "Tidak Tersedia"}
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                );
              })
            )}
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
              28 instansi dari berbagai tingkatan siap melayani Anda di MPP Kota Bekasi.
            </p>
          </div>
          
          <Tabs defaultValue={agencyCategories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto">
                {agencyCategories.map(category => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
            </TabsList>
            {agencyCategories.map(category => (
                <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-6">
                        {agencyData.filter(inst => inst.category === category).map((inst) => (
                        <Link to={`/instansi/${inst.slug}`} key={inst.slug}>
                            <Card
                            className="text-center h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out border-green-100"
                            >
                            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <Landmark className="h-6 w-6 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm text-center">
                                {inst.name}
                                </h4>
                            </CardContent>
                            </Card>
                        </Link>
                        ))}
                    </div>
                </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-green-200 text-sm">
                © 2024 Pemerintah Kota Bekasi. Seluruh hak cipta dilindungi undang-undang.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                    to="/kebijakan-privasi"
                    className="text-green-200 hover:text-white transition-colors text-sm"
                >
                    Kebijakan Privasi
                </Link>
                <Link
                    to="/syarat-layanan"
                    className="text-green-200 hover:text-white transition-colors text-sm"
                >
                    Syarat Layanan
                </Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
