'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import bicopi from '../image/bicopi.png';
import bicopi1 from '../image/bicopi1.png';
import bicopi2 from '../image/bicopi2.png';
import ozonisasi1 from '../image/ozonisasi1.png';
import ozonisasi2 from '../image/ozonisasi2.png';
import ozonisasi3 from '../image/ozonisasi3.png';
import ozonisasi4 from '../image/ozonisasi4.png';
import lpk1 from '../image/lpk1.jpg';
import lpk2 from '../image/lpk2.jpg';
import lpk3 from '../image/lpk3.jpg';
import lpk4 from '../image/lpk4.jpg';
import hujan1 from '../image/hujan1.jpeg';
import hujan2 from '../image/hujan2.jpeg';
import hujan3 from '../image/hujan3.jpeg';
import msj1 from '../image/msj1.jpeg';
import msj2 from '../image/msj2.jpeg';
import msj3 from '../image/msj3.jpeg';
import msj4 from '../image/msj4.jpeg';
import msj5 from '../image/msj5.jpeg';
import msj6 from '../image/msj6.jpeg';
import ProjectCardImage from '../components/ProjectCardImage';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PROFILE_DATA = {
  projects: [
    {
      id: 1,
      title: "BICOPI POS",
      category: "Mobile",
      tech: "Flutter",
      description:
        "Aplikasi kasir berbasis Flutter untuk memudahkan transaksi penjualan.",
      longDescription:
        "BICOPI POS adalah sistem Point of Sale lengkap dengan fitur manajemen stok barang, riwayat transaksi harian, cetak struk Bluetooth, dan laporan keuangan interaktif.",
      image: bicopi,
      images: [bicopi, bicopi1, bicopi2],
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      imageOrientation: "portrait",
      githubUrl: "https://github.com/AkbarIlham20st/BicoopisMobile"
    },
    {
      id: 2,
      title: "IoT Sterilisasi Apel",
      category: "IoT",
      tech: "IoT",
      description:
        "Sistem sterilisasi buah apel berbasis IoT dengan kontrol durasi ozonisasi.",
      longDescription:
        "Sistem otomasi kamar sterilisasi apel berbasis Ozon menggunakan sensor gas, microcontroller ESP32, dan integrasi monitoring waktu nyata lewat aplikasi web dashboard.",
      image: ozonisasi1,
      images: [ozonisasi1, ozonisasi2, ozonisasi3, ozonisasi4],
      tags: ["IoT", "ESP32", "C++", "MQTT", "NodeJS"],
      imageOrientation: "portrait",
      githubUrl: "https://github.com/arifindzaki/MonitoringSterilisasiOzoneWater"
    },
    {
      id: 3,
      title: "Website Operasional Perusahaan",
      category: "Web",
      tech: "Laravel",
      description:
        "Sistem operasional perusahaan untuk mengelola maintenance mesin, approval pengajuan surat, dan memantau data mesin dari PLC.",
      longDescription:
        "Website operasional perusahaan ini membantu tim mengelola data dan jadwal maintenance mesin, mengajukan serta meninjau surat melalui alur approval, dan memantau status serta parameter mesin secara real-time dari PLC. Satu dashboard menyatukan informasi operasional agar kondisi mesin dan tindak lanjutnya lebih mudah dipantau.",
      image: "/operational-dashboard.svg",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "PLC Monitoring", "Approval"],
      imageOrientation: "landscape",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Monitoring Penyiraman Otomatis",
      category: "IoT",
      tech: "IoT & Web",
      description:
        "Sistem pemantauan kelembapan tanah dan penyiraman tanaman secara otomatis berdasarkan data sensor.",
      longDescription:
        "Sistem monitoring penyiraman otomatis menampilkan data kelembapan tanah dari sensor, status katup air, dan jadwal penyiraman per area. Penyiraman dapat berjalan otomatis saat kelembapan turun dari ambang yang ditentukan, sementara kondisi tanaman dan aktivitas penyiraman dapat dipantau melalui dashboard.",
      image: hujan1,
      images: [hujan1, hujan2, hujan3],
      tags: ["IoT", "Sensor Kelembapan", "Otomasi", "Monitoring"],
      imageOrientation: "portrait",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "MSJ Trans - Sistem Rental Mobil",
      category: "Mobile",
      tech: "Mobile App",
      description:
        "Aplikasi pemesanan rental mobil untuk melihat pilihan kendaraan dan mengajukan jadwal sewa.",
      longDescription:
        "Aplikasi mobile rental mobil MSJ Trans dirancang untuk membantu pelanggan melihat pilihan kendaraan, memilih tanggal dan lokasi penjemputan, lalu mengajukan pemesanan. Pengelola dapat meninjau permintaan sewa serta mengatur informasi kendaraan dan ketersediaannya.",
      image: msj1,
      images: [msj1, msj2, msj3, msj4, msj5, msj6],
      tags: ["Rental Mobil", "Pemesanan Online", "Manajemen Kendaraan"],
      imageOrientation: "portrait",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Aplikasi Pembelajaran LPK Ilmiah",
      category: "Mobile",
      tech: "Mobile App",
      description:
        "Aplikasi pembelajaran untuk mengakses materi pelatihan dan memantau progres belajar peserta LPK Ilmiah.",
      longDescription:
        "Aplikasi mobile pembelajaran LPK Ilmiah menyediakan ruang belajar digital bagi peserta untuk mengakses materi pelatihan, melihat program pembelajaran, dan memantau progres belajar. Berikut tautan video demo aplikasi.",
      image: lpk1,
      images: [lpk1, lpk2, lpk3, lpk4],
      tags: ["E-Learning", "Manajemen Materi", "Progress Belajar"],
      imageOrientation: "portrait",
      demoUrl:
        "https://drive.google.com/drive/folders/1ylAznegytk6DvaMI8wAN1laLEk9ZS3AY?usp=sharing",
      githubUrl: "#"
    }
  ]
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ['All', 'Web', 'Mobile', 'IoT'];

  const selectedImages = selectedProject
    ? selectedProject.images || [selectedProject.image]
    : [];

  useEffect(() => {
    if (!selectedProject || selectedImages.length < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        (currentIndex + 1) % selectedImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject, selectedImages.length]);

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      (currentIndex + 1) % selectedImages.length
    );
  };

  const openProject = (project) => {
    setActiveImageIndex(0);
    setSelectedProject(project);
  };

  const filteredProjects =
    filter === 'All'
      ? PROFILE_DATA.projects
      : PROFILE_DATA.projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  const renderProjectCard = (project) => (
    <div
      key={project.id}
      onClick={() => openProject(project)}
      className="group h-fit bg-[#121826] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
    >
      <div>
        <div
          className={`relative overflow-hidden bg-slate-900 ${
            project.imageOrientation === 'portrait'
              ? 'h-[420px] md:h-[520px]'
              : 'h-48'
          }`}
        >
          <ProjectCardImage
            src={project.image}
            images={project.images}
            alt={project.title}
            className="object-contain transition-transform duration-500"
          />
        </div>

        <div className="p-5 text-left space-y-2.5">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 text-left">
        <span className="inline-block px-3 py-1 rounded-md text-[11px] font-medium bg-blue-950/70 text-blue-400 border border-blue-800/40">
          {project.tech}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-[#0B0F17] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio
            </h1>
            <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {}

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(renderProjectCard)}
        </div>

      </div>

      {}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121826] border border-slate-800 rounded-2xl shadow-2xl text-left grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <CloseIcon />
            </button>

            <div className="order-1 p-5 space-y-3 lg:order-1 lg:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-6">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Teknologi:
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {}

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <span>Repository</span>
                    <GithubIcon />
                  </a>
                )}
                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-violet-600/20"
                  >
                    <span>Video Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="relative order-2 min-h-[26rem] bg-slate-900 overflow-hidden lg:order-2 lg:min-h-[36rem]">
              <Image
                src={selectedImages[activeImageIndex]}
                alt={`${selectedProject.title} afbeelding ${activeImageIndex + 1}`}
                fill
                className="w-full h-full object-contain"
              />

              {selectedImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 px-3 py-2 text-2xl text-white hover:bg-blue-600 transition-colors"
                  >
                    &#8592;
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Gambar berikutnya"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 px-3 py-2 text-2xl text-white hover:bg-blue-600 transition-colors"
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}