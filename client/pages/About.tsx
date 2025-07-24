import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Goal, Scale, MapPin, Tv, Contact, ListChecks, Landmark } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                <Building2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Profil Mal Pelayanan Publik</h1>
            <p className="mt-2 text-lg text-gray-600">
                Kota Bekasi
            </p>
        </div>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Landmark className="h-6 w-6 text-green-600" />
                        <span>Latar Belakang dan Definisi</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold text-left">Latar Belakang Mal Pelayanan Publik</AccordionTrigger>
                            <AccordionContent className="prose max-w-none text-gray-700 text-justify">
                                Rendahnya kualitas pelayanan publik merupakan salah satu sorotan yang diarahkan kepada birokrasi pemerintah dalam memberikan pelayanan kepada masyarakat. Sistem prosedur pelayanan yang berbelit-belit, profesionalisme SDM yang masih rendah, ketidakpastian waktu dan biaya mengakibatkan pelayanan di Indonesia identik dengan high-cost economy (ekonomi biaya tinggi). Begitu banyaknya permasalahan dalam pelayanan publik yang diselenggarakan pemerintah, maka sangat perlu dilakukan suatu perubahan atau reformasi melalui perbaikan pelayanan publik. Inilah kerangka mendasar yang harus diramu dalam tata cara yang berorientasi pada hasil dan menjawab kebutuhan mendasar warga masyarakat sehingga lahir GENERASI PELAYANAN PUBLIK TERPADU, lalu generasi kedua bernama PELAYANAN TERPADU SATU PINTU (PTSP). MAL PELAYANAN PUBLIK (MPP) adalah generasi ketiga yang lebih progresif memadukan pelayanan dari Pemerintah pusat, daerah, BUMD maupun swasta.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold text-left">Definisi Mal Pelayanan Publik</AccordionTrigger>
                            <AccordionContent className="prose max-w-none text-gray-700 text-justify">
                                Definisi Mal Pelayanan Publik menurut Permen PANRB Nomor 23 Tahun 2017 adalah tempat berlangsungnya kegiatan atau aktivitas penyelenggaraan pelayanan publik atas barang, jasa dan/atau pelayanan administrasi yang merupakan perluasan fungsi pelayanan terpadu baik pusat maupun daerah serta pelayanan Badan Usaha Milik Negara/Badan Usaha Milik Daerah dan Swasta dalam rangka menyediakan pelayanan yang cepat, mudah, terjangkau, aman dan nyaman. Tujuan kehadiran Mal Pelayanan Publik adalah memberi kemudahan, kecepatan, keterjangkauan keamanan dan kenyamanan kepada masyarakat dalam mendapatkan pelayanan. Selain itu untuk meningkatkan daya saing global dalam memberikan kemudahan berusaha di Indonesia. Prinsip yang dianut dalam Mall Pelayanan Publik yaitu keterpaduan, berdayaguna, koordinasi, akuntabilitas, aksesibilitas dan kenyamanan.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Scale className="h-6 w-6 text-green-600" />
                        <span>Dasar Hukum</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-gray-700 text-justify">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Keputusan Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 31 Tahun 2019 tentang Perubahan atas keputusan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 11 Tahun 2018 Tentang Penetapan Lokasi Penyelenggaraan Mal Pelayanan Publik Tahun 2019 Tanggal 27 Maret 2019;</li>
                        <li>Penandatanganan Komitmen dan kesanggupan Pemerintah Kota Bekasi untuk mewujudkan Mal Pelayanan Publik (MPP) Tahun 2019 Tanggal 27 Maret 2019;</li>
                        <li>Instruksi Wali Kota Bekasi Nomor : 845/99.SETDA.TU tentang Rencana Pembangunan Mal Pelayanan Publik di Kota Bekasi;</li>
                        <li>Peraturan Wali Kota Bekasi Nomor : 101 Tahun 2019 Tentang Mal Pelayanan Publik Tanggal 28 Agustus 2019;</li>
                        <li>Keputusan Wali Kota Bekasi Nomor : 067/Kep. 390-DPMPTSP/IX/2018 tentang Lokasi Pelayanan Publik pada Mal atau Pusat Perbelanjaan.</li>
                        <li>Keputusan Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Bekasi Nomor : 503/Kep.926.A-DPMPTSP/VII/2019 tentang Penyelenggaraan Mal Pelayanan Publik dan Gerai Pelayanan Publik di Kota Bekasi.</li>
                        <li>Keputusan Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Bekasi Nomor : 065.2/Kep.949-DPMPTSP/VII/2019 tentang Standar Opersional Prosedur Petugas Penyelenggara Pelayanan pada Mal Pelayanan Publik dam Gerai Pelayanan Publik di Kota Bekasi.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Goal className="h-6 w-6 text-green-600" />
                        <span>Maksud dan Tujuan</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-gray-700 text-justify">
                     <ul className="list-disc pl-5 space-y-2">
                        <li>Memberikan kemudahan, kecepatan keterjangkauan, keamanan, dan kenyamanan kepada Masyarakat dalam mendapatkan pelayanan;</li>
                        <li>Meningkatkan daya saing global dalam memberikan kemudahan berusaha di Indonesia;</li>
                        <li>Mengintergrasikan berbagai layanan baik instansi pusat dan daerah dalam satu lokasi yang sama;</li>
                        <li>Meningkatkan komitmen, kerjasama dan sinergi antara para penyelenggara pelayanan public dalam rangka penyediaan, pemanfaatan dan pengembangan layanan public; dan</li>
                        <li>Mendorong peningkatan investasi dan pertumbuhan ekonomi daerah.</li>
                    </ul>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <ListChecks className="h-6 w-6 text-green-600" />
                        <span>Sarana dan Prasarana</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-gray-700 text-justify">
                    <p>Pembangunan dan renovasi gedung telah selesai pada bulan Nopember 2020. Sarana dan prasarana yang tersedia di MPP Kota Bekasi antara lain:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mt-4 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>24 Konter layanan</li>
                            <li>Loket & Toilet Disabilitas</li>
                            <li>Loket Informasi & Pengaduan</li>
                            <li>Tempat Ibadah/Musholla</li>
                            <li>Ruang Laktasi</li>
                            <li>Ruang Baca/Pojok Baca</li>
                            <li>Ruang Bermain Anak</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Lounge Investasi</li>
                            <li>Balai Nikah</li>
                            <li>Mesin Antrian & E-Kiosk</li>
                            <li>Digital Signage & Media Informasi</li>
                            <li>Coffee Corner</li>
                            <li>Gerai Promosi/UMKM</li>
                            <li>CCTV</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Pantry</li>
                            <li>Parkir Umum & Disabilitas</li>
                            <li>Ruang Manager & Rapat</li>
                            <li>Ruang Kontrol Jaringan IT</li>
                            <li>Sofa Tunggu Disabilitas</li>
                            <li>Lift, Kursi Roda & Jalur Landai</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Tv className="h-6 w-6 text-green-600" />
                        <span>Sistem IT dan Media Publikasi</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">A. Sistem Antrian Terintegrasi (SIMPEL ANTRI)</AccordionTrigger>
                            <AccordionContent className="prose max-w-none text-gray-700 text-justify">
                                Untuk Mendukung sistem terintegrasi terutama dalam sistem antrian kita menggunakan layanan aplikasi SIMPEL ANTRI yang didalamnya terdapat informasi-informasi terkait pelaksanaan pelayanan di MPP. Fitur yang dapat dimanfaatkan antara lain antrian online satu pintu, hasil Survey Kepuasan Masyarakat (IKM/SKM), dan Layar Monitor Pemanggilan pemohon.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">B. Sistem Informasi Layanan Terpadu (SILAT)</AccordionTrigger>
                            <AccordionContent className="prose max-w-none text-gray-700 text-justify">
                                DPMPTSP Kota Bekasi memberikan pelayanan perizinan yang mudah, cepat, transparan, serta akuntabel melalui Sistem Informasi Layanan Terpadu (SILAT) yang dapat diakses di laman www.silat.bekasikota.go.id.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">C. Media Informasi dan Layar Multimedia</AccordionTrigger>
                            <AccordionContent className="prose max-w-none text-gray-700 text-justify">
                                Tersedianya mesin informasi dan layar multimedia di lobi utama MPP dan Lounge Investasi, di mana masyarakat dapat mengakses informasi terkait layanan di MPP, Standar Pelayanan/SOP, Maklumat Pelayanan, Call Center Pengaduan, dan Laporan Statistik.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Contact className="h-6 w-6 text-green-600" />
                        <span>Kontak & Lokasi</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="prose max-w-none text-gray-700">
                        <p><strong>Alamat:</strong><br/>
                        Jl. Ahmad Yani No.13, RT.004/RW.005, Marga Jaya, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</p>
                        <p><strong>Nomor Telepon:</strong><br/>
                        (+62) 811-9443-307<br/>
                        (+62) 851-7811-1378</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d527.4049555482134!2d106.99347!3d-6.238862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f3fadc4677d%3A0xe16698e18f9c4d8d!2sMAL%20PELAYANAN%20PUBLIK%20(MPP)%20Kota%20Bekasi!5e1!3m2!1sid!2sid!4v1753377446927!5m2!1sid!2sid"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-md"
                        ></iframe>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}