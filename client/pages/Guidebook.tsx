import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";
import Fuse from 'fuse.js';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  category: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    category: "Pendaftaran Antrian",
    items: [
      { question: "Bagaimana cara mendaftar antrian online?", answer: "Anda dapat mendaftar dengan mengklik tombol 'Daftar Antrian' di Beranda atau memilih layanan di halaman 'Layanan', lalu ikuti 3 langkah mudah: pilih layanan, pilih jadwal, dan isi data diri Anda." },
      { question: "Apakah saya bisa memilih jadwal di hari yang sama?", answer: "Bisa, selama masih ada slot waktu yang tersedia dan belum melewati jam operasional pada hari tersebut." },
      { question: "Apa yang harus saya lakukan setelah berhasil booking?", answer: "Anda akan mendapatkan kode booking. Silakan datang ke MPP 15 menit sebelum jadwal, tunjukkan kode booking Anda ke petugas di meja depan." },
      { question: "Bagaimana jika saya ingin membatalkan atau mengubah jadwal?", answer: "Saat ini, fitur pembatalan atau ubah jadwal harus dilakukan dengan menghubungi call center kami. Fitur ini akan kami kembangkan di pembaruan selanjutnya." }
    ]
  },
  {
    category: "Akun Pengguna",
    items: [
      { question: "Apakah saya harus membuat akun untuk mendaftar antrian?", answer: "Tidak, saat ini pendaftaran antrian tidak memerlukan akun. Namun, dengan memiliki akun, Anda dapat melihat riwayat layanan Anda." },
      { question: "Bagaimana cara mendaftar akun baru?", answer: "Klik tombol 'Masuk' di pojok kanan atas, lalu pilih 'Daftar sekarang'. Isi formulir pendaftaran dengan data yang valid." },
      { question: "Saya lupa kata sandi, apa yang harus saya lakukan?", answer: "Pada halaman Login, klik tautan 'Lupa password?'. Anda akan diminta memasukkan NIK atau email terdaftar untuk proses pemulihan kata sandi." },
    ]
  },
  {
    category: "Layanan Aduan & Feedback",
    items: [
      { question: "Bagaimana cara mengirim aduan?", answer: "Buka halaman 'Aduan', isi formulir dengan lengkap dan detail, lalu klik 'Kirim Aduan'. Anda akan diminta konfirmasi sebelum aduan benar-benar dikirim." },
      { question: "Di mana saya bisa memberikan penilaian layanan?", answer: "Setelah Anda berhasil melakukan booking, Anda akan mendapatkan tautan unik ke halaman feedback di halaman konfirmasi. Tautan ini juga akan dikirimkan ke email Anda. Anda bisa memberikan penilaian setelah jadwal temu Anda selesai." },
    ]
  }
];

// Komponen untuk menyorot teks yang cocok
const HighlightedText = ({ text = "", highlight = "" }: { text?: string; highlight?: string }) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    text.replace(regex, (match, p1, offset) => {
        // Tambahkan bagian string sebelum kecocokan saat ini (jika ada)
        if (offset > lastIndex) {
            parts.push(<span key={`unhighlighted-${lastIndex}`}>{text.substring(lastIndex, offset)}</span>);
        }
        // Tambahkan bagian yang disorot
        parts.push(
            <mark key={`highlighted-${offset}`} className="bg-yellow-200 px-0 rounded-sm">
                {p1}
            </mark>
        );
        // Perbarui lastIndex ke akhir kecocokan saat ini
        lastIndex = offset + match.length;
        return match; // Mengembalikan match agar replace() dapat terus memproses string
    });

    // Tambahkan sisa string setelah kecocokan terakhir (jika ada)
    if (lastIndex < text.length) {
        parts.push(<span key={`unhighlighted-end`}>{text.substring(lastIndex)}</span>);
    }

    return <>{parts}</>;
};

export default function Guidebook() {
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = useMemo(() => new Fuse(faqData.flatMap(c => c.items.map(item => ({ ...item, category: c.category }))), {
    keys: ['question', 'answer'],
    includeScore: true,
    threshold: 0.4,
  }), []);
  
  const searchResults = useMemo(() => {
    if (!searchTerm) return faqData;

    const results = fuse.search(searchTerm);
    const categorizedResults: { [key: string]: FAQCategory } = {};

    results.forEach(({ item }) => {
      if (!categorizedResults[item.category]) {
        categorizedResults[item.category] = { category: item.category, items: [] };
      }
      categorizedResults[item.category].items.push({ question: item.question, answer: item.answer });
    });

    return Object.values(categorizedResults);
  }, [searchTerm, fuse]);

  return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                        <HelpCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Pusat Bantuan & Panduan</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Temukan jawaban dari pertanyaan Anda di sini.
                    </p>
                </div>

                <div className="relative mb-8 max-w-lg mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Ketik pertanyaan Anda... (misal: 'lupa password')"
                        className="w-full pl-12 h-12 text-base border-green-200 focus:border-green-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="space-y-8">
                    {searchResults.map((categoryData) => (
                        <div key={categoryData.category}>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                                {categoryData.category}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {categoryData.items.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        {/* Ubah kelas di AccordionTrigger */}
                                        <AccordionTrigger 
                                            // Hapus flex-1 atau flex-grow jika Shadcn menambahkannya secara default
                                            // Atau pastikan konten di dalamnya tidak merentang.
                                            // Contoh penyesuaian:
                                            className="flex justify-between items-center text-left hover:no-underline w-full"
                                            // Jika masih ada spasi, mungkin tambahkan `gap-x-1` atau sesuaikan layout internalnya
                                        >
                                            <span className="flex-none"> {/* Tambahkan wrapper span untuk mengontrol flex */}
                                                <HighlightedText text={item.question} highlight={searchTerm} />
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="prose max-w-none">
                                            <HighlightedText text={item.answer} highlight={searchTerm} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                    {searchResults.length === 0 && (
                        <p className="text-center text-gray-500">Tidak ada hasil yang cocok untuk "{searchTerm}". Coba kata kunci lain.</p>
                    )}
                </div>
            </div>
        </div>
    );
}