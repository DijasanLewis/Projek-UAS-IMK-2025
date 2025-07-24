import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Landmark, ChevronRight, FileText, Target, BookOpen, Quote } from "lucide-react";
import { agencyData } from "@/lib/agency-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AgencyProfile() {
  const { slug } = useParams<{ slug: string }>();
  
  const agency = agencyData.find(inst => inst.slug === slug);

  if (!agency) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold">Instansi Tidak Ditemukan</h1>
          <Link to="/" className="text-green-600 hover:underline mt-4 inline-block">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Beranda
        </Link>
        
        <Card className="overflow-hidden">
          <CardHeader className="text-center bg-gray-50 p-8">
             <div className="mx-auto bg-green-100 p-4 rounded-full w-fit mb-4">
                <Landmark className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">{agency.name}</CardTitle>
            <CardDescription className="text-lg text-gray-600">{agency.category}</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
                {agency.description && (
                    <div className="pb-4">
                        <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-3"><BookOpen className="h-5 w-5 mr-3 text-green-600" /> Tentang Instansi</h4>
                        <p className="text-gray-600 ml-8 text-justify">{agency.description}</p>
                    </div>
                )}
                <Accordion type="multiple" className="w-full" defaultValue={['visi', 'misi']}>
                    {agency.vision && (
                        <AccordionItem value="visi">
                            <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:no-underline">
                                <div className="flex items-center"><Target className="h-5 w-5 mr-3 text-green-600" /> Visi</div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-11 text-base text-gray-600 italic">
                                "{agency.vision}"
                            </AccordionContent>
                        </AccordionItem>
                    )}
                    {agency.mission && (
                         <AccordionItem value="misi">
                            <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:no-underline">
                                <div className="flex items-center"><FileText className="h-5 w-5 mr-3 text-green-600" /> Misi</div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-11 text-base text-gray-600 prose max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: agency.mission }} />
                            </AccordionContent>
                        </AccordionItem>
                    )}
                    {agency.motto && (
                         <AccordionItem value="motto">
                            <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:no-underline">
                                <div className="flex items-center"><Quote className="h-5 w-5 mr-3 text-green-600" /> Motto</div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-11 text-base text-gray-600 italic">
                                "{agency.motto}"
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>
            </div>

            {agency.services && agency.services.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Layanan Tersedia</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {agency.services.map((service) => {
                            const Icon = service.icon; // <-- Buat variabel komponen dengan huruf kapital
                            return (
                                <Card key={service.id} className="border-green-100 flex flex-col">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="p-3 rounded-lg bg-green-100 text-green-600">
                                                <Icon className="h-6 w-6" /> 
                                            </div>
                                            <Badge variant={service.available ? "default" : "secondary"} className={service.available ? "bg-green-600" : ""}>
                                                {service.available ? "Tersedia" : "Tutup"}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg pt-2">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                         <Link to={service.available ? `/booking?layanan=${encodeURIComponent(service.title)}` : "#"} className="w-full">
                                            <Button
                                                className="w-full bg-green-600 hover:bg-green-700"
                                                disabled={!service.available}
                                            >
                                                Daftar Antrian
                                                <ChevronRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}