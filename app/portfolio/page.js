'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ozonisasi1 from '../image/ozonisasi1.png';

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
      image:
        "https://images.unsplash.com/photo-1556742049-0a670fc80799?auto=format&fit=crop&w=800&q=80",
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      githubUrl: "#"
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
      tags: ["IoT", "ESP32", "C++", "MQTT", "NodeJS"],
      githubUrl: "https://github.com/arifindzaki/MonitoringSterilisasiOzoneWater"
    },
    {
      id: 3,
      title: "Dashboard Admin",
      category: "Web",
      tech: "Laravel",
      description:
        "Dashboard admin untuk manajemen data dan monitoring sistem.",
      longDescription:
        "Dashboard administratif modern lengkap dengan manajemen pengguna, analitik penjualan terintegrasi chart interaktif, ekspor PDF/Excel, dan sistem otorisasi peran.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "Chart.js"],
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Smart Greenhouse App",
      category: "IoT",
      tech: "React & IoT",
      description:
        "Aplikasi monitoring dan kontrol otomatis suhu & kelembaban tanah perkebunan.",
      longDescription:
        "Sistem pemantauan iklim mikro tanaman dengan peringatan dini otomatis saat kelembaban tanah turun di bawah ambang batas.",
      image:
        "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "WebSockets"],
      githubUrl: "#"
    }
  ]
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile', 'IoT'];

  const filteredProjects =
    filter === 'All'
      ? PROFILE_DATA.projects
      : PROFILE_DATA.projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  const renderProjectCard = (project) => (
    <div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="group bg-[#121826] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
    >
      <div>
        <div
          className={`relative overflow-hidden bg-slate-900 ${
            project.id === 2 ? 'h-[420px] md:h-[520px]' : 'h-48'
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
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
          {filter === 'All' ? (
            <>
              <div className="space-y-6">
                {PROFILE_DATA.projects
                  .filter((project) => project.id === 1 || project.id === 4)
                  .map(renderProjectCard)}
              </div>
              {renderProjectCard(PROFILE_DATA.projects.find((project) => project.id === 2))}
              {renderProjectCard(PROFILE_DATA.projects.find((project) => project.id === 3))}
            </>
          ) : (
            filteredProjects.map(renderProjectCard)
          )}
        </div>

      </div>

      {}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#121826] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-left">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <CloseIcon />
            </button>

            <div className="relative h-60 bg-slate-900 overflow-hidden">
            <Image
  src={selectedProject.image}
  alt={selectedProject.title}
  fill
  className="w-full h-full object-contain"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-2 pt-2">
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
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/20"
                >
                  <span>Repository</span>
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}