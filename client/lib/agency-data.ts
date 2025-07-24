import { agencyServices } from "./service-data";

export const agencyData = [
    {
        slug: "bank-bjb",
        name: "BANK BJB",
        category: "Perbankan",
        description: "Salah satu bank BUMD terbesar di Indonesia yang berfokus pada penggerak dan pendorong laju perekonomian daerah.",
        vision: "Menjadi 10 bank terbesar dan Berkinerja baik di Indonesia.",
        mission: `
            <ul>
                <li>Penggerak dan Pendorong laju Perekonomian Daerah.</li>
                <li>Melaksanakan Penyimpanan uang daerah.</li>
                <li>Salah satu sumber Pendapatan Asli Daerah</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Perbankan'] || []
    },
    {
        slug: "bank-bni",
        name: "BANK BNI",
        category: "Perbankan",
        description: "PT Bank Negara Indonesia (Persero), Tbk (BNI) pada awalnya didirikan di Indonesia sebagai Bank sentral. BNI merupakan Bank BUMN pertama yang menjadi perusahaan publik setelah mencatatkan sahamnya di Bursa Efek pada tahun 1996. Saat ini, 60% saham BNI dimiliki oleh Pemerintah, sedangkan 40% sisanya dimiliki oleh publik. BNI menawarkan layanan penyimpanan dana maupun fasilitas pinjaman baik pada segmen korporasi, menengah, maupun kecil.",
        vision: "Menjadi Lembaga Keuangan yang Unggul dalam Layanan dan Kinerja.",
        mission: `
            <ul>
                <li>Memberikan layanan prima dan solusi yang bernilai tambah kepada seluruh nasabah, dan selaku mitra pilihan utama.</li>
                <li>Meningkatkan nilai investasi yang unggul bagi investor.</li>
                <li>Menciptakan kondisi terbaik bagi karyawan sebagai tempat kebanggaan untuk berkarya dan berprestasi.</li>
                <li>Meningkatkan kepedulian dan tanggung jawab kepada lingkungan dan komunitas.</li>
                <li>Menjadi acuan pelaksanaan kepatuhan dan tata kelola perusahaan yang baik.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Perbankan'] || []
    },
    {
        slug: "bank-bri",
        name: "BANK BRI",
        category: "Perbankan",
        description: "Bank Rakyat Indonesia (BRI) adalah salah satu bank milik pemerintah yang terbesar di Indonesia. Bank Rakyat Indonesia (BRI) didirikan di Purwokerto, Jawa Tengah oleh Raden Bei Aria Wirjaatmadja tanggal 16 Desember 1895.",
        vision: "Menjadi The Most Valuable Bank di Asia Tenggara dan Home to the Best Talent.",
        mission: `<p>Melakukan kegiatan perbankan yang terbaik dengan mengutamakan pelayanan kepada segmen mikro, kecil, dan menengah untuk menunjang peningkatan ekonomi masyarakat.</p>`,
        motto: null,
        services: agencyServices['Perbankan'] || []
    },
    {
        slug: "bprs-patriot-bekasi",
        name: "BPRS PATRIOT BEKASI",
        category: "Perbankan",
        description: "PT. Bank Pembiayaan Rakyat Syariah (BPRS) Patriot Bekasi merupakan salah satu Badan Usaha Milik Daerah Pemerintah Kota Bekasi. Bisnis utama BPRS Patriot adalah menghimpun dana masyarakat dalam bentuk tabungan dengan prinsip wadiah atau mudharobah dan penyaluran pembiayaan dengan prinsip murabahah, musyarakah, mudharabah, ijaroh serta prinsip lain yang tidak bertentangan dengan prinsip Syariah Islam.",
        vision: "Menjadi BPRS yang Besar, Unggul dan Modern.",
        mission: `
            <ol>
                <li>Mewujudkan pertumbuhan dan keuntungan bagi bank dengan maksimal.</li>
                <li>Meningkatkan kualitas pemberdayaan ekonomi kerakyatan sesuai syariah.</li>
                <li>Mengembangkan bisnis-bisnis berlandaskan nilai-nilai syariah.</li>
                <li>Mengembangkan tata kelola perusahaan yang sehat.</li>
                <li>Meningkatkan kepedulian terhadap masyarakat dan lingkungan dunia usaha.</li>
            </ol>
        `,
        motto: "Tebar Manfaat Untuk Kemajuan Ekonomi Masyarakat Berlandaskan Syariah.",
        services: agencyServices['Perbankan'] || []
    },
    {
        slug: "bea-cukai-bekasi",
        name: "BEA CUKAI BEKASI",
        category: "Kementerian/Lembaga",
        description: "KPPBC TMP A Bekasi dibentuk sesuai dengan Peraturan Menteri Keuangan Republik Indonesia Nomor 188/PMK.01/2016 Tentang Organisasi dan Tata Kerja Vertikal Direktorat Jenderal Bea dan Cukai.",
        vision: null,
        mission: `
            <h4>Tugas Pokok</h4>
            <p>Melaksanakan pengawasan dan pelayanan terhadap pengguna jasa penerima fasilitas kepabeanan berupa kawasan berikat dan gudang berikat dan perusahaan barang kena cukai.</p>
            <h4>Fungsi</h4>
            <ul>
                <li>Pelayanan teknis di bidang kepabeanan dan cukai.</li>
                <li>Pelaksanaan pemberian perijinan dan fasilitas di bidang kepabeanan dan cukai.</li>
                <li>Pelaksanaan pemungutan dan pengadministrasian bea masuk, cukai, dan pungutan negara lainnya.</li>
                <li>Pelaksanaan intelijen, patroli, penindakan, dan penyidikan di bidang kepabeanan dan cukai.</li>
                <li>Pengelolaan dan pemeliharaan sarana operasi, sarana komunikasi, dan senjata api.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Bea Cukai'] || []
    },
    {
        slug: "ditjen-ahu",
        name: "DITJEN AHU",
        category: "Kementerian/Lembaga",
        description: "Direktorat Jenderal Administrasi Hukum Umum di bawah Kementerian Hukum dan HAM.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['Kemenkumham'] || []
    },
    {
        slug: "kemenag-kota-bekasi",
        name: "KEMENTERIAN AGAMA KOTA BEKASI",
        category: "Kementerian/Lembaga",
        description: "Instansi vertikal Kementerian Agama yang bertugas melaksanakan tugas dan fungsi Kementerian Agama di wilayah Kota Bekasi.",
        vision: `"Terwujudnya Masyarakat Indonesia yang Taat Beragama, Rukun, Cerdas, dan Sejahtera Lahir Batin dalam rangka Mewujudkan Indonesia yang Berdaulat, Mandiri, dan Berkepribadian Berlandaskan Gotong Royong"`,
        mission: `
            <ul>
                <li>Meningkatkan pemahaman dan pengamalan ajaran agama.</li>
                <li>Memantapkan kerukunan intra dan antar umat beragama.</li>
                <li>Menyediakan pelayanan kehidupan beragama yang merata dan berkualitas.</li>
                <li>Meningkatkan pemanfaatan dan kualitas pengelolaan potensi ekonomi keagamaan.</li>
                <li>Mewujudkan penyelenggaraan ibadah haji dan umrah yang berkualitas dan akuntabel.</li>
                <li>Meningkatkan akses dan kualitas pendidikan umum berciri agama, pendidikan agama pada satuan pendidikan umum, dan pendidikan keagamaan.</li>
                <li>Mewujudkan tatakelola pemerintahan yang bersih, akuntabel, dan terpercaya.</li>
            </ul>
        `,
        motto: null,
        services: []
    },
    {
        slug: "polres-kota-bekasi",
        name: "POLRES METRO BEKASI KOTA",
        category: "Kementerian/Lembaga",
        description: "Melayani pembuatan Surat Izin Mengemudi (SIM) dan Surat Keterangan Catatan Kepolisian (SKCK). SIM adalah bukti registrasi dan identifikasi yang diberikan oleh Polri kepada seseorang yang telah memenuhi persyaratan. SKCK adalah surat keterangan resmi yang diterbitkan oleh POLRI yang berisikan catatan kejahatan seseorang dan memiliki masa berlaku sampai dengan 6 (enam) bulan sejak tanggal diterbitkan.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['Polres'] || []
    },
    {
        slug: "djp-jabar-iii",
        name: "KPP PRATAMA (DJP)",
        category: "Kementerian/Lembaga",
        description: "Unit vertikal Direktorat Jenderal Pajak yang bertanggung jawab atas administrasi perpajakan di wilayahnya.",
        vision: "Menjadi Mitra Tepercaya Pembangunan Bangsa untuk Menghimpun Penerimaan Negara melalui Penyelenggaraan Administrasi Perpajakan yang Efisien, Efektif, Berintegritas, dan Berkeadilan.",
        mission: `
            <ul>
                <li>Merumuskan regulasi perpajakan yang mendukung pertumbuhan ekonomi Indonesia.</li>
                <li>Meningkatkan kepatuhan pajak melalui pelayanan berkualitas dan terstandardisasi, edukasi dan pengawasan yang efektif, serta penegakan hukum yang adil.</li>
                <li>Mengembangkan proses bisnis inti berbasis digital didukung budaya organisasi yang adaptif dan kolaboratif serta aparatur pajak yang berintegritas, profesional, dan bermotivasi.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['DJP'] || []
    },
    {
        slug: "kantor-imigrasi-kota-bekasi",
        name: "KANTOR IMIGRASI",
        category: "Kementerian/Lembaga",
        description: "Kantor Imigrasi Kelas I Non TPI Bekasi dibentuk serta melaksanakan tugas pokok dan fungsinya mengacu pada Peraturan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor 19 Tahun 2018.",
        vision: null,
        mission: `
            <h4>Tugas Pokok</h4>
            <p>Melaksanakan sebagian tugas Direktorat Jenderal Imigrasi di wilayah kerja meliputi kota dan kabupaten Bekasi.</p>
            <h4>Fungsi</h4>
            <ul>
                <li>Penyusunan rencana dan program di bidang keimigrasian.</li>
                <li>Pelaksanaan tugas keimigrasian di bidang pelayanan dokumen perjalanan.</li>
                <li>Pelaksanaan tugas keimigrasian di bidang pemeriksaan keimigrasian.</li>
                <li>Pelaksanaan tugas keimigrasian di bidang pelayanan izin tinggal dan status keimigrasian.</li>
                <li>Pelaksanaan tugas keimigrasian di bidang pengawasan dan intelijen keimigrasian.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Imigrasi'] || []
    },
    {
        slug: "pengadilan-agama-bekasi",
        name: "PENGADILAN AGAMA BEKASI",
        category: "Kementerian/Lembaga",
        description: "Lembaga peradilan tingkat pertama yang melaksanakan kekuasaan kehakiman bagi rakyat pencari keadilan yang beragama Islam mengenai perkara perdata tertentu.",
        vision: `"Terwujudnya Pengadilan Agama Bekasi yang Agung"`,
        mission: `
            <ul>
                <li>Meningkatkan Kemandirian Pengadilan Agama Bekasi.</li>
                <li>Memberikan Pelayanan Hukum yang Berkeadilan kepada Pencari Keadilan.</li>
                <li>Meningkatkan Kualitas Kepemimpinan Pengadilan Agama Bekasi.</li>
                <li>Meningkatkan Kredibilitas dan Transparasi Pengadilan Agama Bekasi.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Pengadilan Agama'] || []
    },
    {
        slug: "pengadilan-negeri-bekasi",
        name: "PENGADILAN NEGERI BEKASI",
        category: "Kementerian/Lembaga",
        description: "Sebuah lembaga peradilan umum tingkat pertama yang berwenang memeriksa, memutus, dan menyelesaikan perkara pidana dan perdata bagi rakyat pencari keadilan pada umumnya.",
        vision: `"Terwujudnya Pengadilan Negeri Bekasi yang Agung"`,
        mission: `
            <ul>
                <li>Meningkatkan Kemandirian Pengadilan Negeri Bekasi.</li>
                <li>Memberikan Pelayanan Hukum yang Berkeadilan kepada Pencari Keadilan.</li>
                <li>Meningkatkan Kualitas Kepemimpinan Pengadilan Negeri Bekasi.</li>
                <li>Meningkatkan Kredibilitas dan Transparasi Pengadilan Negeri Bekasi.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Pengadilan Negeri'] || []
    },
    {
        slug: "kejaksaan-negeri-kota-bekasi",
        name: "KEJAKSAAN NEGERI KOTA BEKASI",
        category: "Kementerian/Lembaga",
        description: "Lembaga kejaksaan yang berkedudukan di ibu kota kabupaten/kota dan daerah hukumnya meliputi wilayah kekuasaan kabupaten/kota tersebut.",
        vision: "Kejaksaan sebagai lembaga penegak hukum yang bersih, efektif, efisien, transparan, akuntabel, untuk dapat memberikan pelayanan prima dalam mewujudkan supremasi hukum secara profesional, proporsional dan bermartabat.",
        mission: `<p>Mengoptimalkan pelaksanaan fungsi Kejaksaan dalam pelaksanaan tugas dan wewenang, baik dalam segi kualitas maupun kuantitas penanganan perkara seluruh tindak pidana, penanganan perkara Perdata dan Tata Usaha Negara, serta pengoptimalan kegiatan Intelijen Kejaksaan.</p>`,
        motto: null,
        services: agencyServices['Kejaksaan'] || []
    },
    {
        slug: "samsat-jawa-barat",
        name: "SAMSAT JAWA BARAT",
        category: "Pemerintah Provinsi",
        description: "Samsat atau Sistem Administrasi Manunggal Satu Atap merupakan serangkaian kegiatan dalam penyelenggaraan Registrasi dan Identifikasi Kendaraan Bermotor (Regiden Ranmor), pembayaran Pajak Kendaraan Bermotor (PKB), Bea Balik Nama Kendaraan Bermotor (BBNKB), dan pembayaran Sumbangan Wajib Dana Kecelakaan Lalu Lintas (SWDKLLJ).",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['Samsat'] || []
    },
    {
        slug: "dpmptsp-jabar",
        name: "DPMPTSP JABAR",
        category: "Pemerintah Provinsi",
        description: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (Dinas PMPTSP) Provinsi Jawa Barat bertugas melaksanakan urusan pemerintahan bidang penanaman modal dan pelayanan terpadu satu pintu yang menjadi kewenangan Provinsi.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['DPMPTSP'] || []
    },
    {
        slug: "bapenda",
        name: "BAPENDA",
        category: "Pemerintah Daerah",
        description: "Badan Pendapatan Daerah Kota Bekasi yang bertugas mengelola pendapatan daerah, khususnya dari sektor pajak.",
        vision: "Pengelola Pendapatan Daerah yang Profesional dan Amanah.",
        mission: `
            <ol>
                <li>Meningkatkan Tata Kelola Pelayanan Pajak Daerah.</li>
                <li>Memantapkan Kinerja Kompetensi Aparatur dan Organisasi.</li>
                <li>Mengoptimalkan Penerimaan Pendapatan Daerah.</li>
            </ol>
        `,
        motto: null,
        services: agencyServices['Bapenda'] || []
    },
    {
        slug: "bpn-kota-bekasi",
        name: "BPN KOTA BEKASI",
        category: "Pemerintah Daerah",
        description: "Kantor Pertanahan Kota Bekasi yang berada di bawah naungan Badan Pertanahan Nasional.",
        vision: "Menjadi lembaga yang mampu mewujudkan tanah dan pertanahan untuk sebesar-besar kemakmuran rakyat, serta keadilan dan keberlanjutan sistem kemasyarakatan.",
        mission: `<p>Mengembangkan dan menyelenggarakan politik dan kebijakan pertanahan untuk peningkatan kesejahteraan rakyat, penciptaan sumber-sumber baru kemakmuran rakyat, pengurangan kemiskinan dan kesenjangan pendapatan, serta pemantapan ketahanan pangan.</p>`,
        motto: null,
        services: agencyServices['BPN'] || []
    },
    {
        slug: "dinkes-kota-bekasi",
        name: "DINKES KOTA BEKASI",
        category: "Pemerintah Daerah",
        description: "Dinas Kesehatan Kota Bekasi bertanggung jawab atas penyelenggaraan urusan pemerintahan di bidang kesehatan.",
        vision: `"Unggul dalam Pelayanan Kesehatan Prima Menuju Masyarakat Kota Bekasi Sehat Yang Mandiri."`,
        mission: `
            <ol>
                <li>Peningkatan Kualitas Pelayanan Kesehatan.</li>
                <li>Perbaikan Lingkungan.</li>
                <li>Pemberdayaan Unit Pelayanan Kesehatan Swasta.</li>
                <li>Peningkatan Kualitas Sumberdaya Tenaga Kesehatan dan Masyarakat.</li>
                <li>Pengembangan Jaminan Kesehatan Masyarakat.</li>
            </ol>
        `,
        motto: null,
        services: agencyServices['Dinkes'] || []
    },
    {
        slug: "disdukcapil-kota-bekasi",
        name: "DISDUKCAPIL KOTA BEKASI",
        category: "Pemerintah Daerah",
        description: "Dinas Kependudukan dan Catatan Sipil bertanggung jawab atas administrasi kependudukan di Kota Bekasi.",
        vision: `"Profesional Dalam Pelayanan Administrasi Kependudukan Yang Berbasis Informasi dan Teknologi".`,
        mission: `
            <ul>
                <li>Meningkatkan kelancaran pelayanan kantor.</li>
                <li>Membangun database kependudukan yang berbasis informasi dan teknologi.</li>
                <li>Mewujudkan pelayanan prima kependudukan dan catatan sipil.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['Disdukcapil'] || []
    },
    {
        slug: "disnaker-kota-bekasi",
        name: "DISNAKER KOTA BEKASI",
        category: "Pemerintah Daerah",
        description: "Dinas Tenaga Kerja Kota Bekasi memiliki tugas melaksanakan urusan pemerintahan daerah di bidang tenaga kerja.",
        vision: `"Cerdas, Kreatif, Maju, Sejahtera dan Ihsan"`,
        mission: `
            <ol>
                <li>Meningkatkan kapasitas tata kelola pemerintahan yang baik.</li>
                <li>Meningkatkan perekonomian berbasis potensi jasa kreatif dan perdagangan.</li>
                <li>Meningkatkan dan mengembangkan kualitas kehidupan masyarakat.</li>
            </ol>
        `,
        motto: "SMART (Sepenuh Hati, Mudah, Amanah, Ramah, Terpercaya)",
        services: agencyServices['Disnaker'] || []
    },
    {
        slug: "dpmptsp-kota-bekasi",
        name: "DPMPTSP KOTA BEKASI",
        category: "Pemerintah Daerah",
        description: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Bekasi mempunyai tugas pokok membantu Walikota dalam menyelenggarakan pelayanan administrasi di bidang perizinan dan penanaman modal.",
        vision: `"Cerdas, Kreatif, Maju, Sejahtera dan Ihsan"`,
        mission: `
            <ol>
                <li>Meningkatkan Kapasitas Tata Kelola Pemerintahan yang baik.</li>
                <li>Membangun, Meningkatkan dan Mengembangkan Prasarana dan Sarana Kota.</li>
                <li>Meningkatkan perekonomian berbasis potensial jasa kreatif dan perdagangan.</li>
            </ol>
        `,
        motto: null,
        services: agencyServices['DPMPTSP'] || []
    },
    {
        slug: "asabri",
        name: "ASABRI",
        category: "BUMN",
        description: "PT ASABRI (Persero) adalah BUMN yang bergerak di bidang Asuransi Sosial dan pembayaran pensiun khusus untuk Prajurit TNI, Anggota Polri, dan PNS Kementerian Pertahanan.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['BUMN'] || []
    },
    {
        slug: "bpjs-kesehatan",
        name: "BPJS KESEHATAN",
        category: "BUMN",
        description: "Badan Penyelenggara Jaminan Sosial Kesehatan adalah badan hukum publik yang menyelenggarakan program jaminan kesehatan bagi seluruh rakyat Indonesia.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['BPJS'] || []
    },
    {
        slug: "bpjs-ketenagakerjaan",
        name: "BPJS KETENAGAKERJAAN",
        category: "BUMN",
        description: "Badan Penyelenggara Jaminan Sosial Ketenagakerjaan adalah badan hukum publik yang memberikan perlindungan bagi tenaga kerja untuk mengatasi risiko sosial ekonomi tertentu.",
        vision: null,
        mission: null,
        motto: null,
        services: agencyServices['BPJS'] || []
    },
    {
        slug: "pos-indonesia",
        name: "POS INDONESIA",
        category: "BUMN",
        description: "Perusahaan BUMN Indonesia yang bergerak di bidang layanan pos. Mempunyai jaringan yang sangat luas hingga 4.800 kantor pos online.",
        vision: "Menjadi pilihan utama layanan logistik dan jasa keuangan.",
        mission: `
            <ul>
                <li>Memberikan solusi layanan logistik e-commerce yang kompetitif.</li>
                <li>Menjalankan fungsi designated operator secara profesional dan kompetitif.</li>
                <li>Memberikan solusi jasa layanan keuangan terintegrasi yang kompetitif.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['BUMN'] || []
    },
    {
        slug: "taspen",
        name: "TASPEN",
        category: "BUMN",
        description: "PT TASPEN (Persero) atau Dana Tabungan dan Asuransi Pegawai Negeri adalah BUMN yang bergerak di bidang asuransi tabungan hari tua dan dana pensiun bagi ASN dan Pejabat Negara.",
        vision: `"Menjadi Perusahaan Asuransi Sosial dan Dana Pensiun yang Unggul, Terpercaya dan Berkelanjutan."`,
        mission: `<p>"Memastikan terwujudnya Layanan Terbaik dan Investasi yang Andal serta Kepemimpinan Inovasi Bisnis dan Transformasi Digital."</p>`,
        motto: null,
        services: agencyServices['BUMN'] || []
    },
    {
        slug: "telkom-indonesia",
        name: "TELKOM INDONESIA",
        category: "BUMN",
        description: "PT Telkom Indonesia (Persero) Tbk adalah BUMN yang bergerak di bidang jasa layanan teknologi informasi dan komunikasi (TIK) dan jaringan telekomunikasi di Indonesia.",
        vision: "Menjadi digital telco pilihan utama untuk memajukan masyarakat.",
        mission: `
            <ul>
                <li>Mempercepat pembangunan Infrastruktur dan platform digital cerdas.</li>
                <li>Mengembangkan talenta digital unggulan.</li>
                <li>Mengorkestrasi ekosistem digital untuk memberikan pengalaman digital pelanggan terbaik.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['BUMN'] || []
    },
    {
        slug: "pdam-kota-bekasi",
        name: "PDAM KOTA BEKASI",
        category: "BUMD",
        description: "Tirta Bhagasasi (PDAM Bekasi) adalah penyedia jasa air bersih bagi area industri, bisnis, dan pemukiman di wilayah Kabupaten dan sebagian Kota Bekasi.",
        vision: "Mewujudkan PDAM Bekasi yang Profesional, Sehat dan Melayani.",
        mission: `
            <ul>
                <li>Mewujudkan entitas bisnis yang profesional berdasarkan tata nilai unggulan.</li>
                <li>Mewujudkan perusahaan yang memberikan nilai bagi pemilik, karyawan dan masyarakat.</li>
                <li>Menjalankan bisnis air yang berorientasi pada kepuasan Stakeholder.</li>
            </ul>
        `,
        motto: null,
        services: agencyServices['BUMD'] || []
    },
];
    