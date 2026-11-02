import { GraduationCap, Briefcase, Code2, Target } from 'lucide-react';
import bicopi from "@/app/image/bicopi.png";
import bicopi1 from "@/app/image/bicopi1.png";
import bicopi2 from "@/app/image/bicopi2.png";
import ozonisasi1 from "@/app/image/ozonisasi1.png";
import ozonisasi2 from "@/app/image/ozonisasi2.png";
import ozonisasi3 from "@/app/image/ozonisasi3.png";
import ozonisasi4 from "@/app/image/ozonisasi4.png";

export const PROFILE_DATA = {
  name: "Arifin",
  role: "Frontend & Fullstack Developer",
  shortBio: "Saya membangun aplikasi web modern dan mobile yang cepat, responsif, dan user friendly.",
  fullBio: "Saya adalah seorang developer yang memiliki pengalaman dalam pengembangan aplikasi web, mobile, dan IoT. Selalu tertarik untuk belajar teknologi baru dan membuat solusi yang bermanfaat.",
  socials: {
    github: "https://github.com/arifindzaki",
    linkedin: "https://www.linkedin.com/in/dzakiarifin/",
    instagram: "https://www.instagram.com/arifindzaki_/",
    email: "mailto:dzar2673@gmail.com"
  },
  stats: [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "Politeknik Negeri Jember",
      detail: "D4 Teknik Informatika"
    },
    {
      icon: Briefcase,
      title: "Experience",
      subtitle: "Magang & Project",
      detail: "2+ Tahun"
    },
    {
      icon: Code2,
      title: "Specialization",
      subtitle: "Web Development, Mobile App,",
      detail: "IoT, Database"
    },
    {
      icon: Target,
      title: "Focus",
      subtitle: "Membangun aplikasi yang",
      detail: "bermanfaat dan inovatif"
    }
  ],
  projects: [
    {
      id: 1,
      title: "BICOPI POS",
      category: "Mobile",
      tech: "Flutter",
      description: "Aplikasi kasir berbasis Flutter untuk memudahkan transaksi penjualan.",
      longDescription: "BICOPI POS adalah sistem Point of Sale lengkap dengan fitur manajemen stok barang, riwayat transaksi harian, cetak struk Bluetooth, dan laporan keuangan interaktif.",
      image: bicopi,
      images: [bicopi, bicopi1, bicopi2],
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      imageOrientation: "portrait",
      demoUrl: "#",
      githubUrl: "https://github.com/AkbarIlham20st/BicoopisMobile"
    },
    {
      id: 2,
      title: "IoT Sterilisasi Apel",
      category: "IoT",
      tech: "IoT",
      description: "Sistem sterilisasi buah apel berbasis IoT dengan kontrol durasi ozonisasi.",
      longDescription: "Sistem otomasi kamar sterilisasi apel berbasis Ozon menggunakan sensor gas, microcontroller ESP32, dan integrasi monitoring waktu nyata lewat aplikasi web dashboard.",
      image: ozonisasi1,
      images: [ozonisasi1, ozonisasi2, ozonisasi3, ozonisasi4],
      tags: ["IoT", "ESP32", "C++", "MQTT", "NodeJS"],
      imageOrientation: "portrait",
      demoUrl: "#",
      githubUrl: "https://github.com/arifindzaki/MonitoringSterilisasiOzoneWater"
    },
    {
      id: 3,
      title: "Website Operasional Perusahaan",
      category: "Web",
      tech: "Laravel",
      description: "Sistem operasional perusahaan untuk mengelola maintenance mesin, approval pengajuan surat, dan memantau data mesin dari PLC.",
      longDescription: "Website operasional perusahaan ini membantu tim mengelola data dan jadwal maintenance mesin, mengajukan serta meninjau surat melalui alur approval, dan memantau status serta parameter mesin secara real-time dari PLC. Satu dashboard menyatukan informasi operasional agar kondisi mesin dan tindak lanjutnya lebih mudah dipantau.",
      image: "/operational-dashboard.svg",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "PLC Monitoring", "Approval"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Monitoring Penyiraman Otomatis",
      category: "IoT",
      tech: "IoT & Web",
      description: "Sistem pemantauan kelembapan tanah dan penyiraman tanaman secara otomatis berdasarkan data sensor.",
      longDescription: "Sistem monitoring penyiraman otomatis menampilkan data kelembapan tanah dari sensor, status katup air, dan jadwal penyiraman per area. Penyiraman dapat berjalan otomatis saat kelembapan turun dari ambang yang ditentukan, sementara kondisi tanaman dan aktivitas penyiraman dapat dipantau melalui dashboard.",
      image: "/automatic-irrigation.svg",
      tags: ["IoT", "Sensor Kelembapan", "Otomasi", "Monitoring"],
      imageOrientation: "portrait",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "MSJ Trans - Sistem Rental Mobil",
      category: "Web",
      tech: "Web App",
      description: "Sistem pemesanan rental mobil untuk melihat pilihan kendaraan dan mengajukan jadwal sewa.",
      longDescription: "Sistem rental mobil MSJ Trans dirancang untuk membantu pelanggan melihat pilihan kendaraan, memilih tanggal dan lokasi penjemputan, lalu mengajukan pemesanan. Pengelola dapat meninjau permintaan sewa serta mengatur informasi kendaraan dan ketersediaannya.",
      image: "/msj-trans-rental.svg",
      tags: ["Rental Mobil", "Pemesanan Online", "Manajemen Kendaraan"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Aplikasi Pembelajaran LPK Ilmiah",
      category: "Web",
      tech: "Learning Platform",
      description: "Platform pembelajaran untuk mengakses materi pelatihan dan memantau progres belajar peserta LPK Ilmiah.",
      longDescription: "Aplikasi pembelajaran LPK Ilmiah menyediakan ruang belajar digital bagi peserta untuk mengakses materi pelatihan, melihat program pembelajaran, dan memantau progres belajar. Berikut tautan video demo aplikasi.",
      image: "/lpk-ilmiah-learning.svg",
      tags: ["E-Learning", "Manajemen Materi", "Progress Belajar"],
      demoUrl: "https://drive.google.com/drive/folders/1ylAznegytk6DvaMI8wAN1laLEk9ZS3AY?usp=sharing",
      githubUrl: "#"
    }
  ]
};