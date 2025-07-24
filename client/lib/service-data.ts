import {
    User, Baby, Car, CreditCard, Briefcase, Shield, FileText, Home,
    Heart, BookUser, Mail, FileQuestion, Landmark, Receipt, GraduationCap,
    BriefcaseBusiness, MessageSquare, FileUp, TrendingUp, Phone, Banknote,
    Stamp, Library, Scale, Wifi, Gavel, LucideProps
  } from "lucide-react";
import React from "react";
  
  export type Service = {
    id: number;
    icon: React.ComponentType<LucideProps>; // Tipe yang benar untuk komponen ikon
    title: string;
    description: string;
    category: string;
    estimatedTime: string;
    requirements: string[];
    available: boolean;
    code: string;
  };
  
  export const allServicesList: Service[] = [
      { id: 5, icon: User, title: "KTP-EL", description: "Pembuatan dan perpanjangan KTP-Elektronik.", category: "Disdukcapil", estimatedTime: "30 menit", requirements: ["Surat Pengantar RT/RW", "Kartu Keluarga"], available: true, code: "DUK-01" },
      { id: 6, icon: Baby, title: "AKTA KELAHIRAN", description: "Pencatatan dan penerbitan akta kelahiran.", category: "Disdukcapil", estimatedTime: "45 menit", requirements: ["Surat Kelahiran", "KTP Orang Tua"], available: true, code: "DUK-02" },
      { id: 7, icon: Heart, title: "LANSIA", description: "Pelayanan khusus untuk lanjut usia.", category: "Disdukcapil", estimatedTime: "20 menit", requirements: ["KTP Lansia"], available: true, code: "DUK-03" },
      { id: 110, icon: FileText, title: "AKTA KEMATIAN", description: "Pencatatan dan penerbitan akta kematian.", category: "Disdukcapil", estimatedTime: "40 menit", requirements: ["Surat Kematian", "KTP Almarhum"], available: true, code: "DUK-04" },
      { id: 18, icon: Car, title: "PERPANJANGAN SURAT IZIN MENGEMUDI", description: "Perpanjangan SIM A dan C.", category: "Polres", estimatedTime: "1 jam", requirements: ["SIM Lama", "KTP"], available: true, code: "POL-01" },
      { id: 19, icon: Shield, title: "PERPANJANGAN SKCK", description: "Surat Keterangan Catatan Kepolisian.", category: "Polres", estimatedTime: "45 menit", requirements: ["SKCK Lama", "KTP"], available: true, code: "POL-02" },
      { id: 21, icon: BookUser, title: "PENERBITAN DAN PERPANJANGAN KARTU AK.1", description: "Kartu Pencari Kerja (Kartu Kuning).", category: "Disnaker", estimatedTime: "30 menit", requirements: ["Ijazah", "KTP"], available: true, code: "NAKER-01" },
      { id: 24, icon: BookUser, title: "PEMBUATAN PASPOR BARU DAN PERGANTIAN HABIS BERLAKU", description: "Layanan pembuatan dan perpanjangan paspor.", category: "Imigrasi", estimatedTime: "2 jam", requirements: ["KTP", "KK", "Akta Lahir/Ijazah"], available: true, code: "IM-01" },
      { id: 34, icon: FileUp, title: "PENGAMBILAN PASPOR", description: "Pengambilan paspor yang telah selesai diproses.", category: "Imigrasi", estimatedTime: "15 menit", requirements: ["Bukti Pembayaran", "KTP"], available: true, code: "IM-02" },
      { id: 26, icon: Receipt, title: "PAJAK TAHUNAN KENDARAAN BERMOTOR", description: "Pembayaran pajak tahunan untuk motor dan mobil.", category: "Samsat", estimatedTime: "20 menit", requirements: ["STNK", "KTP Asli"], available: true, code: "SAM-01" },
      { id: 27, icon: Home, title: "PENINGKATAN HAK (PEMBERIAN HAK MILIK PERORANGAN)", description: "Layanan peningkatan hak atas tanah.", category: "BPN", estimatedTime: "N/A", requirements: ["Sertifikat Asli", "KTP"], available: true, code: "BPN-01" },
      { id: 85, icon: FileText, title: "PENGHAPUSAN HAK TANGGUNGAN", description: "Layanan Roya atau penghapusan hak tanggungan.", category: "BPN", estimatedTime: "N/A", requirements: ["Sertifikat Roya", "KTP"], available: true, code: "BPN-02" },
      { id: 101, icon: MessageSquare, title: "LAYANAN INFORMASI BPN", description: "Konsultasi dan informasi pertanahan.", category: "BPN", estimatedTime: "20 menit", requirements: ["KTP"], available: true, code: "BPN-03" },
      { id: 30, icon: Scale, title: "KONSULTASI HUKUM", description: "Layanan konsultasi hukum gratis.", category: "Kejaksaan", estimatedTime: "30 menit", requirements: ["KTP"], available: true, code: "KEJ-01" },
      { id: 32, icon: Phone, title: "PEMBAYARAN JASA TELEKOMUNIKASI", description: "Pembayaran tagihan Telkom/Indihome.", category: "BUMN", estimatedTime: "10 menit", requirements: ["ID Pelanggan"], available: true, code: "BUMN-01" },
      { id: 35, icon: Mail, title: "POSTAL", description: "Layanan pengiriman surat dan paket.", category: "BUMN", estimatedTime: "15 menit", requirements: ["-"], available: true, code: "BUMN-02" },
      { id: 36, icon: CreditCard, title: "PAYMENT POINT POSPAY", description: "Pembayaran berbagai tagihan melalui Pospay.", category: "BUMN", estimatedTime: "10 menit", requirements: ["ID Pelanggan/Tagihan"], available: true, code: "BUMN-03" },
      { id: 37, icon: Banknote, title: "REMITTANCE", description: "Layanan pengiriman uang dalam dan luar negeri.", category: "BUMN", estimatedTime: "20 menit", requirements: ["KTP", "Data Penerima"], available: true, code: "BUMN-04" },
      { id: 38, icon: Stamp, title: "PENYEDIAAN MATERAI", description: "Penjualan materai tempel.", category: "BUMN", estimatedTime: "5 menit", requirements: ["-"], available: true, code: "BUMN-05" },
      { id: 39, icon: MessageSquare, title: "INFORMASI KETASPENAN", description: "Layanan informasi program Taspen.", category: "BUMN", estimatedTime: "20 menit", requirements: ["KTP"], available: true, code: "BUMN-06" },
      { id: 102, icon: MessageSquare, title: "PEMBERIAN INFORMASI PESERTA ASABRI", description: "Informasi untuk peserta ASABRI.", category: "BUMN", estimatedTime: "20 menit", requirements: ["KTP"], available: true, code: "BUMN-07" },
      { id: 45, icon: Receipt, title: "PELAYANAN PAJAK DAERAH", description: "Pembayaran dan konsultasi pajak daerah.", category: "Bapenda", estimatedTime: "25 menit", requirements: ["NOP PBB", "KTP"], available: true, code: "PEMDA-01" },
      { id: 50, icon: FileText, title: "SALINAN SPPT PBB", description: "Permohonan salinan SPPT PBB-P2.", category: "Bapenda", estimatedTime: "20 menit", requirements: ["KTP", "Surat Kehilangan"], available: true, code: "PEMDA-02" },
      { id: 51, icon: FileUp, title: "BUKA BLOKIR", description: "Layanan buka blokir objek pajak PBB.", category: "Bapenda", estimatedTime: "30 menit", requirements: ["Bukti Lunas PBB", "KTP"], available: true, code: "PEMDA-03" },
      { id: 52, icon: FileText, title: "PEMBETULAN SPPT PBB", description: "Layanan pembetulan data SPPT PBB-P2.", category: "Bapenda", estimatedTime: "40 menit", requirements: ["SPPT Asli", "KTP"], available: true, code: "PEMDA-04" },
      { id: 53, icon: FileText, title: "MUTASI HABIS SPPT", description: "Layanan pecah atau gabung objek PBB.", category: "Bapenda", estimatedTime: "45 menit", requirements: ["Sertifikat", "KTP"], available: true, code: "PEMDA-05" },
      { id: 54, icon: Receipt, title: "PRINT OUT TUNGGAKAN", description: "Cetak rincian tunggakan PBB.", category: "Bapenda", estimatedTime: "10 menit", requirements: ["NOP PBB"], available: true, code: "PEMDA-06" },
      { id: 55, icon: MessageSquare, title: "KONSULTASI DAN INFORMASI PAJAK", description: "Konsultasi terkait pajak daerah.", category: "Bapenda", estimatedTime: "25 menit", requirements: ["-"], available: true, code: "PEMDA-07" },
      { id: 48, icon: MessageSquare, title: "INFORMASI DAN PENDAFTARAN KEPESERTAAN PROGRAM BPJS", description: "Layanan pendaftaran dan informasi BPJS.", category: "BPJS", estimatedTime: "30 menit", requirements: ["KTP", "KK"], available: true, code: "BPJS-01" },
      { id: 111, icon: Heart, title: "PELAYANAN BPJS KESEHATAN", description: "Layanan administrasi BPJS Kesehatan.", category: "BPJS", estimatedTime: "25 menit", requirements: ["Kartu BPJS", "KTP"], available: true, code: "BPJS-02" },
      { id: 56, icon: BriefcaseBusiness, title: "PELAYANAN OSS - SIMPATIK", description: "Layanan perizinan berusaha terintegrasi.", category: "DPMPTSP", estimatedTime: "1 jam", requirements: ["NIB", "KTP"], available: true, code: "IZIN-01" },
      { id: 57, icon: TrendingUp, title: "MARKETING INFORMASI INVESTASI", description: "Informasi peluang investasi di Kota Bekasi.", category: "DPMPTSP", estimatedTime: "30 menit", requirements: ["-"], available: true, code: "IZIN-02" },
      { id: 58, icon: MessageSquare, title: "KONSULTASI PELAYANAN KEWAJIBAN LKPM", description: "Laporan Kegiatan Penanaman Modal.", category: "DPMPTSP", estimatedTime: "40 menit", requirements: ["NIB"], available: true, code: "IZIN-03" },
      { id: 62, icon: GraduationCap, title: "SURAT IZIN PRAKTEK TENAGA KESEHATAN", description: "Penerbitan SIP untuk tenaga kesehatan.", category: "Dinkes", estimatedTime: "1 jam", requirements: ["STR", "Ijazah"], available: true, code: "KES-01" },
      { id: 94, icon: GraduationCap, title: "SURAT IZIN PRAKTEK", description: "Penerbitan berbagai surat izin praktek.", category: "Dinkes", estimatedTime: "1 jam", requirements: ["STR", "Ijazah"], available: true, code: "KES-02" },
      { id: 73, icon: MessageSquare, title: "LAYANAN INFORMASI KEPABEANAN DAN CUKAI", description: "Konsultasi terkait kepabeanan dan cukai.", category: "Bea Cukai", estimatedTime: "30 menit", requirements: ["-"], available: true, code: "BC-01" },
      { id: 79, icon: MessageSquare, title: "KONSULTASI PERPAJAKAN", description: "Konsultasi umum perpajakan.", category: "DJP", estimatedTime: "30 menit", requirements: ["NPWP"], available: true, code: "PAJAK-01" },
      { id: 90, icon: MessageSquare, title: "INFORMASI LAYANAN BPRS", description: "Informasi produk dan layanan BPRS.", category: "Perbankan", estimatedTime: "20 menit", requirements: ["-"], available: true, code: "BANK-01" },
      { id: 91, icon: CreditCard, title: "PEMBAYARAN TAGIHAN PDAM", description: "Pembayaran tagihan air PDAM.", category: "BUMD", estimatedTime: "10 menit", requirements: ["ID Pelanggan"], available: true, code: "BUMD-01" },
      { id: 95, icon: BriefcaseBusiness, title: "PELAYANAN OSS", description: "Layanan Online Single Submission.", category: "DPMPTSP", estimatedTime: "1 jam", requirements: ["NIB"], available: true, code: "IZIN-04" },
      { id: 99, icon: FileText, title: "REKLAME", description: "Pengurusan izin reklame.", category: "Bapenda", estimatedTime: "45 menit", requirements: ["Desain Reklame", "KTP"], available: true, code: "PEMDA-08" },
      { id: 100, icon: MessageSquare, title: "KONSULTASI", description: "Layanan konsultasi umum.", category: "Umum", estimatedTime: "20 menit", requirements: ["-"], available: true, code: "UMUM-01" },
      { id: 103, icon: FileText, title: "PELAYANAN KLIM", description: "Pelayanan klim asuransi.", category: "BUMN", estimatedTime: "30 menit", requirements: ["Polis", "KTP"], available: true, code: "BUMN-08" },
      { id: 104, icon: FileText, title: "PELAYANAN NON KLIM", description: "Layanan administrasi non-klim.", category: "BUMN", estimatedTime: "25 menit", requirements: ["Polis", "KTP"], available: true, code: "BUMN-09" },
      { id: 105, icon: Wifi, title: "MOBILE APPS", description: "Layanan melalui aplikasi mobile.", category: "Umum", estimatedTime: "N/A", requirements: ["-"], available: true, code: "UMUM-02" },
      { id: 106, icon: MessageSquare, title: "LAYANAN INFORMASI", description: "Pusat informasi umum.", category: "Umum", estimatedTime: "15 menit", requirements: ["-"], available: true, code: "UMUM-03" },
      { id: 107, icon: FileText, title: "PEMBUATAN GUGATAN DAN PERMOHONAN", description: "Layanan di pengadilan agama.", category: "Pengadilan Agama", estimatedTime: "1 jam", requirements: ["KTP", "Surat Nikah"], available: true, code: "PA-01" },
      { id: 108, icon: BriefcaseBusiness, title: "PENDAFTARAN PERKARA SECARA ELEKTRONIK", description: "Pendaftaran perkara online.", category: "Pengadilan Agama", estimatedTime: "40 menit", requirements: ["Akun E-Court"], available: true, code: "PA-02" },
      { id: 112, icon: BriefcaseBusiness, title: "E COURT", description: "Layanan pengadilan elektronik.", category: "Pengadilan Negeri", estimatedTime: "40 menit", requirements: ["Akun E-Court"], available: true, code: "PN-01" },
      { id: 113, icon: FileText, title: "E RATERANG", description: "Layanan surat keterangan elektronik.", category: "Pengadilan Negeri", estimatedTime: "30 menit", requirements: ["KTP"], available: true, code: "PN-02" },
      { id: 114, icon: BriefcaseBusiness, title: "E BERPADU", description: "Sistem peradilan terpadu.", category: "Pengadilan Negeri", estimatedTime: "N/A", requirements: ["-"], available: true, code: "PN-03" },
      { id: 115, icon: MessageSquare, title: "KONSULTASI PENGADILAN NEGERI", description: "Konsultasi hukum di Pengadilan Negeri.", category: "Pengadilan Negeri", estimatedTime: "30 menit", requirements: ["KTP"], available: true, code: "PN-04" },
      { id: 116, icon: MessageSquare, title: "KONSULTASI AHU", description: "Konsultasi Administrasi Hukum Umum.", category: "Kemenkumham", estimatedTime: "30 menit", requirements: ["-"], available: true, code: "AHU-01" },
];
  
export const agencyServices = allServicesList.reduce((acc, service) => {
    const { category } = service;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(service);
    return acc;
}, {} as Record<string, typeof allServicesList>);
