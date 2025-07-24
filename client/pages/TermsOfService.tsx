import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
            Syarat dan Ketentuan Layanan
          </h1>

          {/* PENTING: Teks di bawah ini adalah template umum. 
            Harap sesuaikan dan minta peninjauan dari bagian hukum 
            atau dinas terkait di Pemerintah Kota Bekasi sebelum dipublikasikan.
          */}

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              <strong>Terakhir diperbarui:</strong> 24 Juli 2025
            </p>
            <p>
              Selamat datang di situs Mal Pelayanan Publik (MPP) Kota Bekasi. Dengan mengakses atau menggunakan situs web ini, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh semua Syarat dan Ketentuan Layanan yang tercantum di bawah ini.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Definisi</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>"Layanan"</strong> merujuk pada semua fitur, informasi, dan fungsi yang tersedia melalui situs web MPP Kota Bekasi, termasuk pendaftaran antrian online dan sistem pengaduan.</li>
              <li><strong>"Pengguna"</strong> atau <strong>"Anda"</strong> merujuk pada setiap individu yang mengakses atau menggunakan Layanan kami.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Kewajiban Pengguna</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Anda setuju untuk memberikan informasi yang akurat, terkini, dan lengkap saat menggunakan Layanan, terutama data identitas seperti NIK dan nama lengkap.</li>
              <li>Anda bertanggung jawab penuh atas kerahasiaan dan keamanan akun Anda (jika ada).</li>
              <li>Anda setuju untuk tidak menyalahgunakan Layanan untuk tujuan yang melanggar hukum, penipuan, atau tindakan yang dapat merusak, menonaktifkan, atau membebani sistem kami.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Ketentuan Layanan Antrian Online</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pendaftaran antrian online bertujuan untuk mempermudah penjadwalan. Waktu yang dipilih adalah estimasi dan dapat berubah sesuai dengan kondisi operasional di lokasi.</li>
              <li>Pengguna diharapkan hadir di lokasi setidaknya 15 menit sebelum waktu yang dijadwalkan.</li>
              <li>Jika Pengguna tidak dapat hadir, diharapkan untuk membatalkan pendaftaran melalui sistem (jika tersedia) atau menghubungi kami.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Batasan Tanggung Jawab</h2>
            <p>
              Layanan ini disediakan "sebagaimana adanya". Kami berusaha untuk menjaga Layanan tetap berjalan lancar, namun kami tidak menjamin bahwa situs akan selalu tersedia, tepat waktu, aman, atau bebas dari kesalahan. MPP Kota Bekasi tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Layanan ini.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Perubahan Ketentuan</h2>
            <p>
              Kami berhak untuk mengubah atau memodifikasi Syarat dan Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan Layanan secara berkelanjutan setelah adanya perubahan merupakan bentuk persetujuan Anda terhadap Syarat dan Ketentuan yang baru.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Hukum yang Berlaku</h2>
            <p>
              Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di wilayah Republik Indonesia.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}