import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
            Kebijakan Privasi
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
              Terima kasih telah mengunjungi dan menggunakan layanan digital Mal Pelayanan Publik (MPP) Kota Bekasi. Privasi Anda merupakan prioritas utama bagi kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami dapat mengumpulkan dan memproses beberapa jenis informasi pribadi Anda, termasuk:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Data Identitas Pribadi:</strong> Nama lengkap, Nomor Induk Kependudukan (NIK), alamat email, dan nomor telepon yang Anda berikan saat mendaftar antrian, mengajukan aduan, atau membuat akun.
              </li>
              <li>
                <strong>Data Teknis:</strong> Informasi non-pribadi seperti alamat IP, jenis peramban (browser), sistem operasi, dan data kunjungan lainnya yang dikumpulkan secara otomatis untuk tujuan analisis dan peningkatan layanan.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Tujuan Penggunaan Informasi</h2>
            <p>
              Informasi pribadi yang kami kumpulkan akan digunakan untuk tujuan berikut:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Memproses pendaftaran antrian online dan penjadwalan layanan Anda.</li>
              <li>Melakukan verifikasi identitas untuk memastikan keabsahan data.</li>
              <li>Mengirimkan notifikasi, konfirmasi, dan pengingat terkait jadwal layanan Anda.</li>
              <li>Menanggapi dan menindaklanjuti aduan, saran, atau pertanyaan yang Anda sampaikan.</li>
              <li>Meningkatkan kualitas, keamanan, dan fungsionalitas situs serta layanan yang kami sediakan.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Keamanan Data</h2>
            <p>
              Kami berkomitmen untuk melindungi keamanan data pribadi Anda. Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang wajar untuk melindungi informasi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Berbagi dan Pengungkapan Informasi</h2>
            <p>
              Kami tidak akan menjual, menyewakan, atau mendistribusikan informasi pribadi Anda kepada pihak ketiga di luar instansi pemerintah yang tergabung dalam MPP Kota Bekasi tanpa persetujuan Anda, kecuali dalam kondisi berikut:
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Diwajibkan oleh hukum, peraturan, atau proses hukum yang berlaku.</li>
                <li>Untuk melindungi hak, properti, atau keselamatan MPP Kota Bekasi, pengguna kami, atau publik.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Hak Anda sebagai Pengguna</h2>
            <p>
              Anda memiliki hak untuk mengakses dan memperbarui informasi pribadi Anda. Jika Anda memiliki akun di situs kami, Anda dapat melakukannya melalui halaman profil Anda.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Perubahan pada Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan di halaman ini, dan kami menyarankan Anda untuk meninjaunya secara berkala.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Kontak Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, silakan hubungi kami melalui email di <a href="mailto:info@mpp.bekasikota.go.id" className="text-green-600 hover:underline">info@mpp.bekasikota.go.id</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}