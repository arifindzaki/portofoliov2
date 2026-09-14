import { GraduationCap, Briefcase, Code2, Target } from 'lucide-react';
import ozonisasi1 from "@/app/image/ozonisasi1.png";export const PROFILE_DATA = {
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
      image: "/image/bicopi2.png",
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "IoT Sterilisasi Apel",
      category: "IoT",
      tech: "IoT",
      description: "Sistem sterilisasi buah apel berbasis IoT dengan kontrol durasi ozonisasi.",
      longDescription: "Sistem otomasi kamar sterilisasi apel berbasis Ozon menggunakan sensor gas, microcontroller ESP32, dan integrasi monitoring waktu nyata lewat aplikasi web dashboard.",
      image: ozonisasi1,
      tags: ["IoT", "ESP32", "C++", "MQTT", "NodeJS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Dashboard Admin",
      category: "Web",
      tech: "Laravel",
      description: "Dashboard admin untuk manajemen data dan monitoring sistem.",
      longDescription: "Dashboard administratif modern lengkap dengan manajemen pengguna, analitik penjualan terintegrasi chart interaktif, ekspor PDF/Excel, dan sistem otorisasi peran.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Smart Greenhouse App",
      category: "IoT",
      tech: "React & IoT",
      description: "Aplikasi monitoring dan kontrol otomatis suhu & kelembaban tanah perkebunan.",
      longDescription: "Sistem pemantauan iklim mikro tanaman dengan peringatan dini otomatis saat kelembaban tanah turun di bawah ambang batas.",
      image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "WebSockets"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ]
};