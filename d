[33mcommit 8afb49f851be61f7211d363d6369dbb549bf1c93[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 17:32:35 2025 +0700

    feat(ui): Tambahkan transisi hover pada komponen kartu
    
    Meningkatkan pengalaman pengguna dengan menambahkan animasi halus pada komponen kartu di seluruh situs untuk memberikan umpan balik visual yang lebih baik.
    
    - Menerapkan efek  dan  pada kartu di halaman Beranda, Layanan, dan Berita.
    - Menambahkan properti , , dan  untuk memastikan animasi berjalan dengan mulus.
    - Revisi ini sesuai dengan prinsip heuristik 'Aesthetic and Minimalist Design' dengan membuat antarmuka terasa lebih dinamis dan responsif terhadap interaksi pengguna.
    
    refactor(ui): Perbaiki layout kartu untuk konsistensi dan alignment
    
    Merestrukturisasi komponen kartu di halaman Beranda, Layanan, dan Berita menggunakan Flexbox untuk memastikan alignment vertikal yang rapi dan konsisten.
    
    - Menerapkan  dan  untuk mensejajarkan tombol/footer kartu.
    - Memisahkan  dan  untuk struktur HTML yang lebih semantik.
    '

[33mcommit 98b931d59fd0b0575742cccaf9934b6517d50726[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 17:10:31 2025 +0700

    feat(complaint): Implementasi alur pengiriman aduan yang lengkap
    
    Menambahkan mekanisme pengiriman aduan yang lebih interaktif dan ramah pengguna di halaman /aduan.
    
    - Menambahkan dialog konfirmasi (AlertDialog) sebelum aduan dikirim untuk mencegah kesalahan pengiriman.
    - Mengintegrasikan notifikasi toast (useToast) untuk memberikan umpan balik yang jelas setelah aduan berhasil terkirim.
    - Menampilkan halaman ringkasan data yang telah dikirim setelah submit berhasil.
    - Menyediakan tombol 'Kirim Aduan Lainnya' untuk memudahkan pengguna jika ingin membuat lebih dari satu aduan.
    
    Menyempurnakan alur pengiriman aduan dengan menampilkan file bukti yang telah diunggah oleh pengguna pada halaman sukses.
    
    - Menggunakan  untuk membuat pratinjau file di sisi klien.
    - Menambahkan tombol 'Buka File' yang akan membuka bukti dalam tab baru.
    - Mengelola state file yang diunggah dan memastikan URL objek dibersihkan () untuk mencegah kebocoran memori.
    - Membungkus input file dengan  untuk integrasi yang lebih baik dengan .

[33mcommit 8f2e37da521903d29cabc07dcccbe35358a7a2bf[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 16:49:56 2025 +0700

    feat(form): Implementasi validasi real-time pada form booking & aduan
    
    Meningkatkan pengalaman pengguna secara signifikan dengan memberikan umpan balik validasi formulir secara instan.
    
    - Mengintegrasikan React Hook Form dan Zod untuk manajemen state dan validasi schema pada halaman Booking dan Aduan.
    - Pesan kesalahan (error message) kini muncul secara real-time (onBlur) di bawah setiap input yang tidak valid.
    - Menerapkan aturan validasi yang lebih ketat:
      - NIK harus 16 digit angka.
      - Nomor telepon minimal 10 digit dan hanya angka.
      - Email harus memiliki format yang valid.
      - Field lainnya (nama, judul, deskripsi) memiliki validasi panjang minimum.
    - Mengganti state manual dengan  untuk manajemen formulir yang lebih robust dan efisien.

[33mcommit d72fc347715e0f57359806d0fb39e0bf95e9d13b[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 16:09:15 2025 +0700

    feat(ui): Tambahkan skeleton loader pada layanan populer di beranda
    
    Mengimplementasikan 'loading state' pada bagian 'Layanan Populer' di halaman beranda untuk meningkatkan pengalaman pengguna.
    
    - Menambahkan komponen  untuk memberikan umpan balik visual saat data sedang dimuat.
    - Menggunakan  untuk mensimulasikan pemanggilan data API.
    - Menerapkan rendering kondisional untuk menampilkan kerangka pemuatan sebelum konten layanan ditampilkan, sesuai dengan prinsip 'Visibility of System Status'.

[33mcommit 1791de60ea314c640ddf94008d0160dab3c5aba2[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 15:46:45 2025 +0700

    feat: Tambahkan halaman legal dan perbaiki UX booking layanan
    
    Pembaruan ini menambahkan halaman-halaman legal yang penting dan meningkatkan pengalaman pengguna pada tahap awal alur booking antrian.
    
    Halaman Legal:
    - Menambahkan halaman 'Kebijakan Privasi' dan 'Syarat & Ketentuan Layanan' dengan konten template.
    - Mendaftarkan rute baru untuk halaman legal di App.tsx.
    - Mengaktifkan tautan di footer agar mengarah ke halaman yang sesuai.
    
    Halaman Booking (/booking):
    - Mengimplementasikan kolom pencarian fuzzy (menggunakan Fuse.js) untuk mempermudah pengguna menemukan layanan.
    - Secara default, daftar layanan kini hanya menampilkan 3 item teratas untuk menjaga visibilitas tombol 'Lanjutkan'.
    - Menambahkan tombol 'Tampilkan Semua' / 'Tampilkan Lebih Sedikit' untuk melihat seluruh daftar layanan.

[33mcommit b4696120d37b59cfb51d7409140ed4fc4f9fd6e0[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 15:29:10 2025 +0700

    feat(booking): Tingkatkan alur, validasi, dan UX pada halaman booking
    
    Pembaruan ini merombak halaman booking antrian untuk menciptakan alur yang lebih cepat bagi pengguna dan memastikan integritas data yang dimasukkan.
    
    - **Alur Cepat**: Pengguna dapat langsung booking dari halaman Beranda atau Layanan, dan layanan yang dipilih akan otomatis terisi, melewati langkah pertama.
    - **Pencarian Cerdas**: Menambahkan pencarian fuzzy dan tombol "Tampilkan Semua" pada daftar layanan di halaman booking untuk mempermudah pemilihan.
    - **Validasi Waktu**: Mencegah pengguna memilih slot waktu yang sudah terlewat pada hari yang sama.
    - **Validasi Input**: Menerapkan validasi ketat untuk NIK (harus 16 digit angka) dan Nomor Telepon (hanya angka).
    - **Konsistensi Data**: Melengkapi daftar layanan pada halaman booking agar sesuai dengan daftar utama.

[33mcommit 383caf8ae5e070b5e1110133a8242cd84e6fa9fa[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 14:00:27 2025 +0700

    feat(search): Implementasi pencarian fuzzy dan suggestion di seluruh situs
    
    Pembaruan ini secara signifikan meningkatkan fungsionalitas pencarian di beberapa halaman utama untuk memberikan pengalaman pengguna yang lebih baik dan toleran terhadap kesalahan ketik.
    
    - Mengintegrasikan Fuse.js untuk pencarian fuzzy pada halaman Beranda, Layanan, dan Berita.
    - Menambahkan fitur suggestion (saran) live di bawah kolom pencarian pada halaman Beranda.
    - Memperbaiki fungsionalitas input pencarian dan tombol kategori di Beranda agar dapat meneruskan filter ke halaman Layanan dengan benar melalui parameter URL.
    - Menambahkan tombol Cari di samping kolom pencarian Beranda untuk meningkatkan kejelasan antarmuka.

[33mcommit 91b66deb0318e9ff8cb5601767c22567637f01ca[m
Author: Dija-san Lewis <yedijalewisuryadi@gmail.com>
Date:   Thu Jul 24 13:34:49 2025 +0700

    Memperbaiki 4 tombol di bawah kolom Cari layanan ... agar mengarah ke halaman Layanan, namun belum mengisi kolom pencarian pada Layanan secara otomatis, akan diperbaiki

[33mcommit 5b1cf4852e3c6ca7c3477bec3424b6b9031ead83[m
Author: Ayu Amanda Shalsa Putri <222212528@stis.ac.id>
Date:   Thu Jul 3 18:37:51 2025 +0700

    Update vite.config.ts

[33mcommit ea18beee4306569e6c78d893205fc400c9892f53[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:27:24 2025 +0000

    Remove duplicate Popular Services section
    
    cgen-1551b224532b4ac0b8da7aec76945f8e

[33mcommit 6601875610cbcbbe8ad5be572dbd045570ba0975[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:27:00 2025 +0000

    Replace stats grid with institutions content
    
    cgen-b4a80d64f7e74976833977aa85eebe07

[33mcommit 7e668c252d867e7f35f1bb28c69197c32106be9b[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:26:41 2025 +0000

    Change Stats section to Institutions section
    
    cgen-8e97db1e76e142fb903fd7b0b1f03d39

[33mcommit 814058011740531b8a425d64afb2558e2a27ce5f[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:26:36 2025 +0000

    Replace institutions grid with popular services grid
    
    cgen-3573cb740d4b47bf840ec729bdf16354

[33mcommit 5a50a82a2f4365a32a2d27ca893da7e0a5d9609e[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:26:13 2025 +0000

    Update Popular Services section header text
    
    cgen-f3399ab9ac3e4742b5f2e87104add451

[33mcommit ee98b5f42c5695d1c15502aede9c4ec0492ed1b9[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:26:07 2025 +0000

    Move Popular Services section to first position
    
    cgen-d79376b78c9e42609a8d721d92876e0d

[33mcommit d3fc8488060ba4eed45e8ccd8bfc31a3578ea627[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:22:27 2025 +0000

    Remove unused AlertCircle import
    
    cgen-f8de394e09e643dc9dfe8e2cb4548ed4

[33mcommit 06ce067faa0274eff38091809a44b3e6a60f1969[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:22:24 2025 +0000

    Remove announcements data
    
    cgen-c97c2b5bda8e4e34944e26f43ede35e7

[33mcommit b922e59eb0007f91e0451fa054df06925eaa16b0[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:22:16 2025 +0000

    Remove announcements section and add institutions section
    
    cgen-bfcaae4aed364a88a2ef60d8124be931

[33mcommit be498cff8c1105579e12171fd10a53c81725083b[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:21:49 2025 +0000

    Fix Lihat Semua Layanan button visibility
    
    cgen-1ecdf86772e64f35a848a28eca9e5599

[33mcommit dbff4d159471f6264f2720c84b669723880c04c0[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:45 2025 +0000

    Replace Index page header with shared Navbar
    
    cgen-f2d6aac7c33745fdb00c6db5b60257da

[33mcommit e3a64d6146768293990aae5e812f2307d538f29d[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:27 2025 +0000

    Update Index page to use shared Navbar
    
    cgen-dbcdbcf6711a4e34ad2a6618b5c45bee

[33mcommit fba181376cbe9fa071b08d53d7bd41b0a1b12f18[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:23 2025 +0000

    Replace Complaint page header with shared Navbar
    
    cgen-6361f4c738744cd6a156029e2fa46b03

[33mcommit 6d6ec941d54046ee51ba999f5d8df56bcb7a3f37[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:16 2025 +0000

    Update Complaint page to use shared Navbar
    
    cgen-a590e2ab567c4f73b0a278dca734819e

[33mcommit 4cb5c19a6d8e52cfa0bc8d41a184206d3dae8245[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:11 2025 +0000

    Replace News page header with shared Navbar
    
    cgen-ff23be7d75234fefad007a531a2a24dc

[33mcommit e9d38ba33381f5b0215241674f82083f8a875261[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:04 2025 +0000

    Update News page to use shared Navbar
    
    cgen-c3105ed0197c434c9ac7b317a94203b3

[33mcommit 0b8ca7e53fadd471e5e83b2b5cf5abaa6bff4e50[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:17:00 2025 +0000

    Replace Booking page header with shared Navbar
    
    cgen-564b1c7a01074bd9927814f4005d063d

[33mcommit 810812afbc9a4062f575df12a604df2a58f9f3fc[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:52 2025 +0000

    Update Booking page to use shared Navbar
    
    cgen-e531149ec1064bb2a080f87cb25ebb86

[33mcommit 861265c32ed97e23cd122d14d5b655259ec1dffc[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:48 2025 +0000

    Replace Login page header with shared Navbar
    
    cgen-a731ebb2dfa34e6a966991ea6759b39e

[33mcommit f936a09ed530da6f335fc4547b1bd9bb719b7843[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:41 2025 +0000

    Update Login page to use shared Navbar
    
    cgen-667e39a5b4054c5dad0db05a02e36adb

[33mcommit 635c69546c70bd5bccc97eb02a53fff122a35da1[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:36 2025 +0000

    Replace Services page header with shared Navbar
    
    cgen-81405fa359da4e21b5c9c0b321cd1c63

[33mcommit 27351a65aec46c957d03a2cb81712bc5d18ce1e2[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:28 2025 +0000

    Update Services page to use shared Navbar
    
    cgen-b3992399e6c445ec83722d771daecc18

[33mcommit 65f1232b44fdeea78f75c72ec00f205bdfe8be38[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:16:23 2025 +0000

    Create shared Navbar component
    
    cgen-aff4b74ce61c42b1b74c578799a3e1f9

[33mcommit d0e92d1e1a19450b9b6f0de2fa5e59fb34f11fa3[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:12:15 2025 +0000

    Add visitor statistics section
    
    cgen-f1d98038cbf442a28cd520bb7861ffa6

[33mcommit 0c82ba7dcd8565492d1290c1fe2e2467a36bba8b[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:12:01 2025 +0000

    Fix search input text color and add visitor statistics
    
    cgen-8a007fce7c0c4e31be7077e83f90ace3

[33mcommit 1aef3c363f21549b63ddddc89329a27b034fc5fe[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:11:56 2025 +0000

    Fix mobile navigation menu
    
    cgen-80c46949d94c40d3960c0a59a81ccbcf

[33mcommit 7654e9e15a5fcf6dc906fc8f7e7b74652eed4b67[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:11:48 2025 +0000

    Fix navbar to only show 4 main menus and fix search input color
    
    cgen-2bdd91966f084bfcac7a698677fbed16

[33mcommit fb47b942eb42800ffd69f9e00a56d13e8222ff37[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:11:38 2025 +0000

    Complete Services page with full functionality
    
    cgen-a3ff1d49d62c4958a1a438c93de38088

[33mcommit ed4fb066f176b2ca9b8c182a42ef614e7052ccfb[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:03:58 2025 +0000

    Add all route paths to App.tsx
    
    cgen-23f7a2aa128543bfa9d454ea3b22f328

[33mcommit c0f383cbcc8eb5874ffe6906a3c11f52ca080d3b[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:03:53 2025 +0000

    Add all new routes to App.tsx
    
    cgen-ef797498cd784c058686cfe84fa85561

[33mcommit 2bb24a2c3f3cff5808eddc47c6ec613edeeede6c[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:03:47 2025 +0000

    Create Complaint Service page
    
    cgen-6e21abd896bd4b139c43231fa85f3ccd

[33mcommit a12ee4c325be3907707cf7d37fbad484f2859f1f[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:02:36 2025 +0000

    Create News page
    
    cgen-08bd472e072f4600b05b4bba70e38801

[33mcommit e38bf3d20650ae1f9e9339e9943f1b59c1dc2750[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:01:52 2025 +0000

    Create Booking page
    
    cgen-588081fc6e5340c5bb947d6d004f552f

[33mcommit 3aa915def681ac3f58f2fdb2db3b59a85233e5f6[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:00:54 2025 +0000

    Create Login page
    
    cgen-00082d3a3679435b953b2bc5cde0d4af

[33mcommit f96029fb9c5f5891e6f75d76f90202ffad0a09c0[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 11:00:28 2025 +0000

    Update homepage with official Bekasi colors and government styling
    
    cgen-b28335219cb7416c9930704d0c40c61c

[33mcommit e0aa8c1d1a8d97255451f7edd777c01376fd4b85[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 10:58:58 2025 +0000

    Update CSS variables to use official Bekasi green and yellow colors
    
    cgen-f7b763fbee064e20b30a6784c51dbb52

[33mcommit 6fab88710665c2284515a83fd6a047e5cc442bd9[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 10:51:03 2025 +0000

    Update call-to-action button to link to services
    
    cgen-d1f02a38f2904448a4f2a22929e14d80

[33mcommit 4045efa588c829e6486ec9753dd27c129a4ca4ff[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 10:50:57 2025 +0000

    Update mobile navigation links
    
    cgen-14387f57d5ee4807be433912a5ffd8e0

[33mcommit 3974a9b9c3adeb56a3d94074af307f126fd33c79[m
Author: Builder.io <builder-bot@builder.io>
Date:   Thu Jul 3 10:50:51 2025 +0000

    Update navigation links in header
    
    cgen-071c90234f164b6da8fb1ccc1f667db5
